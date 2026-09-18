import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | HosH Integrity" }, { name: "description", content: "Start an inspection, training, QA/QC, or asset integrity enquiry with HosH Integrity." }, { property: "og:title", content: "Contact | HosH Integrity" }, { property: "og:description", content: "Bring clarity to your next critical decision." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Contact,
});

function Contact() {
  return <SiteShell><section className="inner-hero min-h-[52vh]"><div className="section-shell pt-36 md:pt-44"><p className="eyebrow">Start a conversation</p><h1 className="inner-title">Let’s protect what matters.</h1><p className="inner-intro">Tell us about your asset, project, or training requirement. Our team will review the scope and respond with the right technical direction.</p></div></section><section className="section-shell grid gap-12 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24"><div><h2 className="text-2xl font-semibold">Contact HosH</h2><a href="mailto:info@hoshint.com" className="mt-8 flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="size-5 text-primary" />info@hoshint.com</a><div className="mt-4 flex items-center gap-3 text-muted-foreground"><MapPin className="size-5 text-primary" />Service locations available on request</div><div className="mt-10 rounded-md bg-secondary p-6 text-sm leading-6 text-muted-foreground">This enquiry form is ready for a final delivery destination. Submissions remain in preview until the client confirms where enquiries should be sent.</div></div><form className="grid gap-4 rounded-md border border-border bg-card p-6 shadow-soft md:p-8" onSubmit={(e)=>e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><Input aria-label="Name" placeholder="Your name" /><Input aria-label="Company" placeholder="Company" /></div><div className="grid gap-4 sm:grid-cols-2"><Input aria-label="Email" type="email" placeholder="Work email" /><Input aria-label="Service" placeholder="Service needed" /></div><Textarea aria-label="Project details" placeholder="Tell us about the asset, location, and required timeline" className="min-h-36" /><Button type="submit" size="lg" className="justify-self-start rounded-full">Send enquiry <ArrowUpRight /></Button></form></section></SiteShell>;
}