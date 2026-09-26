import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TiltCard } from "@/components/tilt-card";
import { industries, services } from "@/lib/site-content";
import serviceObjects from "@/assets/hosh-service-objects.jpg";
import oilGasPhoto from "@/assets/oil-gas-color.webp";
import petrochemicalPhoto from "@/assets/petrochemical-color.webp";
import powerPhoto from "@/assets/power-color.webp";
import constructionPhoto from "@/assets/construction-color.webp";
import { servicePhotos } from "@/components/service-deck";
import { useSwipeNavigation } from "@/hooks/use-swipe-navigation";

const industryPhotos = [oilGasPhoto, petrochemicalPhoto, powerPhoto, constructionPhoto];

export const faqs = [
  [
    "Which inspection services does HosH provide?",
    "HosH provides NDT, lifting equipment and pipeline inspection, QA/QC, HSE services, and technical training.",
  ],
  [
    "Which industries do you support?",
    "HosH supports projects in oil and gas, petrochemical, power, and civil construction.",
  ],
  [
    "How is a quotation prepared?",
    "Every quotation is scope-based. Share the asset, location, required service, and timeline so the technical team can assess the requirement.",
  ],
  [
    "Can HosH provide technical training?",
    "Yes. HosH provides industry-focused programs covering inspection, safety, quality, and technical competence.",
  ],
] as const;

export function FeatureShowcase() {
  return (
    <section className="feature-stage section-shell py-24 md:py-32">
      <div className="feature-intro">
        <div>
          <p className="eyebrow">Inspection disciplines</p>
          <h2>
            One field team.
            <br />
            <span className="t-shimmer" data-text="Six ways to see risk.">
              Six ways to see risk.
            </span>
          </h2>
        </div>
        <p>
          Explore the technical disciplines HosH brings together to protect assets through
          fabrication, operation, maintenance, and rehabilitation.
        </p>
      </div>
      <div className="feature-layout">
        <TiltCard className="feature-visual">
          <div className="feature-image">
            <img
              src={serviceObjects}
              width={1200}
              height={912}
              loading="lazy"
              alt="Dimensional inspection equipment including a crane hook, scanner, and pipeline section"
            />
            <div className="depth-label">
              <span>Field system</span>
              <strong>Inspection objects</strong>
            </div>
          </div>
        </TiltCard>
        <div className="feature-list">
          {services.map((service, index) => (
            <Link key={service.title} to="/services" className="feature-row">
              <span className="feature-index">0{index + 1}</span>
              <span className="feature-row-icon">
                <img src={servicePhotos[index]} alt="" loading="lazy" />
              </span>
              <span>
                <strong>{service.title}</strong>
                <small>{service.description}</small>
              </span>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryPreview() {
  return (
    <section className="industry-preview" aria-labelledby="industry-preview-title">
      <div className="section-shell industry-preview-layout">
        <div className="industry-preview-copy">
          <p className="eyebrow text-accent">Where HosH works</p>
          <h2 id="industry-preview-title">Every site has its own demands.</h2>
          <p>Find the inspection and quality support that fits your operating environment.</p>
          <Button
            asChild
            className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/industries">
              Explore industries <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="industry-preview-grid" aria-label="Industries served">
          {industries.map((item, index) => (
            <Link key={item.title} to="/industries" className="industry-preview-tile">
              <img src={industryPhotos[index]} alt="" loading="lazy" />
              <span>
                <small>0{index + 1}</small>
                {item.title}
                <ArrowRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const current = industries[active] ?? industries[0];
  const go = (step: number) =>
    setActive((index) => (index + step + industries.length) % industries.length);
  const swipe = useSwipeNavigation(go);
  if (!current) return null;
  return (
    <section className="industry-stage" aria-labelledby="industry-page-title">
      <div className="section-shell py-16 md:py-28">
        <div className="industry-header">
          <div>
            <p className="eyebrow text-accent">Operational environments</p>
            <h2 id="industry-page-title">Different sites. Focused expertise.</h2>
          </div>
          <p>Inspection and quality support tailored to the demands of each environment.</p>
        </div>
        <div className="industry-selector" role="group" aria-label="Choose an industry">
          {industries.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className="industry-selector-item"
            >
              <span>0{index + 1}</span>
              {item.title}
            </button>
          ))}
        </div>
        <div className="industry-gallery" {...swipe}>
          <div className="industry-gallery-photo" key={current.title}>
            <img
              src={industryPhotos[active]}
              alt={`${current.title} industrial environment`}
              loading="lazy"
              draggable={false}
            />
            <span className="industry-gallery-counter">
              0{active + 1} / 0{industries.length}
            </span>
            <div className="deck-controls industry-photo-controls">
              <button type="button" onClick={() => go(-1)} aria-label="Previous industry">
                <ArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next industry">
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="industry-gallery-copy" aria-live="polite">
            <p className="eyebrow text-accent">Selected environment / 0{active + 1}</p>
            <h3>{current.title}</h3>
            <p>{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuotePackages() {
  return (
    <section className="quote-section">
      <div className="section-shell py-24 md:py-32">
        <div className="quote-heading">
          <p className="eyebrow">Start an assignment</p>
          <h2>Clarity starts with the scope.</h2>
          <p>
            Tell HosH what needs inspection and where the work will take place. The team can discuss
            the right service and quotation.
          </p>
        </div>
        <div className="scope-steps">
          {[
            [
              "01",
              "Describe the asset",
              "Share the equipment, structure, or project requiring attention.",
            ],
            [
              "02",
              "Set the context",
              "Include the location, required service, standards, and timing.",
            ],
            [
              "03",
              "Discuss the approach",
              "HosH can review your requirement and prepare a scope-based response.",
            ],
          ].map(([n, title, body]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-10 rounded-full">
          <Link to="/contact">
            Start an enquiry <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export function FAQPreview({ full = false }: { full?: boolean }) {
  const visible = full ? faqs : faqs.slice(0, 3);
  return (
    <section className={full ? "section-shell py-16 md:py-24" : "faq-band"}>
      <div className={full ? "faq-layout" : "section-shell faq-layout py-24 md:py-32"}>
        <div>
          <p className="eyebrow">Technical questions</p>
          <h2>{full ? "Answers before mobilisation." : "Clear before the work begins."}</h2>
          {!full && (
            <Button asChild variant="link" className="mt-5 px-0">
              <Link to="/faq">
                View all questions <ChevronRight />
              </Link>
            </Button>
          )}
        </div>
        <Accordion type="single" collapsible className="faq-list">
          {visible.map(([question, answer], index) => (
            <AccordionItem value={`item-${index}`} key={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                <p>{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function EnquiryBanner() {
  return (
    <section className="section-shell pb-24 md:pb-32">
      <div className="enquiry-banner">
        <div className="enquiry-signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow text-accent">Start with the scope</p>
        <h2>Protect the next critical decision.</h2>
        <p>Bring HosH into the conversation before uncertainty becomes downtime.</p>
        <Button
          asChild
          size="lg"
          className="mt-7 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link to="/contact">
            Start an enquiry <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
