import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
export const Route = createFileRoute("/privacy")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.hoshint.com/privacy" }],
    meta: [
      { name: "robots", content: "noindex,follow" },
      { title: "Privacy Policy | HosH Integrity" },
      {
        name: "description",
        content: "How contact information is handled on the HosH Integrity website.",
      },
      { property: "og:title", content: "Privacy Policy | HosH Integrity" },
      {
        property: "og:description",
        content: "How website enquiries and visitor information are handled.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});
function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How contact information is used when you enquire through this website."
      sections={[
        {
          title: "Information you provide",
          body: "When you contact HosH Integrity, you may provide your name, company, email address, service requirement, and project details.",
        },
        {
          title: "How information may be used",
          body: "Enquiry information may be used to understand your request, respond to you, prepare a scope, and maintain relevant business correspondence.",
        },
        {
          title: "Form delivery",
          body: "The contact form sends the information you enter to FormSubmit for delivery to the HosH email inbox.",
        },
        {
          title: "Retention and sharing",
          body: "Enquiry details are available to the people handling your request.",
        },
        {
          title: "Your questions",
          body: "For questions about your information, contact info@hoshint.com.",
        },
      ]}
    />
  );
}
