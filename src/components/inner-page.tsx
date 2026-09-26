import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { pages } from "@/lib/site-content";
import { ServiceDeck } from "@/components/service-deck";
import { TrainingOrbit, CredentialsCanvas, AboutPrinciples } from "@/components/profile-visuals";
import { IndustryExplorer } from "@/components/site-sections";

type PageKey = keyof typeof pages;

export function InnerPage({ type }: { type: PageKey }) {
  const page = pages[type];
  const isServices = type === "services";
  const isIndustries = type === "industries";
  return (
    <SiteShell>
      <section className="inner-hero">
        <div className="section-shell relative z-10 pt-36 md:pt-44">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="inner-title">{page.title}</h1>
          <p className="inner-intro">{page.intro}</p>
        </div>
        <div className="technical-ring" aria-hidden="true" />
      </section>
      {isIndustries && <IndustryExplorer />}
      {isServices && <ServiceDeck />}
      {type === "training" && <TrainingOrbit />}
      {type === "certifications" && <CredentialsCanvas />}
      {type === "about" && <AboutPrinciples />}
      <section className="cta-band">
        <div className="section-shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-accent">Need technical assurance?</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink-foreground md:text-5xl">
              Bring clarity to your next critical decision.
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              Start an enquiry <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
