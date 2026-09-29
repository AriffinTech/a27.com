# A27 Technical Implementation Reference

This reference records the source repository as inspected in September 2026 and turns its implementation patterns into reusable standards. Treat versions as a snapshot. Inspect the target repository before choosing dependencies or APIs.

## Contents

1. [Source stack](#source-stack)
2. [Application structure](#application-structure)
3. [React and Next.js patterns](#react-and-nextjs-patterns)
4. [TypeScript and data modeling](#typescript-and-data-modeling)
5. [Styling architecture](#styling-architecture)
6. [Component architecture](#component-architecture)
7. [Forms and backend behavior](#forms-and-backend-behavior)
8. [Accessibility standards](#accessibility-standards)
9. [SEO standards](#seo-standards)
10. [Performance standards](#performance-standards)
11. [Deployment and infrastructure](#deployment-and-infrastructure)
12. [Known source quirks](#known-source-quirks)
13. [Verification](#verification)

## Source stack

Installed versions were cross-checked with `npm ls --depth=0`.

| Layer | Source implementation |
| --- | --- |
| Framework | Next.js `16.3.3`, App Router |
| Rendering | React `19.2.8`, React DOM `19.2.8` |
| Language | TypeScript `5.9.3`, strict mode |
| Styling | Tailwind CSS `4.3.3` through `@tailwindcss/postcss` `4.3.3` |
| UI configuration | shadcn/ui-compatible `components.json`, New York style, RSC enabled, neutral base, CSS variables enabled |
| Accessible primitives | Radix Accordion `1.2.20`, Dialog `1.1.23`, Label `2.1.15`, Navigation Menu `1.2.22`, Slot `1.3.3`, Switch `1.3.7`, Tooltip `1.2.16` |
| Variant composition | class-variance-authority `0.7.1` |
| Class composition | clsx `2.1.1`, tailwind-merge `3.6.0` |
| Interface icons | lucide-react `1.34.0` |
| Brand/platform icons | react-icons `5.7.0` |
| Fonts | geist `1.7.2`, using Geist Sans and Geist Mono CSS variables |
| Linting | ESLint `9.39.5`, eslint-config-next `16.3.3` |
| Animation libraries | None. Motion is custom CSS, browser APIs, and a local WebGL component. |
| Database | None |
| Authentication | None |
| Form delivery | Direct REST request to Resend from a Next.js route handler |

The package manifest uses caret ranges, while the table above records installed versions. Future sites should not pin or copy these versions blindly.

### Important Next.js rule

The repository's `AGENTS.md` states that this Next.js version contains breaking changes relative to common prior knowledge.

Before writing Next.js code:

1. Read the target project's `AGENTS.md` and related agent instructions.
2. Confirm the installed Next.js version.
3. Read the relevant local guides under `node_modules/next/dist/docs/`.
4. Follow the target version's deprecations and file conventions.

The source already demonstrates one version-sensitive API: `searchParams` is typed as a promise and awaited in the App Router page.

## Application structure

```text
project-root/
|-- tokens.css                     Global design primitives
|-- package.json                   Dependencies and verification scripts
|-- components.json                shadcn-compatible configuration
|-- next.config.ts                 Next.js configuration
|-- postcss.config.mjs             Tailwind v4 PostCSS plugin
|-- public/                        Portrait and case-study images
`-- src/
    |-- app/
    |   |-- layout.tsx             Root metadata, fonts, header, main, footer
    |   |-- globals.css            Tailwind import, token bridge, global components
    |   |-- page.tsx               Homepage composition
    |   |-- <route>/page.tsx       Interior pages and page metadata
    |   |-- api/.../route.ts       Server route handler
    |   |-- robots.ts              Generated robots rules
    |   `-- sitemap.ts             Generated sitemap
    |-- components/
    |   |-- site/                  Business-aware sections and page compositions
    |   |-- ui/                    Reusable visual and accessible primitives
    |   `-- blocks/                Optional reusable content blocks
    |-- config/                    Typed navigation, services, offers, cases, contact data
    `-- lib/                       Cross-cutting helpers such as `cn` and URL builders
```

### Folder responsibilities

- `src/app`: routing, layouts, metadata, route handlers, and high-level page composition.
- `src/components/site`: components that know about the site, funnel, or business content.
- `src/components/ui`: brand-styled primitives that remain reusable across sections.
- `src/config`: typed content and stable business configuration kept out of page markup.
- `src/lib`: small framework-independent or cross-feature helpers.
- `public`: optimized source media with descriptive filenames and known dimensions.
- `tokens.css`: canonical raw visual values consumed by global CSS and Tailwind mappings.

Use this separation when it helps the target. Do not create empty layers for a very small site.

## React and Next.js patterns

### Server first

Pages, layout, pricing markup, portfolio markup, FAQ data, and most section compositions are Server Components. Client boundaries are limited to behavior that requires browser state or effects:

- Header scroll state and dialog menu.
- IntersectionObserver reveal.
- Search/filter/pagination library.
- Form validation and submission state.
- Tabbed problem explorer.
- WebGL canvas.
- Floating contact behavior where browser-only logic is needed.

Apply `"use client"` at the narrowest stable boundary. Do not mark a page or root layout as client code merely because one descendant is interactive.

### Layout and global composition

The root layout:

- Loads Geist Sans and Geist Mono variables.
- Applies the document language.
- Renders one site header, semantic `main`, site footer, and optional floating contact action.
- Owns default metadata and viewport configuration.

Keep global chrome in a layout. Keep page-specific heroes and CTAs in pages or page-level compositions.

### Routing

- Routes use the App Router file conventions under `src/app`.
- Interior pages export route-specific metadata.
- The legacy `/solutions` path redirects to `/services` with `redirect()` from `next/navigation`.
- Query parameters initialize service catalog filters and pricing-interest form state.
- The interactive solution library writes category, query, and page back to the URL with History API state so results remain navigable.

Prefer framework navigation APIs for route changes. Use the History API only for intentionally client-managed UI state, and ensure back/forward synchronization works.

### Images and links

- Use `next/image` for local portfolio and portrait images.
- Provide width/height for intrinsic images or `fill` inside a stable positioned container.
- Provide an accurate `sizes` expression.
- Use `next/link` for internal navigation.
- Use ordinary anchors for external URLs with `target="_blank"` and `rel="noopener noreferrer"` when a new tab is justified.

Do not wrap nested anchors through polymorphic components. Verify the rendered HTML is valid when using Radix Slot or `asChild`.

## TypeScript and data modeling

### Compiler posture

The source enables:

- `strict: true`
- `allowJs: false`
- `noEmit: true`
- Bundler module resolution
- Isolated modules
- JSON module resolution
- `@/*` mapped to `./src/*`

Keep strict typing. Do not suppress type failures to ship visual work.

### Reusable data patterns

- Derive union types from `as const` option arrays or object keys.
- Provide type guards for URL/query/form inputs.
- Model published and draft case studies as a discriminated union.
- Filter public case studies with a type predicate so unpublished content cannot accidentally require public-only fields.
- Type configuration objects such as navigation, service, and site config.
- Pass serializable typed data from Server Components to Client Components.

Use stable IDs or slugs as keys. Use array indices only for static, never-reordered display lists where no better identity exists.

### Naming

- Files and route directories: kebab-case.
- React components and exported types: PascalCase.
- Functions, local values, and props: camelCase.
- Constants that are true constants: uppercase snake case where useful.
- CSS custom properties: semantic kebab-case such as `--color-accent`.
- Global component classes: BEM-like names such as `.site-header__inner` and modifier classes such as `.site-header--scrolled`.

## Styling architecture

### Tailwind v4 setup

The source uses:

```css
@import "tailwindcss";
@import "../../tokens.css";
```

`globals.css` maps source tokens into Tailwind v4 through `@theme inline`, including background, foreground, border, primary, secondary, destructive, input, ring, sans, and mono roles.

Preserve the CSS entry import order. Do not remove the Tailwind import when modifying global styles.

### Token-first styling

- Keep raw palette, type, spacing, radius, motion, and depth values in tokens.
- Map semantic framework roles to tokens once.
- Reference variables from global classes, CSS Modules, and Tailwind arbitrary-value utilities.
- Add a named token when a value recurs or carries meaning.
- Permit one-off dimensions only when genuinely component-specific, such as portrait height or a stable media aspect ratio.

### Hybrid style strategy

The source uses three approaches:

1. Global semantic classes for repeated site structures such as header, hero, section frame, buttons, forms, and footer.
2. Tailwind utilities for local composition and responsive adjustments.
3. CSS Modules for the portfolio, whose alternating grid and responsive media treatment are cohesive and page-specific.

Choose a clear ownership boundary. Avoid expressing the same responsive or state rule partly in global CSS and partly in utilities when that creates competing breakpoints.

### Class composition

The shared helper is:

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Use it for conditional classes and safe Tailwind merging. Use CVA for primitives with a small, stable variant matrix, as the source button does.

## Component architecture

### UI primitives

- `Button`: CVA variants for primary, secondary, ghost, and icon plus default, large, and icon sizes. Supports `asChild` through Radix Slot.
- `Card`: composable header, title, description, content, and footer pieces over a shared bordered surface.
- `GridCard`: flexible card shell for site grids.
- `Accordion`: Radix behavior with project styling.
- `Input`, `Textarea`, `Label`, `Switch`, `Tooltip`, and Navigation Menu: accessible primitives with token styling.

Keep primitive APIs small and semantic. Avoid a single component with dozens of visual booleans.

### Site compositions

- `SectionFrame` standardizes section boundary, heading, optional introduction, and alignment.
- `CtaBand` exposes only title/body overrides while retaining a consistent conversion structure.
- `Pricing` maps typed package data into reusable cards.
- `Portfolio` maps publishable case-study data and owns media/copy alternation.
- `FAQSection` accepts two data columns and delegates disclosure behavior to the accordion primitive.
- `SolutionLibrary` owns search, filtering, lazy catalog loading, URL synchronization, focus, and pagination.
- `ProjectBriefForm` owns field state, client validation, server submission, errors, loading, and success.

Prefer composition over copying markup. Keep business data out of primitive components.

### Icons

- Use Lucide for interface actions and generic concepts.
- Use react-icons only for actual technology/platform brands.
- Mark decorative icons `aria-hidden="true"`.
- Give icon-only controls an accessible name.
- Do not mix several generic icon families on the same interface.

## Forms and backend behavior

### Source form fields

The project brief captures:

- Project type, required.
- Timeline, optional.
- Project message, required.
- Name, required.
- Email, required.
- Business name, optional.
- Website/social URL, optional and required to begin with `http://` or `https://` when present.
- Hidden office-location honeypot.
- Optional pricing-interest query value.

The client validates on blur and submit. It clears the relevant field/form error on update and prevents submission until required input is valid.

### Server validation

The route handler treats all JSON as untrusted. It trims and caps values:

| Field | Maximum length |
| --- | ---: |
| Name | 120 |
| Email | 254 |
| Business | 160 |
| Website/social link | 500 |
| Project type | 100 |
| Timeline | 100 |
| Message | 4000 |
| Honeypot | 160 |
| Pricing interest | 40 |

It then:

1. Returns `400` for malformed JSON or invalid required values.
2. Returns an innocuous success response when the honeypot is populated.
3. Validates project type and pricing-interest values through type guards.
4. Validates optional URL shape.
5. Returns `503` when email environment configuration is absent.
6. Escapes HTML special characters before building the email body.
7. Sends to Resend with `cache: "no-store"` and uses the visitor email as `reply_to`.
8. Returns `502` for delivery failure and `200` for success.

### Environment variables

The source expects:

```text
RESEND_API_KEY
RESEND_FROM
PROJECT_ENQUIRIES_TO
```

Never expose these to client components or commit real values. Future sites should add rate limiting, origin/CSRF considerations, abuse monitoring, and durable storage only when their threat model and operational requirements warrant them.

## Accessibility standards

### Source strengths to preserve

- Semantic header, main, footer, nav, section, article, figure, form, list, and heading elements.
- Global `:focus-visible` outline of 3px with 3px offset.
- Radix primitives for dialog navigation and accordion behavior.
- `aria-current="page"` on active navigation.
- Accessible names for icon controls and floating contact link.
- Decorative icons and canvas marked hidden from assistive technology.
- Form labels, `aria-invalid`, error descriptions, `role="alert"`, and success `aria-live`.
- Reduced-motion handling in reveal, marquee, rotator, portfolio media, and WebGL behavior.
- Focus movement after solution pagination.

### Required target standard

- Preserve native semantics before adding ARIA.
- Keep a logical heading outline and one page-level `h1`.
- Ensure every control has a programmatic name and every error is connected to its field.
- Use at least 44px interactive height for primary touch controls where practical.
- Make hover content also available on focus or without interaction.
- Trap focus, restore focus, support Escape, and prevent background interaction in modal navigation.
- Do not disable zoom.
- Test keyboard-only use and a representative screen reader flow.
- Meet WCAG contrast for text and meaningful graphical/control boundaries.
- Keep focus indication visible above sticky UI and never remove it without replacement.

## SEO standards

### Source implementation

The root layout defines:

- `metadataBase` from the site URL.
- Default title plus a title template.
- Site description.
- Root canonical URL.
- Open Graph URL, type, locale, site name, title, and description.
- Dark color scheme and theme color in viewport metadata.

Each major page defines a unique title, description, and canonical path. `robots.ts` allows crawling and points at the sitemap. `sitemap.ts` enumerates indexable routes with priority, frequency, and last-modified values.

### Improve for future sites

- Add route-appropriate Open Graph and Twitter images rather than relying only on text metadata.
- Include icons and manifest metadata when the project is installable or needs branded browser surfaces.
- Generate metadata dynamically only when content is dynamic.
- Include structured data only for factual entities such as LocalBusiness, Organization, Service, Product, Article, BreadcrumbList, or FAQ where the page actually qualifies.
- Use stable and truthful sitemap `lastModified` values. Do not regenerate the current date for unchanged content merely to imply freshness.
- Keep primary content server-rendered and crawlable.
- Use descriptive paths and redirects for renamed routes.
- Prevent draft/private case studies and thin internal results pages from being indexed.

## Performance standards

### JavaScript budget

- Keep static sections as Server Components.
- Lazy-load large client-only data or behavior when it is first requested.
- Prefer CSS transitions and native browser APIs over installing a motion library for simple effects.
- Avoid site-wide providers for local state.
- Audit brand-icon packages and import only used icons.

### Media

- Use responsive image optimization and stable dimensions.
- Set `priority` only for the true LCP image.
- Lazy-load below-fold portfolio/product images.
- Use accurate `sizes`; do not serve desktop-width images to one-column mobile cards.
- Compress user-provided photography without erasing necessary detail.

### Animation

- Animate transform and opacity where possible.
- Pause loops when offscreen, unfocused, or reduced motion is requested.
- For optional WebGL, request low power, cap frame rate and DPR, clean up resources, and provide a static fallback.
- Do not make WebGL, autoplay media, or a marquee necessary for understanding or navigation.

### CSS and layout

- Keep one canonical token source.
- Avoid large repeated arbitrary-value class strings when a semantic component class is clearer.
- Prevent layout shift by reserving image and form-message space.
- Use `overflow-x: clip` only as a safety net. Fix the overflowing child rather than hiding defects.

## Deployment and infrastructure

The repository has no deployment descriptor, CI workflow, infrastructure configuration, database client, or authentication provider. The UI mentions Vercel and several published case-study URLs use `vercel.app`, so Vercel is a plausible deployment platform, but the repository does not prove that the A27 site itself is deployed there.

For a future project:

1. Verify the actual target platform and runtime before implementation.
2. Confirm route-handler, environment-variable, image, caching, and region behavior on that platform.
3. Add a deployment descriptor only when the platform requires it.
4. Document secrets and operational ownership without committing credentials.
5. Add persistence, queues, auth, analytics, or monitoring only from real requirements.

Never state an inferred platform as fact.

## Known source quirks

These are not part of the reusable design DNA:

1. **Navigation breakpoint gap:** desktop navigation activates at Tailwind `lg` or 64rem, while the custom mobile button activates only at 60rem and below. Align the handoff in new work.
2. **Unused hover-duration input:** `InfiniteSlider` writes `durationOnHover` to a data attribute, but the current CSS pauses the track instead of using that duration. Remove dead API or implement it intentionally.
3. **Duplicated configuration:** services/process data exists in both `config/site.ts` and `config/services.ts`. Choose one canonical source per content domain.
4. **Duplicated WhatsApp configuration paths:** contact helpers exist in both `config/contact.ts` and `lib/whatsapp.ts`, with related values also exposed by site config. Consolidate responsibility in new work.
5. **Mixed breakpoint ownership:** global CSS and Tailwind utilities sometimes govern the same component. Define which layer owns each responsive transition.
6. **Optional effects are source-specific:** the rotating yellow phrase, badge glow, spotlight card, oversized portrait radius, technology marquee, and floating WhatsApp action should not become automatic defaults.
7. **WebGL fallback can improve:** foreground content survives without WebGL, but future implementations should also expose an explicit CSS visual fallback and verify shader compile/link status.
8. **Metadata can be richer:** the current code covers core metadata, robots, and sitemap but has no visible route-specific social images or Twitter metadata.
9. **No automated test suite is declared:** scripts cover lint, typecheck, build, development, and start. Add behavior tests according to project risk.

## Verification

Before handoff on a generated site:

```text
npm run lint
npm run typecheck
npm run build
```

Also run the target's own test commands and verify:

- Every route renders without console or hydration errors.
- Desktop and mobile navigation are continuously available across their handoff breakpoint.
- 320, 375, 414, 768, intermediate tablet, and desktop widths have no unintended overflow.
- Keyboard focus order, menu focus management, accordions, filters, pagination, and forms work.
- Reduced motion removes loops and spatial reveals.
- Metadata, canonical URLs, robots, sitemap, redirects, external links, and social previews are correct.
- Images have expected intrinsic sizes, responsive sources, alt behavior, and no layout shift.
- Form handlers reject malformed data, invalid enumerations, excessive lengths, and bot fields, and expose configuration and delivery failures safely.
- Client bundles and third-party scripts are proportional to the requested experience.

When the target is Next.js, use the installed version's documented production build and deployment verification flow. The source repository is a useful pattern library, not an API authority for future versions.
