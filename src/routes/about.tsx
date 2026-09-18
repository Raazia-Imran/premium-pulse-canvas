import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/inner-page";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About HosH Integrity" }, { name: "description", content: "Meet the specialist inspection and technical assurance company focused on preventing industrial failure." }, { property: "og:title", content: "About HosH Integrity" }, { property: "og:description", content: "A specialist partner for safer, more reliable operations." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <InnerPage type="about" />,
});