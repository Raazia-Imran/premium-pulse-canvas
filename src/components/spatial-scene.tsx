import { useEffect, useRef, type MouseEvent } from "react";
import { CheckCircle2, Radio, ShieldCheck } from "lucide-react";
import island from "@/assets/hosh-industrial-island.jpg";

export function SpatialScene() {
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.innerWidth < 768) scene.current?.style.setProperty("--scene-active", "0");
  }, []);
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768 || !scene.current) return;
    const box = scene.current.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - 0.5) * 2;
    const y = ((event.clientY - box.top) / box.height - 0.5) * 2;
    scene.current.style.setProperty("--rx", `${y * -2.5}deg`);
    scene.current.style.setProperty("--ry", `${x * 3.5}deg`);
    scene.current.style.setProperty("--tx", `${x * 8}px`);
    scene.current.style.setProperty("--ty", `${y * 6}px`);
  };
  return (
    <div
      ref={scene}
      onMouseMove={move}
      onMouseLeave={() => {
        scene.current?.style.setProperty("--rx", "0deg");
        scene.current?.style.setProperty("--ry", "0deg");
      }}
      className="scene-stage"
      aria-label="Industrial asset integrity environment"
    >
      <div className="scene-orbit" aria-hidden="true" />
      <img
        src={island}
        width={1920}
        height={1200}
        alt="Industrial integrity island with pipelines, process equipment, wind turbines, and inspectors"
        className="scene-image"
      />
      <div className="scene-tag scene-tag-a">
        <span className="tag-icon">
          <Radio />
        </span>
        <span>
          <b>Industrial inspection</b>
          <small>Field expertise</small>
        </span>
      </div>
      <div className="scene-tag scene-tag-b">
        <span className="tag-icon">
          <ShieldCheck />
        </span>
        <span>
          <b>Asset integrity</b>
          <small>Technical assurance</small>
        </span>
      </div>
      <div className="scene-tag scene-tag-c">
        <span className="status-dot" />
        <span>
          <b>Technical training</b>
          <small>HosH Quality Training Center</small>
        </span>
      </div>
      <div className="scene-depth-line" aria-hidden="true">
        <CheckCircle2 />
      </div>
    </div>
  );
}
