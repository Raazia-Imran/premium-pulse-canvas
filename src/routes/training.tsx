import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

export const Route = createFileRoute("/training")({
  head: () => ({ meta: [{ title: "Technical Training | HosH Integrity" }, { name: "description", content: "Industry-focused inspection, safety, quality, and technical competence training." }, { property: "og:title", content: "Technical Training | HosH Integrity" }, { property: "og:description", content: "Practical technical training built for field performance." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <InnerPage type="training" />,
});