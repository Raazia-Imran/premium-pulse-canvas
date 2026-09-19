import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { SpatialScene } from "@/components/spatial-scene";
import { certifications, memberships } from "@/lib/site-content";
import { EnquiryBanner, FAQPreview, FeatureShowcase, IndustryExplorer, QuotePackages } from "@/components/site-sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "HosH Integrity | We Prevent Failure" }, { name: "description", content: "Independent industrial inspection, asset integrity, QA/QC, NDT, HSE, certification, and technical training services." }, { property: "og:title", content: "HosH Integrity | We Prevent Failure" }, { property: "og:description", content: "Inspection intelligence for safer, more reliable industrial assets." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Index() {
  return <SiteShell>
    <section className="hero-section">
      <div className="mx-auto flex min-h-[940px] max-w-[1600px] flex-col px-4 pt-32 md:min-h-[900px] md:px-8 md:pt-36 lg:px-12">
        <div className="relative z-20 mx-auto text-center">
          <div className="hero-kicker"><span className="status-dot"/>Independent inspection & technical assurance</div>
          <h1 className="hero-title">We Prevent <span>Failure.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">Protecting critical assets through independent inspection, engineering expertise, and field-proven assurance.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3"><Button asChild size="lg" className="rounded-full"><Link to="/services">Explore capabilities <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="rounded-full bg-card/60 backdrop-blur"><Link to="/contact">Talk to an expert <MoveUpRight /></Link></Button></div>
        </div>
        <div className="mx-auto mt-2 w-full max-w-[1320px]"><SpatialScene /></div>
        <div className="hero-cert-row">{certifications.slice(0,3).map((item)=><div key={item} className="hero-cert"><Check />{item}</div>)}<a href="#capabilities" aria-label="Scroll to capabilities" className="ml-auto hidden size-10 place-items-center rounded-full border border-border md:grid"><ArrowDown className="size-4" /></a></div>
      </div>
    </section>

    <div id="capabilities"><FeatureShowcase/></div>
    <IndustryExplorer/>

    <section className="section-shell py-24 md:py-32"><div className="assurance-band"><div><p className="eyebrow">Assured by standards</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-6xl">Credibility is built into the system.</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Recognized certifications and professional memberships reinforce every inspection, report, and recommendation.</p></div><div className="grid grid-cols-2 gap-3">{[...certifications,...memberships].map(x=><div key={x} className="certificate-chip"><Check />{x}</div>)}</div></div></section>
    <QuotePackages/><FAQPreview/><EnquiryBanner/>
  </SiteShell>;
}
