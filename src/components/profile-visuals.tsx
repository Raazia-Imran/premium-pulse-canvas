import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import {
  trainingPrograms,
  certifications,
  memberships,
  onlineSystems,
  principles,
  codeOfEthics,
} from "@/lib/site-content";
import trainingImage from "@/assets/service-training-color.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TrainingOrbit() {
  const [active, setActive] = useState(0);
  const coursePanel = useRef<HTMLDivElement>(null);
  const selected = trainingPrograms[active];
  if (!selected) return null;
  return (
    <section
      className="section-shell training-orbit-section py-16 md:py-24"
      aria-labelledby="training-title"
    >
      <div className="profile-section-heading">
        <div>
          <p className="eyebrow">HosH Quality Training Center</p>
          <h2 id="training-title" className="detail-title">
            Choose a training path.
          </h2>
        </div>
        <p>Practical courses for teams responsible for inspection, quality, and safe operations.</p>
      </div>
      <div className="training-orbit" role="group" aria-label="Training categories">
        <div className="training-orbit-ring" aria-hidden="true" />
        <div className="training-orbit-core">
          <img src={trainingImage} alt="" />
          <span>Skills for the field</span>
        </div>
        {trainingPrograms.map((group, index) => (
          <button
            key={group.title}
            type="button"
            className={`training-orbit-node training-orbit-node-${index}`}
            aria-pressed={active === index}
            aria-controls="training-courses"
            onClick={() => {
              setActive(index);
              requestAnimationFrame(() =>
                coursePanel.current?.scrollIntoView({
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "instant"
                    : "smooth",
                  block: "center",
                }),
              );
            }}
          >
            <span>0{index + 1}</span>
            <strong>{group.title}</strong>
            <small>{active === index ? "Viewing courses" : "View courses"}</small>
          </button>
        ))}
      </div>
      <div
        className="training-course-panel"
        id="training-courses"
        ref={coursePanel}
        aria-live="polite"
      >
        <div>
          <p className="eyebrow">Selected path / 0{active + 1}</p>
          <h3>{selected.title}</h3>
          <p>Discuss course dates, delivery, and entry requirements with HosH.</p>
        </div>
        <ul>
          {selected.items.map((item) => (
            <li key={item}>
              <Check aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CredentialsCanvas() {
  return (
    <>
      <section
        className="section-shell credentials-canvas py-16 md:py-24"
        aria-labelledby="credentials-title"
      >
        <div className="profile-section-heading">
          <div>
            <p className="eyebrow">Certifications & registrations</p>
            <h2 id="credentials-title" className="detail-title">
              Credentials that reinforce confidence.
            </h2>
          </div>
          <p>Management systems and registrations that support accountable inspection.</p>
        </div>
        <div className="credentials-orbit">
          <div className="credentials-orbit-ring" aria-hidden="true" />
          <div className="credentials-orbit-core">
            <span>HosH</span>
            <strong>Integrity</strong>
          </div>
          {certifications.map((item, index) => (
            <div className={`credential-node credential-node-${index}`} key={item}>
              <span>0{index + 1} / Credential</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="credentials-membership-band">
        <div className="section-shell py-16 md:py-24">
          <p className="eyebrow">Professional affiliations</p>
          <h2 className="detail-title">Connected to the profession.</h2>
          <div className="membership-rail">
            {memberships.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-shell py-16 md:py-24">
        <div className="profile-section-heading">
          <div>
            <p className="eyebrow">Online systems</p>
            <h2 className="detail-title">Digital tools for traceable work.</h2>
          </div>
          <p>From certificate checks to project records and technical references.</p>
        </div>
        <Accordion type="single" collapsible className="editorial-list systems-accordion">
          <AccordionItem value="systems">
            <AccordionTrigger>Explore digital systems</AccordionTrigger>
            <AccordionContent>
              <ol>
                {onlineSystems.map((system, index) => (
                  <li key={system}>
                    <span>0{index + 1}</span>
                    {system}
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

export function AboutPrinciples() {
  return (
    <>
      <section
        className="section-shell about-wheel-section py-16 md:py-24"
        aria-labelledby="principles-title"
      >
        <p className="eyebrow">Our direction</p>
        <h2 id="principles-title" className="detail-title">
          The principles behind the work.
        </h2>
        <div className="about-wheel">
          <div className="about-wheel-ring" aria-hidden="true" />
          <div className="about-wheel-core">
            HosH
            <br />
            <span>Integrity</span>
          </div>
          {principles.map((item, index) => (
            <article className={`about-wheel-item about-wheel-item-${index}`} key={item.title}>
              <span>
                0{index + 1} / {item.title}
              </span>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="detail-band ethics-journey">
        <div className="section-shell py-16 md:py-24">
          <div className="profile-section-heading">
            <div>
              <p className="eyebrow">Code of ethics</p>
              <h2 className="detail-title">Integrity in every action.</h2>
            </div>
            <p>How we handle our responsibilities, our work, and each other.</p>
          </div>
          <div
            className="ethics-track"
            role="list"
            tabIndex={0}
            aria-label="HosH ethical commitments; scroll horizontally to read all items"
          >
            {codeOfEthics.map((item, index) => (
              <div role="listitem" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <p className="ethics-swipe-hint">
            Scroll to see every commitment <ArrowRight aria-hidden="true" />
          </p>
        </div>
      </section>
    </>
  );
}
