import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Pointer coordinates feed CSS variables so the visual stays GPU-only. */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (
      window.innerWidth < 768 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !root.current
    )
      return;
    const rect = root.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    root.current.style.setProperty("--tilt-rx", `${(0.5 - y) * 8}deg`);
    root.current.style.setProperty("--tilt-ry", `${(x - 0.5) * 10}deg`);
    root.current.style.setProperty("--tilt-gx", `${x * 100}%`);
    root.current.style.setProperty("--tilt-gy", `${y * 100}%`);
    root.current.classList.add("is-hover", "is-tilting");
  };
  const reset = () => {
    root.current?.style.setProperty("--tilt-rx", "0deg");
    root.current?.style.setProperty("--tilt-ry", "0deg");
    root.current?.classList.remove("is-hover", "is-tilting");
  };
  return (
    <div ref={root} onMouseMove={move} onMouseLeave={reset} className={cn("t-tilt", className)}>
      <div className="t-tilt-card">
        {children}
        <span className="t-tilt-glare" aria-hidden="true" />
      </div>
    </div>
  );
}
