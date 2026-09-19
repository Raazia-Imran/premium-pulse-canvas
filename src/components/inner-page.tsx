import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { pages, principles, services, industries, certifications, memberships } from "@/lib/site-content";
import trainingImage from "@/assets/hosh-training-scene.jpg";
import serviceObjects from "@/assets/hosh-service-objects.jpg";
import { TiltCard } from "@/components/tilt-card";

type PageKey = keyof typeof pages;

export function InnerPage({ type }: { type: PageKey }) {
  const page = pages[type];
  const isServices = type === "services";
  const isIndustries = type === "industries";
  const isTraining = type === "training";
  const isCerts = type === "certifications";
  const items = isServices ? services : isIndustries ? industries : principles;
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
      {isTraining && <section className="section-shell -mt-10 pb-16"><img src={trainingImage} width={1408} height={1008} loading="lazy" alt="Technical inspection training beside industrial equipment" className="w-full rounded-md object-cover shadow-float" /></section>}
      <section className="section-shell py-20 md:py-28">
        {(isServices || isIndustries) && <div className="inner-object-scene"><img src={serviceObjects} width={1200} height={912} alt="Dimensional industrial inspection objects"/><div><p className="eyebrow">Integrated field intelligence</p><h2>{isServices ? "Tools, judgement, and traceable evidence." : "Technical depth for demanding environments."}</h2></div></div>}
        <div className={isServices || isIndustries ? "dimensional-grid" : "grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3"}>
          {items.map((item, i) => {
            const Icon = "icon" in item ? item.icon : Check;
            const content = <article className={isServices || isIndustries ? "dimensional-card" : "group min-h-64 bg-card p-7 transition-colors hover:bg-secondary md:p-9"}>
              <div className="flex items-start justify-between"><span className="object-icon"><Icon /></span><span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span></div>
              <h2 className="mt-12 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{"description" in item ? item.description : item.body}</p>
             </article>;
            return isServices || isIndustries ? <TiltCard key={item.title}>{content}</TiltCard> : <div key={item.title}>{content}</div>;
          })}
        </div>
      </section>
      {isCerts && <section className="section-shell pb-24"><div className="assurance-band"><div><p className="eyebrow">Certified systems</p><h2 className="mt-4 max-w-xl text-3xl font-semibold md:text-5xl">Confidence, independently recognized.</h2></div><div className="grid grid-cols-2 gap-3">{[...certifications,...memberships].map(x=><div key={x} className="certificate-chip"><Check />{x}</div>)}</div></div></section>}
      <section className="cta-band"><div className="section-shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center"><div><p className="eyebrow text-accent">Need technical assurance?</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink-foreground md:text-5xl">Bring clarity to your next critical decision.</h2></div><Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/contact">Start an enquiry <ArrowRight /></Link></Button></div></section>
    </SiteShell>
  );
}