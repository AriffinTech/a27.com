# A27 Visual and Decision System

This reference explains what the source website looks like, which values create that character, and how to make new decisions without cloning it.

## Contents

1. [Design DNA](#design-dna)
2. [Observed source palette and tokens](#observed-source-palette-and-tokens)
3. [Brand and theme mapping](#brand-and-theme-mapping)
4. [Containers, grids, and spacing](#containers-grids-and-spacing)
5. [Typography](#typography)
6. [Responsive behavior](#responsive-behavior)
7. [Navigation](#navigation)
8. [Hero patterns](#hero-patterns)
9. [Reusable components](#reusable-components)
10. [Section patterns](#section-patterns)
11. [Media treatment](#media-treatment)
12. [Motion and micro-interactions](#motion-and-micro-interactions)
13. [Content hierarchy and conversion](#content-hierarchy-and-conversion)
14. [Page architecture](#page-architecture)
15. [Visual anti-patterns](#visual-anti-patterns)

## Design DNA

The source is a modern-minimal, technical, founder-led service website. It feels premium through precision rather than decoration.

Its defining traits are:

- A high-contrast neutral canvas with one recurring blue action colour.
- Large, tightly tracked sans-serif headings paired with calm body copy.
- Strong negative space and thin horizontal rules separating sections.
- An 84rem outer rhythm that keeps both centered heroes and wide grids coherent.
- Small labels, indices, and prices in monospace to signal process and technical competence.
- Borders and surface lightness changes before shadows.
- Pill buttons, modest card radii, sparse icons, and shallow hover movement.
- A clear conversion sequence: promise, capabilities, human trust, offer, objection handling, final action.
- Motion that is quiet except for one signature hero device.

The transferable DNA is not "dark website with blue buttons." It is:

1. Establish a disciplined token system.
2. Use typography and spacing as the primary visual language.
3. Make section boundaries legible without filling every section with a container.
4. Give the primary action a clear visual monopoly.
5. Add at most one or two memorable effects, then keep the rest quiet.
6. Let the business determine architecture and proof, not a fixed landing-page formula.

## Observed source palette and tokens

The values below are extracted from the current repository. Preserve them as a source snapshot. Do not assume that future sites must use them.

### Colour tokens

| Token | Source value | Observed role |
| --- | --- | --- |
| `--color-paper` | `#09090b` | Page canvas and deepest surface |
| `--color-paper-2` | `#18181b` | Raised or interactive neutral surface |
| `--color-paper-3` | `#27272a` | Selection and stronger neutral surface |
| `--color-ink` | `#ffffff` | Primary text and high-emphasis marks |
| `--color-ink-2` | `#e4e4e7` | Supporting text with high readability |
| `--color-muted` | `#a1a1aa` | Secondary descriptions, captions, metadata |
| `--color-rule` | `#27272a` | Default borders and section rules |
| `--color-rule-2` | `#3f3f46` | Stronger rules and field separation |
| `--color-accent` | `#3b82f6` | Primary action, focus, active accents |
| `--color-accent-hover` | `#60a5fa` | Primary hover state |
| `--color-accent-ink` | `#ffffff` | Text on the accent |
| `--color-focus` | `#3b82f6` | Visible focus outline |
| `--color-error` | `oklch(54% 0.19 28)` | Error text and destructive meaning |
| `--color-success` | `oklch(48% 0.12 150)` | Success meaning |
| `--color-overlay` | `rgba(0, 0, 0, 0.7)` | Modal/mobile-navigation scrim |

The hero introduces two source-specific deviations:

- The rotating phrase uses `#fde047` plus a soft yellow drop shadow.
- The badge uses a blue border and a blue glow. This is a signature accent, not permission to add glows elsewhere.

### Spacing tokens

| Token | rem | px at 16px root |
| --- | ---: | ---: |
| `--space-3xs` | `0.125rem` | 2px |
| `--space-2xs` | `0.25rem` | 4px |
| `--space-xs` | `0.5rem` | 8px |
| `--space-sm` | `0.75rem` | 12px |
| `--space-md` | `1rem` | 16px |
| `--space-lg` | `1.5rem` | 24px |
| `--space-xl` | `2.5rem` | 40px |
| `--space-2xl` | `4rem` | 64px |
| `--space-3xl` | `6rem` | 96px |
| `--space-4xl` | `9rem` | 144px |

The scale is deliberate but not a strict 4pt progression at the large end. Retain the named semantic ladder. Add intermediate values only when real content requires them.

### Type tokens

| Token | Source value | Typical use |
| --- | --- | --- |
| `--text-xs` | `0.75rem` | Eyebrows, indices, metadata |
| `--text-sm` | `0.875rem` | Navigation, buttons, helper copy, lists |
| `--text-base` | `1rem` | Body copy |
| `--text-md` | `1.125rem` | Lead body copy and large button text |
| `--text-lg` | `1.375rem` | Section introductions and mobile subheads |
| `--text-xl` | `1.75rem` | Card, process, and service headings |
| `--text-2xl` | `2.25rem` | Mobile section headings and form success heading |
| `--text-3xl` | `3rem` | Desktop section headings |
| `--text-display-s` | `clamp(2.35rem, 6vw, 4rem)` | Interior-page `h1` |
| `--text-display` | `clamp(2.5rem, 6vw, 4.5rem)` | Homepage hero `h1` |

### Fonts

- Display: Geist Sans through `var(--font-geist-sans)`.
- Body: Geist Sans through the same variable.
- Mono: Geist Mono through `var(--font-geist-mono)`.
- Body baseline: `1rem`, line-height `1.6`, `text-rendering: optimizeLegibility`.

The single-family approach works because weight, tracking, scale, measure, and mono labels create enough contrast. Future sites may introduce a distinct display family when the brand needs editorial, luxury, cultural, or expressive character.

### Shape, shadow, motion, and depth

| Category | Source values |
| --- | --- |
| Hairline | `1px` |
| Radius small | `0.5rem` |
| Radius medium | `0.75rem` |
| Radius large | `1rem` |
| Radius extra-large | `1.25rem` |
| Pill | `999px` |
| Whisper shadow | `0 1px 2px oklch(20% 0.01 258 / 0.05)` |
| Motion durations | `120ms`, `220ms`, `420ms` |
| Ease out | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Ease in | `cubic-bezier(0.7, 0, 0.84, 0)` |
| Ease in-out | `cubic-bezier(0.65, 0, 0.35, 1)` |
| Z-index ladder | `1`, `10`, `100`, `200`, `400`, `500`, `600` |

The founder feature uses a `2.5rem` outer radius and the portrait uses `2rem`. Treat those as intentional exceptions. Do not make them the default card shape.

## Brand and theme mapping

The system is theme-neutral. Decide light or dark from the business, audience, assets, and context of use.

### Map supplied colours by role

1. **Primary colour:** map to `--color-accent`, the main CTA, selected states, key links, and focus when contrast permits.
2. **Primary hover:** derive a nearby accessible lightness shift. Do not change hue dramatically between states.
3. **Accent ink:** choose light or dark text by measured contrast against the primary colour.
4. **Secondary colour:** reserve for supporting charts, illustration, a single highlighted phrase, or a secondary semantic family. Do not give it equal footprint with the primary colour.
5. **Neutrals:** derive paper, raised surfaces, primary ink, secondary ink, muted text, and rules independently of the brand accent.
6. **Semantic colours:** keep error, warning, and success meaning distinct from brand colours.

### Dark theme guidance

- Use lightness elevation: the page is darkest, raised surfaces are slightly lighter, and rules are a further step lighter.
- Avoid pure black plus many glowing elements. The source uses near-black neutrals and one controlled hero glow.
- Keep muted text readable. Do not reduce important descriptions to low-opacity grey.
- Use shadows only where borders and surface lightness cannot express elevation.

### Light theme guidance

- Use a warm or cool near-white paper rather than assuming `#ffffff` everywhere.
- Create subtle surface separation with a small lightness or chroma shift and restrained rules.
- Darken the brand accent when necessary for text, outlines, and focus visibility.
- Preserve the source's weight and spacing, but expect rules to become more visible and shadows even quieter.

### Contrast and footprint

- Test body text, muted text, links, buttons, field borders, errors, and focus indicators against their actual backgrounds.
- Keep the main accent footprint small enough that it remains decisive. A useful default is actions, active states, and a few text accents, not entire alternating sections.
- If the supplied primary colour cannot support accessible button text, create an accessible action shade and retain the original colour for non-text brand marks.
- Never encode state through colour alone.

## Containers, grids, and spacing

### Outer geometry

- Page maximum: `84rem`.
- Horizontal gutter: `clamp(1rem, 4vw, 1.5rem)`.
- Standard page shell: `width: min(100%, 84rem); margin-inline: auto; padding-inline: gutter`.
- Header inner height: at least `4.25rem`.
- Home content begins without an extra top offset after the hero and capability rail.
- Interior shells begin with `--space-xl` top padding, reduced to `--space-lg` on small screens.

### Section frame

The main section primitive uses:

- A top `1px` rule.
- Desktop vertical padding of `--space-4xl` or 9rem.
- A heading group no wider than 48rem.
- `--space-3xl` between the heading group and body content.
- Left alignment by default, with centered alignment used intentionally rather than globally.

At 40rem and below, section padding and heading-to-content space both reduce to `--space-xl` or 2.5rem.

### Grid behavior

- Use `minmax(0, 1fr)` for tracks containing text or media so long content can shrink.
- Source service bento: four columns, with one double-width/double-height tile and two double-width tiles.
- Source offer/pricing cards: one column by default, three columns from the desktop/tablet layout where content fits.
- Source split editorial sections: ratios near `0.9fr / 1.1fr`, `1.15fr / 0.85fr`, or `0.92fr / 1.08fr`.
- Source case studies alternate copy/media sides on desktop, then put media first on small screens.
- Use `gap` tokens instead of margin patches between grid children.

Do not repeat three equal columns merely because three items exist. Consider an indexed list, split detail, horizontal comparison, carousel only when usable, staggered media, or an editorial feature plus supporting rows.

## Typography

### Source hierarchy

- Homepage hero `h1`: `--text-display`, weight 700, line-height 1, tracking `-0.05em`, measure about `14ch`, centered.
- Interior `h1`: `--text-display-s`, weight 700, line-height 1, tracking `-0.05em`, balanced wrapping.
- Section `h2`: `--text-3xl`, weight 700, line-height 1.05, tracking `-0.04em`.
- Mobile section `h2`: `--text-2xl`.
- Service/process/card heading: commonly `--text-xl`, weight 700, line-height about 1.1, tracking `-0.03em` to `-0.05em`.
- Section introduction: `--text-lg`, line-height 1.5, measure around `50ch`.
- Body support copy: `--text-base` or `--text-sm`, line-height 1.5 to 1.6, muted colour.
- Labels and indices: `--text-xs` or `--text-sm`, mono, medium/semibold, letter-spacing `0.06em` to `0.08em`, often uppercase.

### Decision rules

- Scale hero type to copy length. Short claims can be large; long claims must step down or be rewritten.
- Keep headings roman. Use weight, colour, or a restrained underline for emphasis rather than italic display words.
- Give body text a readable measure, generally 38ch to 60ch depending on role.
- Avoid centered paragraphs wider than about 43rem.
- Use `overflow-wrap: anywhere` and `min-width: 0` for display headings in constrained grids.
- Use mono sparingly for factual metadata, steps, price emphasis, filters, and compact labels. Do not set long prose in mono.
- Do not make every section title the same size. Let the hierarchy reflect the section's importance.

## Responsive behavior

The source combines custom CSS breakpoints with Tailwind defaults:

| Width | Source behavior |
| --- | --- |
| `<= 40rem` / 640px | Small-mobile transformations, full-width hero actions, one-column forms/grids, compact sections and footer |
| `md` / 48rem / 768px | Common one-to-two-column Tailwind transitions |
| `<= 60rem` / 960px | Major custom grids and alternating case studies collapse; custom nav styles switch |
| `lg` / 64rem / 1024px | Tailwind desktop navigation and three-column patterns activate |

### Important source quirk

The desktop navigation uses Tailwind `lg:block` at 64rem, while the custom mobile menu button only becomes visible at `max-width: 60rem`. This can leave a 60rem to 64rem interval with neither navigation control visible. Do not copy this.

Choose one handoff threshold for navigation. At every viewport, exactly one of the desktop navigation or mobile-menu trigger must be available.

### Small-screen transformations

- Change centered hero action rows to a vertical stack with full-width buttons. The source reverses their order so the primary action appears first visually.
- Reduce the hero headline to `clamp(2rem, 9vw, 2.75rem)` and interior headlines to approximately `clamp(2.35rem, 11vw, 3.25rem)` where copy permits.
- Allow the hero badge to wrap and center its text.
- Convert multi-column service and form grids to one column.
- Reduce card padding from 2.5rem or 2rem toward 1.5rem or 1rem.
- Stack CTA bands and form footers with full-width actions.
- Put case-study media before its copy and make its external action full width.
- Make filter groups horizontally scrollable with edge masks instead of squeezing labels.
- Collapse footer metadata to one column and allow navigation links to wrap.
- Hide nonessential decorative grid lines, but retain structure and contrast.

Test 320px explicitly. A design that works only at 390px is not complete.

## Navigation

### Desktop source pattern

- Sticky at the top with z-index 200.
- Transparent border at rest.
- After 12px scroll, add a rule, a subtle shadow, an 80 percent paper mix, and a 14px backdrop blur.
- Use a three-track inner grid: wordmark, centered links, trailing actions.
- Give each navigation target a minimum height of 2.75rem.
- Indicate the active page with text/surface state and `aria-current="page"`.

Future sites may use centered, edge-aligned, utility-heavy, or product navigation. Keep link count proportional to actual architecture. Do not invent destinations to make the header look full.

### Mobile source pattern

- Use a 44px icon trigger with an accessible name.
- Open an anchored modal panel with an overlay, close button, clear title, and scrollable body.
- Make primary destinations large rows separated by rules.
- Close the menu on navigation.
- Use an accessible dialog primitive that manages focus, Escape, and background interaction.

If the site has only two or three destinations, a simpler disclosure panel may be better than a large full-screen menu.

## Hero patterns

### Observed centered marquee hero

The source homepage uses:

- A centered content column capped at 47rem.
- A compact linked badge.
- A large three-line promise with a rotating highlighted noun phrase.
- Supporting copy capped at 43rem.
- Two actions: quiet proof/work action and bright project action.
- A WebGL background behind content.
- A technology marquee directly beneath the hero as a credibility bridge.

Use this pattern when the offer is broad but can be unified by a single outcome. Replace the rotating phrase with static copy when motion adds no clarity.

### Observed interior hero

The source interior pages use:

- A compact eyebrow spanning the full grid.
- A left-side `h1` in a 1.15fr track.
- Supporting explanation and primary CTA in a 0.85fr track.
- A bottom rule and large but shorter vertical padding than the home hero.

Use this pattern for service, about, pricing, portfolio, and contact pages that need immediate orientation.

### Alternative heroes with the same DNA

- **Split evidence hero:** promise on one side, real product/site image or proof on the other.
- **Offer-led hero:** a precise service and qualification statement with one CTA and a short scope list.
- **Product-led hero:** interface demonstration with restrained copy for software products.
- **Editorial hero:** left-aligned statement, no badge, and a rule-led introduction for professional or cultural brands.
- **Proof-led hero:** real case result or recognizable client work first when trust is the hardest conversion barrier.
- **Local-service hero:** service area, availability, and direct contact without a technology marquee.

Do not use a badge, rotating words, two buttons, and animated background by default. Each is optional.

## Reusable components

### Buttons

Source baseline:

- Inline flex, centered content, 0.5rem internal gap.
- Minimum height 2.75rem; large variant 3.1rem.
- Pill radius and 0.625rem by 1rem padding.
- `--text-sm`, weight 600, line-height 1.
- Primary: solid accent with accent-ink text.
- Secondary: paper background and rule border.
- Ghost/icon: transparent until hover.
- Hover lift: 1px; active press: 1px downward.
- Disabled: 55 percent opacity and no transform.

Provide default, hover, focus-visible, active, disabled, loading, error where relevant, and success states. Do not rely on hover for essential feedback.

### Cards

- Default radius is 0.75rem with a 1px rule.
- Default surface remains close to the page surface.
- Hover may shift border to accent, raise 1px, and add a restrained accent-tinted shadow.
- Content padding commonly ranges from 1.5rem to 2.5rem by importance and viewport.
- Internal order is label/context, heading, explanation, evidence/capabilities, then action.

Use cards only for content that benefits from independent boundaries or equal comparison. Use rows and open sections for narrative material.

### Forms

- Source form width is capped at 48rem and separated by a dark top rule.
- Use two columns for compatible short fields and one column for long text.
- Field controls use paper background, 1px rules, 0.75rem radius, and at least 3.25rem height in the site-specific form styles.
- Labels pair the label with an optional hint; reserve space for field messages to reduce layout shift.
- Use visible `aria-invalid`, `aria-describedby`, inline error text, a form-level alert, disabled/loading submit state, and an `aria-live` success state.
- Keep the submit explanation and action together in a ruled footer.

### FAQ

- Use a one-column layout on small screens and two independent columns only when scanning improves.
- Use accessible single-open, collapsible accordions.
- Separate items with rules rather than wrapping each answer in a card.
- Keep trigger text left-aligned and icon movement subtle.

### Filters, search, and pagination

- Use a labeled search field with an icon that does not replace the label.
- Use `aria-pressed` for category chips.
- Preserve category, query, and page in the URL when results are shareable.
- Announce loading and result counts.
- After pagination, scroll to the results and move focus to the first result while respecting reduced motion.
- Load large catalog data only when the user requests it, as the source solution library does.

## Section patterns

### Services or products

Choose among:

- A small comparison grid for three genuinely parallel offers.
- An asymmetric bento when one offer is primary.
- Indexed horizontal rows when explanations are substantial.
- A searchable catalog when there are many real offerings.
- Media-backed product groups for commerce or physical products.

Each item needs a clear customer problem, offer name, concise explanation, relevant inclusions, and an honest next step. Avoid feature lists that differ only by synonyms.

### About and founder trust

The source uses a rare large-radius spotlight surface containing a founder statement and a real portrait. This works because direct founder access is a central trust proposition.

Adapt the trust device:

- Founder-led business: real portrait, role, direct working model, and link to a fuller story.
- Established team: leadership or delivery-team proof, not a fabricated founder narrative.
- Regulated service: qualifications, process, accreditations, and responsible persons.
- Product company: product philosophy, security posture, or support model may be stronger than a portrait.

### Process

Use an ordered list with mono indices, thin top/bottom rules, a clear step title, and one outcome-focused sentence. Keep the number of steps honest. On mobile, retain the index in a narrow column instead of turning every step into a card.

### Portfolio and case studies

- Alternate copy and media on desktop only when multiple studies make the rhythm useful.
- Use a real screenshot with intrinsic dimensions and a thin framed surface.
- Lead with category and outcome-oriented summary.
- Include business need, what was built, and what it enables when those facts are available.
- Use compact deliverable tags only as secondary metadata.
- Put media first on mobile.
- Draft or confidential work must not appear as published proof.

### Testimonials and proof

The current site has no testimonial component. Do not imply that it does.

For future sites:

- Use only supplied and attributable quotes.
- Prefer one or two substantive quotes with name, role, company, and permission over a wall of generic praise.
- Use real logos only when the relationship is authorized.
- If proof is unavailable, use process transparency, work samples, qualifications, product demonstration, or ownership/support terms instead.

### Pricing

The source presents three comparable packages with title, price, explanation, ruled feature list, primary package action, and a quiet alternate contact link. Only one package receives the accent action.

Use package cards when scope is standardized enough to compare. For consultative or variable work, use starting ranges, engagement models, a scope table, or a direct qualification CTA instead of fake precision.

### CTA bands

The source CTA band is open, rule-led, and split between a problem-framed heading and actions. It does not sit in a glowing gradient box.

- Use a strong top rule and ordinary page surface.
- Keep body copy short.
- Use one primary path and at most one meaningful secondary path.
- Stack actions on small screens.
- Change CTA wording based on funnel stage rather than repeating the hero label mechanically.

### Footer

The source uses a minimal metadata row: copyright/location, centered page links, and a trailing contact action. On mobile it collapses to a single column.

Choose footer density from the architecture. A small brochure site does not need four columns. A product with docs, legal, resources, and account routes may.

## Media treatment

- Use `next/image` or the target framework's image optimization where appropriate.
- Preserve intrinsic width and height, or use a stable aspect-ratio/fill container to prevent layout shift.
- Write alt text that describes the informational content and context, not filenames or keyword lists.
- Use empty alt text for decorative images.
- Set responsive `sizes` from the actual grid. The source case studies use `(max-width: 960px) calc(100vw - 2rem), 56vw`.
- Lazy-load below-fold case-study images. Prioritize only the true largest-contentful hero image.
- Use `object-fit: cover` only when cropping is acceptable.
- Frame screenshots with a hairline rule and modest radius. Do not draw fake browser or device chrome.
- Apply image hover scale around 1.02 only on fine pointers.
- Never present generated or stock imagery as actual customers, facilities, products, or team members.

## Motion and micro-interactions

### Source motion vocabulary

- Hero and reveal entrance: opacity plus 10px vertical translation over 420ms.
- Buttons and cards: 1px to 2px lift, 120ms to 220ms.
- Text-link arrow: 3px horizontal movement.
- Images: scale to 1.02 over 420ms.
- Accordion: 200ms height transition using Radix measured content height.
- Hero word rotator: 10.8s stepped vertical track.
- Capability marquee: approximately 30s linear loop, paused on hover or focus.
- Mobile menu: 10px fade/slide and overlay fade.

### Rules

- Animate transform and opacity when possible. Avoid animating layout properties except measured disclosures such as an accordion.
- Never use `transition: all` in new work. Name the properties.
- Restrict prominent motion to fewer than three motifs per page.
- Use fine-pointer media queries for hover-only effects.
- Keep focus indication instant and visible.
- In reduced-motion mode, remove loops and spatial transforms, shorten remaining transitions to 150ms or less, and show content immediately.
- Do not add smooth scrolling globally when it conflicts with user preferences or focus behavior.

### Optional WebGL pattern

The source custom canvas:

- Requests WebGL with `alpha: false`, `antialias: false`, and `powerPreference: "low-power"`.
- Caps painting at 30fps.
- Caps device pixel ratio at 1 on widths up to 768px and 1.25 on larger screens.
- Uses `ResizeObserver` for canvas sizing.
- Uses `IntersectionObserver` to pause when offscreen.
- Pauses when the document is hidden.
- Draws a static frame for reduced motion.
- Deletes buffers, programs, and shaders on cleanup.

If using this pattern, also provide a CSS background fallback, check shader compilation/program linking, and ensure all foreground content remains fully usable without WebGL.

## Content hierarchy and conversion

Write in this order of reasoning, not necessarily this DOM order:

1. **Audience situation:** what they are trying to do or what is failing now.
2. **Offer:** what the business actually provides.
3. **Outcome:** what changes for the customer.
4. **Mechanism:** enough detail to make the offer credible.
5. **Proof:** real work, people, process, qualifications, product demonstration, or policies.
6. **Risk reduction:** pricing approach, timeline, ownership, support, FAQ, or guarantee only when factual.
7. **Action:** the next step stated in plain language.

CTA guidance:

- The hero gets one primary CTA and optionally one secondary proof/navigation action.
- Repeat the primary action after the strongest proof or offer detail and at the final decision point.
- Use action-specific wording: `Book an assessment`, `Browse available homes`, `Request a quote`, or `Start a project` rather than universal `Get started`.
- A floating WhatsApp/contact action is optional. Use it only when the audience already converts through that channel and ensure it does not obscure content.
- Do not place a button after every paragraph.

## Page architecture

### Observed source flow

Homepage:

1. Sticky header
2. Centered animated promise and dual CTA
3. Technology capability rail
4. Three service pillars
5. Founder-led trust feature
6. Pricing comparison
7. FAQ
8. Final CTA band
9. Minimal footer

Interior pages:

1. Sticky header
2. Compact split interior hero
3. Page-specific evidence, catalog, pricing, process, portfolio, or form
4. Final CTA band where relevant
5. Footer

This flow suits a founder-led technical studio. Do not reuse it wholesale.

### Architecture selection principles

- Put the hardest customer question early. For a new local service, that may be location and availability. For software, it may be the product demonstration. For consulting, it may be credibility and method.
- Match page count to search intent and buying complexity. Separate services with distinct audiences or search intent; combine thin pages.
- Give high-intent actions their own path when the form or qualification requires explanation.
- Keep portfolio, pricing, resources, and about pages only when real content supports them.
- Use FAQ to resolve recurring objections, not as a dumping ground for missing page structure.
- Let industries change the proof model: clinical credentials, industrial safety, retail products, property listings, professional case studies, or software security.
- Maintain consistent navigation and tokens across pages while varying section composition and rhythm.

## Visual anti-patterns

- Do not confuse premium with excessive empty space. Every large gap should establish hierarchy or pacing.
- Do not alternate full-width tinted bands mechanically. Thin rules and open paper are the default separator.
- Do not add a radial gradient or grid texture to every section.
- Do not use one giant rounded rectangle to contain each section.
- Do not make every heading an uppercase mono label followed by the same 3rem title.
- Do not use the source's yellow rotating phrase as a brand-neutral default.
- Do not make every three-item set a three-column card grid.
- Do not show brand/platform icons unless those integrations or relationships are real.
- Do not use vague, interchangeable website copy.
- Do not make all interactions move. Static clarity is a valid and often better choice.
- Do not promote decorative motion above readable content or conversion.
- Do not carry source defects, dead props, inconsistent breakpoints, or duplicated data into new projects.

The visual target is controlled contrast, clear hierarchy, and business-specific structure. If removing a decoration makes the page clearer without making it anonymous, remove it.
