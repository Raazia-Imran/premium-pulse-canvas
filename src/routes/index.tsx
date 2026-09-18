import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site-shell";
import { SpatialScene } from "@/components/spatial-scene";
import { certifications, industries, memberships, services } from "@/lib/site-content";
import serviceObjects from "@/assets/hosh-service-objects.jpg";

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

    <section id="capabilities" className="section-shell py-24 md:py-32">
      <div className="section-heading"><div><p className="eyebrow">Core capabilities</p><h2>See deeper.<br/>Act earlier.</h2></div><p>Integrated inspection and assurance services designed to find risk before it becomes failure.</p></div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s,i)=><Link key={s.title} to="/services" className={`service-card service-card-${i+1}`}><div className="flex items-start justify-between"><span className="object-icon"><s.icon /></span><span className="service-code">{s.short}</span></div><div className="mt-auto"><h3>{s.title}</h3><p>{s.description}</p><span className="card-link">Explore <ArrowRight /></span></div></Link>)}
      </div>
      <div className="product-visual"><img src={serviceObjects} width={1200} height={912} loading="lazy" alt="Crane hook, ultrasonic scanner, and insulated pipe inspection objects" /><div className="product-caption"><span>Inspection systems</span><strong>Tactile precision.<br/>Documented confidence.</strong></div></div>
    </section>

    <section className="dark-band"><div className="section-shell py-24 md:py-32"><div className="section-heading dark"><div><p className="eyebrow text-accent">Industry coverage</p><h2>One standard.<br/>Every environment.</h2></div><p>From offshore platforms to production floors, our specialists adapt proven assurance systems to your operational reality.</p></div><div className="mt-14 grid gap-px border-y border-ink-border md:grid-cols-2 lg:grid-cols-3">{industries.map((industry)=><Link key={industry.title} to="/industries" className="industry-row"><industry.icon /><div><h3>{industry.title}</h3><p>{industry.description}</p></div><ArrowRight className="ml-auto" /></Link>)}</div></div></section>

    <section className="section-shell py-24 md:py-32"><div className="assurance-band"><div><p className="eyebrow">Assured by standards</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-6xl">Credibility is built into the system.</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Recognized certifications and professional memberships reinforce every inspection, report, and recommendation.</p></div><div className="grid grid-cols-2 gap-3">{[...certifications,...memberships].map(x=><div key={x} className="certificate-chip"><Check />{x}</div>)}</div></div></section>
  </SiteShell>;
}
