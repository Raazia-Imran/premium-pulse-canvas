import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

export const Route = createFileRoute("/industries")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.hoshint.com/industries" }],
    meta: [
      { title: "Industries | HosH Integrity" },
      {
        name: "description",
        content:
          "Industrial inspection and QA/QC for oil and gas, petrochemical, power, and civil construction projects.",
      },
      { property: "og:title", content: "Industries | HosH Integrity" },
      { property: "og:description", content: "Technical assurance for industrial projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <InnerPage type="industries" />,
});
