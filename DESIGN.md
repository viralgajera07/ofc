# Design Brief

## Direction

Premium Digital Agency — Dark-professional showcase with vivid violet primary and electric blue accent for high-impact conversion CTAs.

## Tone

Sophisticated, confident minimalism. Bold gradient accents on typography and interactive elements contrast with generous whitespace—no clutter, maximum hierarchy.

## Differentiation

Gradient-overlaid hero headlines and CTA buttons create memorable visual punch, while WhatsApp green floating button provides persistent lead-capture affordance throughout.

## Color Palette

| Token      | OKLCH           | Role                    |
|------------|-----------------|-------------------------|
| background | 0.13 0.012 260  | Deep charcoal (dark)    |
| foreground | 0.94 0.008 260  | Near-white text         |
| card       | 0.18 0.015 260  | Elevated surfaces       |
| primary    | 0.70 0.22 280   | Vivid violet accent     |
| accent     | 0.72 0.24 210   | Electric blue secondary |
| destructive| 0.65 0.19 22    | Alert/error red         |
| border     | 0.28 0.015 260  | Subtle separation       |
| success    | 0.60 0.18 150   | Green (WhatsApp button) |

## Typography

- Display: Space Grotesk — geometric, sharp headings; hero text with gradient; h1/h2/h3 at 5xl/4xl/3xl bold, tight tracking
- Body: DM Sans — clean paragraphs, labels, UI text; 16px base for high legibility
- Mono: Geist Mono — code blocks, form fields (if needed)
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight gradient-text`, Section headers `text-3xl md:text-5xl font-bold tracking-tight`, Body `text-base md:text-lg leading-relaxed`

## Elevation & Depth

Cards and buttons elevated via soft shadows (shadow-card, shadow-elevated). Hero section features subtle radial gradient overlay (charcoal → transparent). No heavy drop shadows; all depth is functional, not decorative.

## Structural Zones

| Zone    | Background       | Border              | Notes                              |
|---------|------------------|---------------------|------------------------------------|
| Header  | card (0.18)      | border (0.28)       | Sticky nav, subtle elevation       |
| Hero    | background (0.13)| —                   | Full-width, gradient overlay       |
| Content | background       | —                   | Alternating bg-card/bg-background  |
| CTA     | gradient-primary | —                   | Full width, high contrast          |
| Footer  | card (0.18)      | border-t            | Elevated section                   |

## Spacing & Rhythm

Generous vertical rhythm (gap-8 between sections, gap-4 within cards). Grid-based card layouts at md+ with 3-column service/portfolio grids. Mobile: single column with tight margins (px-4). Ample padding (p-8, p-6) creates breathing room.

## Component Patterns

- Buttons: Gradient background (primary→accent), rounded-lg, font-semibold, white text, hover brightness increase, CTA buttons span full-width on mobile
- Cards: rounded-lg, bg-card, shadow-card, border border-border/20, hover lift + shadow-elevated transition
- Badges: Rounded-full, px-3 py-1, small text, muted background with accent foreground
- Hero text: gradient-text class for primary headlines
- WhatsApp button: Fixed bottom-right, success (green) background, rounded-full, shadow-elevated, persistent across all pages

## Motion

- Entrance: fade-in 0.4s, slide-up 0.5s on card stack (stagger effect via nth-child)
- Hover: All interactive elements use transition-smooth (0.3s cubic-bezier), brightness increase on buttons, shadow elevation on cards
- Decorative: None; motion is functional only (entrance + interaction feedback)

## Constraints

- No horizontal scroll; viewport-width fixed at 1400px max
- White-space is a design element; no filler content
- All gradients are violet→blue (primary→accent), no rainbow or multi-color gradients
- Form inputs have subtle border highlight (border-primary/30) on focus, no outline ring
- Text contrast minimum AA+; all copy tested against background
- WhatsApp button never hidden; always visible in bottom-right corner at z-40

## Signature Detail

Gradient text on hero headlines combined with persistent WhatsApp green floating button creates a visual anchor for conversion action—premium sophistication meets lead-generation urgency.
