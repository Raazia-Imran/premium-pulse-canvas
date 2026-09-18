import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Industrial Inspection Services | HosH Integrity" }, { name: "description", content: "NDT, pipeline, lifting equipment, QA/QC, HSE, and technical inspection services from HosH Integrity." }, { property: "og:title", content: "Industrial Inspection Services | HosH Integrity" }, { property: "og:description", content: "Independent technical assurance across the complete asset lifecycle." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <InnerPage type="services" />,
});