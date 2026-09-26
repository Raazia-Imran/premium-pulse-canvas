import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.hoshint.com/contact" }],
    meta: [
      { title: "Contact | HosH Integrity" },
      {
        name: "description",
        content:
          "Start an inspection, training, QA/QC, or asset integrity enquiry with HosH Integrity.",
      },
      { property: "og:title", content: "Contact | HosH Integrity" },
      { property: "og:description", content: "Bring clarity to your next critical decision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <section className="inner-hero contact-hero">
        <div className="section-shell pt-36 md:pt-44">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="inner-title">Support the safe operation of your assets.</h1>
          <p className="inner-intro">
            Tell HosH about the asset, location, required service, and timing so the team can review
            your requirement.
          </p>
        </div>
      </section>
      <section className="section-shell contact-layout py-16 md:py-24">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold">Contact HosH</h2>
          <a href="mailto:info@hoshint.com" className="contact-row">
            <Mail className="size-5 text-primary" />
            <span>info@hoshint.com</span>
          </a>
          <div className="contact-row">
            <MapPin className="size-5 text-primary" />
            <span className="missing-info">Missing client information: office address</span>
          </div>
          <div className="contact-row">
            <Phone className="size-5 text-primary" />
            <span className="missing-info">Missing client information: phone number</span>
          </div>
          <div className="email-notice">
            This form uses FormSubmit to send your enquiry to HosH.
          </div>
        </div>
        <form
          action="https://formsubmit.co/info@hoshint.com"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_subject" value="HosH website enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="text"
            name="_honey"
            className="form-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input required name="name" aria-label="Name" placeholder="Your name" maxLength={100} />
            <Input
              required
              name="company"
              aria-label="Company"
              placeholder="Company"
              maxLength={120}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              required
              name="email"
              aria-label="Email"
              type="email"
              placeholder="Work email"
              maxLength={254}
            />
            <Input
              required
              name="service"
              aria-label="Service"
              placeholder="Service needed"
              maxLength={120}
            />
          </div>
          <Textarea
            required
            name="message"
            aria-label="Project details"
            placeholder="Tell us about the asset, location, and required timeline"
            maxLength={4000}
            className="min-h-36"
          />
          <Button type="submit" size="lg" className="justify-self-start rounded-full">
            Submit enquiry <ArrowUpRight />
          </Button>
        </form>
      </section>
    </SiteShell>
  );
}
