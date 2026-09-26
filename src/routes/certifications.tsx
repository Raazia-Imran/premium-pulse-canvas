import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.hoshint.com/certifications" }],
    meta: [
      { title: "Certifications & Memberships | HosH Integrity" },
      {
        name: "description",
        content:
          "HosH Integrity certifications and memberships include ISO 17020, LEEA, IMS, PSQCA, AWS, ASTM, ASNT, and ASQ.",
      },
      { property: "og:title", content: "Certifications & Memberships | HosH Integrity" },
      {
        property: "og:description",
        content: "Independent assurance backed by recognized standards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <InnerPage type="certifications" />,
});
