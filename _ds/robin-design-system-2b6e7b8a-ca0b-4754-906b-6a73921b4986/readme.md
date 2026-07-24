# Robin Design System

A working design system for **Robin** (robinpowered.com) — the workplace-experience
platform teams use to **book desks and rooms, see who's in the office, manage visitors,
and understand how space gets used**. This system was reconstructed from Robin's
**"DS_ Core" Figma library** (variables, type, logo, components) and packaged as
token CSS + React primitives + a product UI kit.

> **Source of truth:** the attached Figma file *DS_ Core.fig* (mounted read-only as a
> virtual filesystem). Foundations were pulled from its **Colors / Typography / Logo /
> Effects / Dimensions / Content-Guidelines** pages and its Figma Variable set; the icon
> library is its **Icons-FontAwesome** page. No public repo or live URL was provided —
> reconnect the Figma if these need re-deriving.

---

## Product context

Robin is a **B2B workplace / office-management** app. The flagship surface is a **web
dashboard** (desk booking, room scheduling, office maps, people directory, analytics),
backed by mobile apps and meeting-room displays. The product is **practical, calm, and
people-first** — it helps hybrid teams coordinate their days in a shared office.

The system is built on an **Ant Design** foundation (control sizes, token structure,
component anatomy) **re-skinned with Robin's brand**: a magenta/plum identity, the warm
geometric **Brown LL** typeface, and FontAwesome iconography.

---

## Content fundamentals

How Robin writes (from the Figma *Content Guidelines* page):

- **Sentence case everywhere by default.** "Most text is lowercase, except the first
  letter of the first word and proper nouns." → *"Book a desk"*, *"Find my desk"*,
  *"Search desks, rooms, people"*.
- **Title case only** for specific structural elements: page/section **titles**,
  **navigational** items, and **tabs**. (e.g. nav "Home / Desks / Rooms / Analytics".)
- **Never all-caps** for content — it's slower to read and blurs proper vs. common nouns.
  (Small all-caps is fine as a *visual* device for tiny eyebrow labels in specimens.)
- **Voice:** second person, warm and direct — speak to *you* ("your day", "your team").
  Friendly but professional; no hype, no jargon.
- **Concise & action-led:** buttons are verbs ("Reserve", "Book a space", "Sign in").
  Status is short and literal ("Free now", "Booked", "Starts soon", "Checked in").
- **No emoji** in product UI. Status is carried by color + a FontAwesome icon or a Tag dot.
- **Numbers stay human:** "14 of 32 desks", "+5 teammates today", "Free at 11:30 AM".

---

## Visual foundations

**Brand identity.** Robin's mark is a **bird** in deep **plum (`#550331`)** with a
**magenta (`#A81F6B`) belly**, set beside the **"Robin"** wordmark in the brand face.
Reversed (white) on plum/magenta backgrounds; the bird may stand alone as an app mark.

**Color.**
- **Primary / accent = magenta `#BE1F77`** (`--fill-primary`). This is the single brand
  action color — primary buttons, active nav, selection, links-to-action, focus.
  *(Note: the `#9747FF` purple that dominates raw Figma counts is Figma's component-
  annotation chrome, **not** a brand color — ignore it.)*
- **Plum `#550331`** is the deep brand ink (logo, dark gradient headers).
- **Status:** success green `#72B433`, warning gold `#FDBA31`, danger red `#E81C1C`,
  info/links blue `#2774C1`. Each has a pale `-1` tint for backgrounds.
- **Neutrals:** a warm gray ramp from `#F7F6F6` (page) → `#1F1F1F` (primary text).
  Surfaces are **white** on a **`#F7F6F6` canvas**. Text: primary `#1F1F1F`, body
  `#3E3D3D`, muted `#626060`, disabled `#8C8989`.
- Color is used **sparingly** — mostly neutral UI with magenta reserved for action and
  status tints reserved for feedback. Imagery, when present, is bright and human (offices,
  people); illustrations are flat and friendly. No heavy gradients except the plum→magenta
  brand wash on marketing/login headers.

**Typography.**
- **Brown LL** — a warm **geometric sans** — is the primary interface face (body *and*
  headings), not just display. Weights: Regular 400, Medium 500 (the workhorse emphasis
  weight), Bold 700 sparingly.
- Base UI text **14 / 22**; small **12 / 20**; large **16 / 24**. Headings H1 30 → H5 16,
  set in Medium with slightly tight tracking.
- **SF Pro Text** (Apple system stack) is a secondary UI face; **Space Mono** is the
  monospace used for codes/specs (desk IDs, times).
- **Fonts not bundled (flagged):** Brown LL is a commercial Lineto face and SF Pro Text is
  an Apple system face — neither is bundled. The `--font-brand` / `--font-ui` tokens keep
  pointing at the real family names and fall back to a geometric-grotesque system stack
  until the files are added. *Upload the real Brown LL `.woff2` files (add an `@font-face`
  in `tokens/fonts.css`) and the system becomes pixel-faithful.*

**Spacing & sizing.** 4px base grid (`4 · 8 · 12 · 16 · 20 · 24 · 32 · 48`). Control
heights **28 / 32 (default) / 40**. Layout favors generous whitespace and clear columns.

**Radius.** Small and consistent: **4px** default (buttons, inputs, tags), **8px** for
cards/popovers/modals, 2px hairline accents, pill for switches/count badges.

**Borders & elevation.** Robin leans on **1px hairline borders** (`#EEEDED`/`#DCDADA`)
for structure and reserves **soft, low-contrast shadows** for genuinely floating surfaces
(dropdowns, popovers, modals) — layered black alphas at 2–12%. Cards are
**white + hairline border**, often *no* shadow at rest; hoverable cards lift to a soft
`shadow-md` and drop their border.

**Interaction.**
- **Hover:** primary buttons lighten (magenta-6 → -5); outline/ghost controls shift their
  text + border to magenta; menu/list rows get a pale gray fill.
- **Press:** colors deepen (magenta-7); no scale/bounce.
- **Focus:** 2px magenta focus ring (`--focus-ring`, soft magenta-2 halo).
- **Selection:** pale magenta tint (`#FFF0F6`) with magenta-7 text.
- **Motion:** quick, functional `~150ms ease` transitions on color/border/shadow.
  Spinners rotate; nothing decorative loops. Respects `prefers-reduced-motion`.
- **Transparency/blur:** minimal — Robin is a crisp, opaque, light UI, not glassy.

---

## Iconography

Robin uses **FontAwesome** (Pro, solid weight) as its icon system — the Figma carries
~600 FA glyphs (calendar/clock/desk/people/status families dominate, fitting a booking
product). Icons sit in a **24px frame**, are **monochrome**, and fill with
**`currentColor`** so they inherit text/status color (gray `#626060` default; green/gold/
red/blue for status).

- **Bundled set:** a curated set of the most-used FA SVGs lives in `assets/icons/`
  (search, calendar, calendar-check, clock, user, users, bell, gear, status circles,
  star, edit, delete, more, …) — use these for offline/self-contained artifacts.
- **Full set:** for production or broad coverage, use FontAwesome. FA **Pro** matches the
  Figma 1:1; **FA 6 Free** (CDN) covers most glyphs as an accessible substitute — *flag*
  any Pro-only icon swapped for a Free near-match.
- **Emoji:** not used. **Unicode glyphs:** not used as icons. Status = color + FA icon /
  Tag dot.
- The brand **bird logo** is its own SVG (`assets/logo/robin-bird.svg`), not an icon-font glyph.

---

## Index — what's in here

**Foundations (root)**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `components/robin-components.css` — class-based component styling (token-driven).

**Specimen cards** (`guidelines/`, shown in the Design System tab)
- Colors: brand & accent, neutrals, status. Type: brand face, headings, body/caption/mono.
- Spacing: scale, radius & control heights, elevation. Brand: logo, iconography.

**Components** (React primitives — `window.RobinDesignSystem_2b6e7b`)
- `core/` — **Button, IconButton, Tag, Badge, Avatar / AvatarGroup**
- `forms/` — **Input + Field, Select, Checkbox, Radio + RadioGroup, Switch**
- `feedback/` — **Alert, Card**
- `navigation/` — **Tabs, Menu**
- Each has `<Name>.jsx` + `.d.ts` + `.prompt.md`; each group has a `@dsCard` demo HTML.

**UI kit** (`ui_kits/web-app/`)
- Click-through Robin workplace dashboard: **login → Home / Desks / Rooms**. See its
  `README.md`. Registered as a Starting Point.

**Assets** (`assets/`)
- `logo/` — Robin bird mark (+ source vectors). `icons/` — curated FontAwesome SVGs.

**Other**
- `SKILL.md` — makes this folder usable as an Agent Skill in Claude Code.

---

## Caveats
- **Fonts:** Brown LL & SF Pro Text are not bundled (licensed/system). The tokens point at
  the real families with a system-stack fallback; upload the files + add an `@font-face` in
  `tokens/fonts.css` to make the system pixel-faithful.
- The system is a faithful **reconstruction** from Figma, not a fork of Robin's production
  code; component internals are simplified, cosmetic recreations.
