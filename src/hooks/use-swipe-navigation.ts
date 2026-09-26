import { useRef, type PointerEvent, type WheelEvent } from "react";

/** Horizontal touch, mouse-drag, and trackpad navigation without hijacking vertical scrolling. */
export function useSwipeNavigation(onStep: (direction: number) => void) {
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const wheel = useRef({ distance: 0, lastEvent: 0, lastStep: 0 });

  return {
    onPointerDown(event: PointerEvent<HTMLElement>) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if ((event.target as HTMLElement).closest("button, a")) return;
      start.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    onPointerUp(event: PointerEvent<HTMLElement>) {
      if (!start.current || start.current.id !== event.pointerId) return;
      const x = event.clientX - start.current.x;
      const y = event.clientY - start.current.y;
      if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y) * 1.2) {
        onStep(x < 0 ? 1 : -1);
      }
      start.current = null;
    },
    onPointerCancel() {
      start.current = null;
    },
    onWheel(event: WheelEvent<HTMLElement>) {
      if (Math.abs(event.deltaX) < Math.abs(event.deltaY) * 1.2) return;
      const now = Date.now();
      if (now - wheel.current.lastStep < 450) return;
      wheel.current.distance = now - wheel.current.lastEvent > 250 ? 0 : wheel.current.distance;
      wheel.current.distance += event.deltaX;
      wheel.current.lastEvent = now;
      if (Math.abs(wheel.current.distance) > 45) {
        onStep(wheel.current.distance > 0 ? 1 : -1);
        wheel.current.distance = 0;
        wheel.current.lastStep = now;
      }
    },
  };
}
