import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteShell } from "@/components/site-shell";
import type { FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | HosH Integrity" }, { name: "description", content: "Start an inspection, training, QA/QC, or asset integrity enquiry with HosH Integrity." }, { property: "og:title", content: "Contact | HosH Integrity" }, { property: "og:description", content: "Bring clarity to your next critical decision." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Contact,
});

function Contact() {
  const sendByEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `HosH website enquiry — ${String(form.get("service") || "General enquiry")}`;
    const body = [`Name: ${String(form.get("name") || "")}`, `Company: ${String(form.get("company") || "")}`, `Email: ${String(form.get("email") || "")}`, `Service: ${String(form.get("service") || "")}`, "", "Project details:", String(form.get("message") || "")].join("\n");
    window.location.href = `mailto:info@hoshint.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <SiteShell><section className="inner-hero contact-hero"><div className="section-shell pt-36 md:pt-44"><p className="eyebrow">Start a conversation</p><h1 className="inner-title">Support the safe operation of your assets.</h1><p className="inner-intro">Tell HosH about the asset, location, required service, and timing so the team can review your requirement.</p></div></section><section className="section-shell contact-layout py-16 md:py-24"><div className="min-w-0"><h2 className="text-2xl font-semibold">Contact HosH</h2><a href="mailto:info@hoshint.com" className="contact-row"><Mail className="size-5 text-primary" /><span>info@hoshint.com</span></a><div className="contact-row"><MapPin className="size-5 text-primary" /><span className="missing-info">Missing client information: office address</span></div><div className="contact-row"><Phone className="size-5 text-primary" /><span className="missing-info">Missing client information: phone number</span></div><div className="email-notice">Submitting opens your email application with the completed enquiry addressed to the client’s verified email.</div></div><form onSubmit={sendByEmail} className="contact-form"><div className="grid gap-4 sm:grid-cols-2"><Input required name="name" aria-label="Name" placeholder="Your name" /><Input required name="company" aria-label="Company" placeholder="Company" /></div><div className="grid gap-4 sm:grid-cols-2"><Input required name="email" aria-label="Email" type="email" placeholder="Work email" /><Input required name="service" aria-label="Service" placeholder="Service needed" /></div><Textarea required name="message" aria-label="Project details" placeholder="Tell us about the asset, location, and required timeline" className="min-h-36" /><Button type="submit" size="lg" className="justify-self-start rounded-full">Compose email <ArrowUpRight /></Button></form></section></SiteShell>;
}