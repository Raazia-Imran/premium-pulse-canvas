# HosH Integrity — Spatial 3D Corporate Website

## Direction
Build a bright, premium industrial website centered on a photorealistic spatial “asset integrity island.” The visual language will use an airy studio background, slate typography, signal-green accents, translucent inspection tags, clay-like controls, realistic shadows, and restrained dimensional motion.

## What will be built
- A responsive homepage led by “We Prevent Failure,” a central 3D industrial scene, certification pills, and layered inspection indicators.
- Dimensional service tiles for NDT, pipeline inspection, lifting equipment, QA/QC, HSE, and technical training.
- Separate Services, Industries, Training, Certifications, About, and Contact pages using the client-supplied company profile content.
- Shared navigation, footer, enquiry actions, consistent page transitions, and accessible mobile navigation.
- Responsive layouts across phone, tablet, laptop, and wide desktop sizes.

## Content and imagery
- Use the supplied HosH company profile, service lists, certifications, memberships, contact details, and logo material as the source of truth.
- Use uploaded screenshots only as visual references, not as website images.
- Create bespoke industrial visuals for the central scene and service objects; clearly mark any missing client facts such as phone number, address, or form destination as placeholders.

## Technical approach
- Keep the project’s existing TanStack React foundation while delivering the requested React, Tailwind, and motion experience; changing framework would add risk without changing the visible result.
- Use Three.js for the interactive spatial centerpiece and generated industrial imagery where photorealism adds value.
- Keep content and reusable sections modular, with route-specific metadata and reduced-motion support.
- No database is required for the content site. Enquiry submission and certificate lookup remain presentation-only until the client provides destinations or data.

## Validation
- Test the live site at desktop and mobile widths.
- Verify navigation, visual loading, text fit, parallax behavior, reduced-motion behavior, no overlapping content, and mobile performance. Below 768px, use a lightweight high-resolution dimensional render fallback or disable intensive camera rotation to preserve frame rate and battery life.
