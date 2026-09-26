import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { services, serviceDetails, trainingPrograms } from "@/lib/site-content";
import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";
import general from "@/assets/service-general-color.webp";
import welding from "@/assets/service-welding-color.webp";
import ndt from "@/assets/service-ndt-color.webp";
import assets from "@/assets/service-assets-color.webp";
import hse from "@/assets/service-hse-color.webp";
import training from "@/assets/service-training-color.webp";

export const servicePhotos = [general, welding, ndt, assets, hse, training];

export function ServiceDeck() {
  const [active, setActive] = useState(0);
  const count = services.length;
  const go = (step: number) => setActive((index) => (index + step + count) % count);
  const swipe = useSwipeNavigation(go);
  const service = services[active];
  const scope = serviceDetails[active]?.items ?? trainingPrograms.map((program) => program.title);
  if (!service) return null;

  return (
    <section
      className="service-deck-section section-shell py-16 md:py-28"
      aria-labelledby="service-deck-title"
    >
      <div className="service-deck-heading">
        <div>
          <p className="eyebrow">Inspection disciplines</p>
          <h2 id="service-deck-title" className="detail-title">
            Six capabilities. One careful approach.
          </h2>
        </div>
        <p>
          Explore the inspection, quality, safety, and training services behind safer operations.
        </p>
      </div>
      <div className="service-deck-layout">
        <div className="service-deck-stage" {...swipe}>
          <div className="service-deck-shadow service-deck-shadow-back" aria-hidden="true" />
          <div className="service-deck-shadow service-deck-shadow-front" aria-hidden="true" />
          <article className="service-deck-card" key={service.title} aria-live="polite">
            <img src={servicePhotos[active]} alt="" loading="lazy" draggable={false} />
            <div className="service-deck-card-copy">
              <span className="service-deck-count">
                0{active + 1} / 0{count}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
          <div className="deck-controls service-deck-photo-controls">
            <button type="button" onClick={() => go(-1)} aria-label="Previous service">
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next service">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="service-mobile-progress" aria-label={`Service ${active + 1} of ${count}`}>
          {services.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${item.title}`}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>
        <div className="service-deck-index">
          <p className="eyebrow">Explore our disciplines</p>
          <div className="service-deck-list" role="group" aria-label="Inspection disciplines">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="service-scope" key={service.title}>
        <details>
          <summary>
            <span className="service-scope-count">Scope / 0{active + 1}</span>
            <strong>Explore what's included</strong>
            <span className="service-scope-toggle">
              {scope.length} {active === services.length - 1 ? "training paths" : "capabilities"}
              <ChevronDown aria-hidden="true" />
            </span>
          </summary>
          <ol>
            {scope.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
