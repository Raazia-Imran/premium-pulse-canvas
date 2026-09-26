# HosH Integrity website

Corporate website for HosH Integrity, built with React, TanStack Start, TypeScript, Tailwind CSS, and Vite. The copy and industrial photographs are drawn from the client-supplied `h2.pptx` and `h3.pptx` company profiles. The spatial illustrations are visual concepts and do not depict a specific client site or measured result.

## Run locally

```sh
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The repository retains Lovable's build configuration and `bun.lock`. Avoid rewriting published history on the Lovable-connected branch.

## Pages and content

Home, Services, Industries, Training, Certifications, About, Contact, FAQ, Insights, Privacy, and Terms are implemented. Unknown routes use a custom 404 page. Reusable company data is in `src/lib/site-content.ts`. The Insights and legal pages are drafts, marked for client review and excluded from indexing. Do not publish unverified claims or replace missing information with invented details.

## Launch checklist

1. Confirm that `https://www.hoshint.com` is the deployed canonical site. If the production address differs, update all canonical links, the Open Graph image URL, `public/sitemap.xml`, and `public/robots.txt` together. Configure the alternate host to redirect to the canonical host.
2. Submit the Contact form once and have the owner of `info@hoshint.com` click FormSubmit's verification link. Confirm that a real enquiry reaches the inbox; until activation, the form is not operational. FormSubmit receives submitted personal information, so approve its use and update the privacy policy accordingly.
3. Obtain the registered legal entity, jurisdiction, office address, phone number, retention policy, privacy contact, and approval of Privacy and Terms. Remove `noindex` from those pages only after approval.
4. Confirm that certifications, memberships, training availability, and the online systems in the profile remain current. Supply documentary evidence or revised copy for any changed qualification.
5. Supply approved technical articles, author names, dates, and original on-site photographs if desired. The existing photos come from the client profiles; confirm their publication rights.
6. Check the production deployment on physical or emulated mobile, tablet, and desktop browsers; validate navigation, keyboard use, reduced motion, forms, image loading, and Search Console indexing. Build and route smoke checks alone cannot guarantee layout at every screen size.

The sitemap includes approved-content public pages only. Search optimization improves discoverability but cannot guarantee a top ranking. No paid plans or prices are advertised because the supplied profiles do not contain them.
