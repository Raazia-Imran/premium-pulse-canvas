import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/insights")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.hoshint.com/insights" }],
    meta: [
      { name: "robots", content: "noindex,follow" },
      { title: "Technical Insights | HosH Integrity" },
      {
        name: "description",
        content:
          "The future home of HosH Integrity technical guidance, inspection updates, and field perspectives.",
      },
      { property: "og:title", content: "Technical Insights | HosH Integrity" },
      {
        property: "og:description",
        content: "Practical industrial inspection knowledge, coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Insights,
});
function Insights() {
  return (
    <SiteShell>
      <section className="inner-hero">
        <div className="section-shell pt-36 md:pt-44">
          <p className="eyebrow">Insights</p>
          <h1 className="inner-title">
            Field knowledge,
            <br />
            carefully documented.
          </h1>
          <p className="inner-intro">
            Field perspectives on inspection, asset integrity, quality, and safety are on the way.
          </p>
        </div>
      </section>
      <section className="section-shell py-20 md:py-28">
        <p className="missing-info mb-6">
          Content needed from client: approved article titles, copy, authors, and publication dates.
        </p>
        <Button asChild className="mt-10 rounded-full">
          <Link to="/contact">
            Contact HosH <ArrowRight />
          </Link>
        </Button>
      </section>
    </SiteShell>
  );
}
