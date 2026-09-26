import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
export const Route = createFileRoute("/terms")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.hoshint.com/terms" }],
    meta: [
      { name: "robots", content: "noindex,follow" },
      { title: "Website Terms | HosH Integrity" },
      {
        name: "description",
        content: "Terms for using information on the HosH Integrity website.",
      },
      { property: "og:title", content: "Website Terms | HosH Integrity" },
      {
        property: "og:description",
        content: "Terms for using HosH Integrity website information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});
function Terms() {
  return (
    <LegalPage
      title="Website Terms"
      intro="Information about using this website and the material published here."
      sections={[
        {
          title: "Website information",
          body: "Website content is provided for general information and does not replace a project-specific inspection scope, professional assessment, or contractual agreement.",
        },
        {
          title: "Quotations and services",
          body: "Services, timing, deliverables, and commercial terms are confirmed only through an approved written quotation or contract.",
        },
        {
          title: "Intellectual property",
          body: "Branding, original text, and published materials remain the property of their respective owners unless stated otherwise.",
        },
        {
          title: "External links and updates",
          body: "External resources may change without notice. HosH Integrity may update website information as services and requirements evolve.",
        },
      ]}
    />
  );
}
