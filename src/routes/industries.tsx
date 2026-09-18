import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [{ title: "Industries | HosH Integrity" }, { name: "description", content: "Asset integrity support for oil and gas, power, petrochemical, infrastructure, manufacturing, and renewables." }, { property: "og:title", content: "Industries | HosH Integrity" }, { property: "og:description", content: "Technical assurance for high-consequence industries." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <InnerPage type="industries" />,
});