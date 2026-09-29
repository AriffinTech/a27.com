---
name: a27-design-dna
description: Design and build brand-adapted marketing websites using A27's precise, typography-led, conversion-focused design system. Use for new company sites, landing pages, service sites, portfolios, and related page or component work that should share the A27 design DNA without copying A27's brand, content, assets, or page structure.
---

# A27 Design DNA

Build the same quality and design logic, not the same website.

Treat the source site as evidence for proportions, hierarchy, interaction restraint, and implementation discipline. Adapt theme, architecture, section selection, content, and imagery to the business in the current brief.

## Load the relevant references

- Read [references/design-system.md](references/design-system.md) for visual decisions, token mapping, responsive behavior, components, section patterns, content hierarchy, and anti-patterns.
- Read [references/implementation.md](references/implementation.md) before writing or changing code. It records the source stack and the standards to apply in a target project.
- If the target uses Next.js, inspect the installed version's relevant guides in `node_modules/next/dist/docs/` before coding. The source uses Next.js 16.3.3, whose APIs and conventions must not be assumed for another version.

## New Website Brief

Accept a brief in this shape:

```md
Brand:
Industry:
Description:
Primary colour:
Secondary colour:
Target audience:
Services:
Primary CTA:
Pages:
Special functionality:
Assets provided:
Additional notes:
```

Infer omitted details from the business, audience, available assets, and requested functionality. State any consequential inference before implementation. Never invent business facts, proof, metrics, clients, awards, testimonials, or guarantees.

## Required workflow

1. **Understand the business.** Identify the audience, their main problem, the offer, the trust burden, the primary conversion, and any real proof available.
2. **Decide the site architecture.** Select pages and their sequence from user intent. Do not start from a fixed homepage template.
3. **Map the brand into the system.** Choose light or dark surfaces, map the primary colour to the main action role, reserve the secondary colour, and verify contrast.
4. **Select suitable section patterns.** Use only the hero, services, about, process, portfolio, proof, pricing, FAQ, CTA, and footer patterns that help this business make its case.
5. **Build responsive layouts.** Design the information hierarchy at desktop and small-mobile widths together. Define a continuous navigation handoff with no breakpoint gap.
6. **Implement reusable components.** Centralize tokens, primitives, content data, and repeated page compositions. Keep static content server-rendered and isolate interactivity.
7. **Add required functionality.** Implement real forms, search, filters, integrations, commerce, auth, or data only when the brief requires them. Provide honest empty, loading, error, and success states.
8. **Polish and QA.** Test content, responsiveness, keyboard behavior, reduced motion, metadata, images, forms, and performance before handoff.

## MUST

- Build a distinct site architecture for the current business. Preserve A27's hierarchy, restraint, spacing discipline, and conversion clarity, not its exact section order.
- Establish semantic design tokens before composing pages. Use one dominant brand accent, neutral surfaces, readable text roles, structural rules, semantic status colours, named motion values, and consistent radii.
- Make typography and spacing carry the visual identity. Use strong heading contrast, controlled line lengths, compact labels only when useful, and generous but purposeful vertical rhythm.
- Use semantic HTML, one clear `h1` per page, logical heading order, useful landmarks, descriptive labels, keyboard-operable controls, visible focus, and sufficient contrast.
- Design every requested page for mobile. Prevent horizontal overflow and test at 320, 375, 414, 768, and a representative desktop width.
- Keep primary conversion paths obvious. Place the primary CTA near the initial value proposition and after the strongest supporting argument. Keep secondary actions visually subordinate.
- Use evidence-based copy. Replace missing proof with a request for assets, an honest placeholder during development, or a layout that does not depend on proof.
- Prefer Server Components and static rendering by default in Next.js. Add `"use client"` only to interactive boundaries.
- Validate forms on both client and server. Sanitize or escape untrusted content, enforce length limits, resist bots, and expose clear failure states.
- Respect `prefers-reduced-motion`. Motion must communicate hierarchy or state and must not be required to understand content.
- Use optimized media with known dimensions, accurate responsive `sizes`, descriptive alt text, and no copied A27 or third-party imagery.
- Provide page metadata, canonical URLs, crawl directives, a sitemap, social metadata, and appropriate structured data where the business supports it.

## SHOULD

- Begin from the source proportions: an 84rem content maximum, fluid 1rem to 1.5rem gutters, thin section rules, and the documented spacing/type scales. Adjust deliberately for the new content.
- Use high-contrast neutral surfaces with modest elevation. Prefer borders, lightness shifts, and whitespace over large shadows or decorative containers.
- Use modest radii for ordinary surfaces and pill radii mainly for compact actions or filters. Reserve unusually large radii for a single intentional feature.
- Keep motion to small lifts, directional icon movement, image scale near 1.02, short reveals, and functional accordions or menus.
- Keep icons sparse and meaningful. Use one coherent icon family for interface icons and a separate brand-icon set only when actual platforms must be identified.
- Separate reusable primitives from site-level compositions and content configuration. Prefer typed data maps over repeated hard-coded cards.
- Progressively enhance expensive visuals. A page must remain attractive and understandable when canvas, animation, or JavaScript is unavailable.
- Use plain, specific copy that names the customer's situation, the offer, and the next step.

## MAY

- Use a WebGL or CSS-art hero, rotating phrase, capability marquee, spotlight, floating contact action, tabbed problem explorer, search, filters, or pagination when it materially supports the brief.
- Use a centered marquee hero, split hero, product-led hero, proof-led hero, or quiet editorial hero. Choose from content needs rather than defaulting to the source hero.
- Use cards, but mix them with rows, split layouts, timelines, media blocks, comparison tables, or uninterrupted prose to create structural variety.
- Add a second display typeface when the new brand benefits from stronger contrast. A single Geist-like family remains valid for technical minimalism.
- Use light or dark themes with equal legitimacy. The source dark palette is an implementation example, not a mandatory identity.

## Anti-patterns

Avoid all of the following:

- Recreating A27's wording, brand, blue/yellow hero palette, founder story, WhatsApp number, pricing, services, case studies, or exact page flow.
- Wrapping every idea in a rounded card, using oversized radii everywhere, or making all cards float with shadows.
- Gratuitous gradients, glowing blobs, glass panels, spotlight cursors, neon outlines, or decorative grids that compete with the offer.
- Animating every section, using bouncy or looping motion without purpose, applying `transition: all`, or scaling whole cards aggressively on hover.
- Repeating the generic hero, logo rail, three-card feature grid, testimonials, FAQ, CTA, footer structure on every project.
- Adding icons to headings or lists solely to fill space. Do not substitute icons for hierarchy or copy.
- Inventing statistics, customer logos, testimonials, case studies, scarcity, ratings, awards, or technical capabilities.
- Writing generic claims such as "innovative solutions," "elevate your business," or "unlock your potential" when specific outcomes can be stated.
- Giving primary and secondary actions equal visual weight, repeating the same CTA in every section, or adding a floating contact button without audience justification.
- Treating responsive work as desktop stacking. Reconsider order, density, control sizing, media priority, and CTA hierarchy for small screens.
- Mixing raw one-off colours, arbitrary spacing, and multiple radius systems instead of extending tokens.
- Blindly copying source implementation quirks, dependency versions, or optional effects into a target project.

## Final QA checklist

### Desktop

- [ ] The architecture suits this business and differs meaningfully from a generic template.
- [ ] Container widths, grid tracks, text measures, section pacing, and alignment are intentional.
- [ ] The primary CTA is easy to find and supporting actions are subordinate.
- [ ] Hover states do not cause layout shift and decorative effects stay restrained.

### Mobile and responsive

- [ ] Test at 320, 375, 414, 768, and desktop widths with no horizontal scroll.
- [ ] Header navigation has a continuous desktop/mobile handoff and an accessible menu.
- [ ] Headings wrap safely; grids, forms, media, CTAs, filters, tables, and footer content transform appropriately.
- [ ] Tap targets are at least 44px where practical, and important clickable labels do not wrap awkwardly.

### Accessibility

- [ ] Page landmarks, heading order, labels, errors, status announcements, link purpose, and alt text are meaningful.
- [ ] All functionality works by keyboard with visible `:focus-visible` treatment.
- [ ] Text, controls, borders needed for comprehension, and focus indicators meet contrast requirements.
- [ ] Reduced-motion mode removes nonessential spatial movement and preserves comprehension.

### Functionality

- [ ] Navigation, active states, menus, accordions, filters, search, external links, and CTA destinations work.
- [ ] Forms validate on client and server and expose loading, success, invalid, unavailable, and delivery-failure states.
- [ ] Empty and error states are honest; integrations use configured environment values rather than embedded secrets.

### SEO

- [ ] Unique title, description, canonical URL, social metadata, robots behavior, and sitemap entry exist for every indexable page.
- [ ] One descriptive `h1`, semantic headings, useful link text, and crawlable core content are present.
- [ ] Structured data is accurate and included only where supported by real business information.

### Performance

- [ ] Images use appropriate formats, dimensions, loading priority, and responsive sizing.
- [ ] Client JavaScript and third-party scripts are limited to required interactivity.
- [ ] Expensive animation pauses offscreen or in background tabs and degrades safely.
- [ ] Run the target project's lint, typecheck, tests, production build, and a representative performance audit.

The acceptance test is simple: the result should feel related to A27 through precision, restraint, hierarchy, and usability, while being unmistakably designed for a different business.
