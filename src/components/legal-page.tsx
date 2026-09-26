import { SiteShell } from "@/components/site-shell";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
}) {
  return (
    <SiteShell>
      <section className="inner-hero legal-hero">
        <div className="section-shell relative z-10 pt-36 md:pt-44">
          <p className="eyebrow">Website information</p>
          <h1 className="inner-title">{title}</h1>
          <p className="inner-intro">{intro}</p>
        </div>
        <div className="technical-ring" aria-hidden="true" />
      </section>
      <section className="section-shell grid gap-10 py-16 md:grid-cols-[.35fr_1fr] md:py-24">
        <aside className="legal-note">
          <strong>Details pending confirmation</strong>
          <span>
            Legal entity name, registered jurisdiction, address, retention periods, and legal review
            are still needed.
          </span>
        </aside>
        <div className="legal-copy">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
