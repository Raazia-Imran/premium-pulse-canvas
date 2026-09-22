import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TiltCard } from "@/components/tilt-card";
import { industries, services } from "@/lib/site-content";
import serviceObjects from "@/assets/hosh-service-objects.jpg";

export const faqs = [
  ["Which inspection services does HosH provide?", "HosH provides NDT, lifting equipment and pipeline inspection, QA/QC, HSE services, and technical training."],
  ["Which industries do you support?", "Teams support oil and gas, power and energy, petrochemical, infrastructure, manufacturing, and renewable-energy assets."],
  ["How is a quotation prepared?", "Every quotation is scope-based. Share the asset, location, required service, and timeline so the technical team can assess the requirement."],
  ["Can HosH provide technical training?", "Yes. HosH provides industry-focused programs covering inspection, safety, quality, and technical competence."],
] as const;

export function FeatureShowcase() {
  return <section className="feature-stage section-shell py-24 md:py-32">
    <div className="feature-intro"><div><p className="eyebrow">Inspection disciplines</p><h2>One field team.<br/><span className="t-shimmer" data-text="Six ways to see risk.">Six ways to see risk.</span></h2></div><p>Explore the technical disciplines HosH brings together to protect assets through fabrication, operation, maintenance, and rehabilitation.</p></div>
    <div className="feature-layout">
      <TiltCard className="feature-visual"><div className="feature-image"><img src={serviceObjects} width={1200} height={912} loading="lazy" alt="Dimensional inspection equipment including a crane hook, scanner, and pipeline section"/><div className="depth-label"><span>Field system</span><strong>Inspection objects</strong></div></div></TiltCard>
      <div className="feature-list">
        {services.map((service, index) => <Link key={service.title} to="/services" className="feature-row"><span className="feature-index">0{index + 1}</span><span className="feature-row-icon"><service.icon /></span><span><strong>{service.title}</strong><small>{service.description}</small></span><ArrowRight /></Link>)}
      </div>
    </div>
  </section>;
}

export function IndustryExplorer() {
  const [active, setActive] = useState(0);
  const current = industries[active] ?? industries[0];
  if (!current) return null;
  const Icon = current.icon;
  return <section className="industry-stage"><div className="section-shell py-24 md:py-32">
    <div className="industry-header"><p className="eyebrow text-accent">Operational environments</p><h2>Assurance changes<br/>with the terrain.</h2><p>Choose an environment to see how HosH’s inspection disciplines adapt to each operating context.</p></div>
    <div className="industry-tabs" role="tablist" aria-label="Industries">{industries.map((item,index)=><Button key={item.title} variant="ghost" role="tab" aria-selected={active===index} onClick={()=>setActive(index)} className="industry-tab"><item.icon/>{item.title}</Button>)}</div>
    <div className="industry-console" role="tabpanel"><div className="industry-orbit" aria-hidden="true"><span/><span/><span/></div><div className="industry-object"><Icon/><small>Environment 0{active + 1}</small></div><div className="industry-copy"><p className="eyebrow text-accent">Selected environment</p><h3>{current.title}</h3><p>{current.description}</p><Button asChild variant="outline" className="mt-7 rounded-full border-ink-border bg-transparent text-ink-foreground hover:bg-ink-foreground/10"><Link to="/industries">Explore coverage <ArrowRight/></Link></Button></div></div>
  </div></section>;
}

const packages = [
  { name: "Commercial rates", scope: "Rates were not included in the supplied company profiles.", points: ["Scope", "Location", "Applicable standards"] },
];

export function QuotePackages() {
  return <section className="quote-section"><div className="section-shell py-24 md:py-32"><div className="quote-heading"><p className="eyebrow">Scope-based quotation</p><h2>Defined around the asset and assignment.</h2><p>HosH asks for the service, site, standards, and timing before preparing a quotation.</p></div><div className="quote-grid quote-grid-single">{packages.map((item)=><TiltCard key={item.name} className="quote-card"><div className="quote-card-inner"><p className="missing-info">Missing client information</p><h3>{item.name}</h3><strong>To be confirmed</strong><p>{item.scope}</p><ul>{item.points.map(point=><li key={point}><Check/>{point}</li>)}</ul><Button asChild className="mt-auto w-full rounded-full"><Link to="/contact">Request scope review <ArrowRight/></Link></Button></div></TiltCard>)}</div></div></section>;
}

export function FAQPreview({ full = false }: { full?: boolean }) {
  const visible = full ? faqs : faqs.slice(0,3);
  return <section className={full?"section-shell py-16 md:py-24":"faq-band"}><div className={full?"faq-layout":"section-shell faq-layout py-24 md:py-32"}><div><p className="eyebrow">Technical questions</p><h2>{full ? "Answers before mobilisation." : "Clear before the work begins."}</h2>{!full&&<Button asChild variant="link" className="mt-5 px-0"><Link to="/faq">View all questions <ChevronRight/></Link></Button>}</div><Accordion type="single" collapsible className="faq-list">{visible.map(([question,answer], index)=><AccordionItem value={`item-${index}`} key={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent><p>{answer}</p></AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

export function EnquiryBanner() {
  return <section className="section-shell pb-24 md:pb-32"><div className="enquiry-banner"><div className="enquiry-signal" aria-hidden="true"><span/><span/><span/></div><p className="eyebrow text-accent">Start with the scope</p><h2>Protect the next critical decision.</h2><p>Bring HosH into the conversation before uncertainty becomes downtime.</p><Button asChild size="lg" className="mt-7 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/contact">Start an enquiry <ArrowRight/></Link></Button></div></section>;
}