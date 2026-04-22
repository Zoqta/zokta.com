# Design System Specification: The Luminescent Architect

## 1. Overview & Creative North Star
This design system is built upon the **"Luminescent Architect"** North Star. For a developer platform like Zoqta, we must move beyond the "standard SaaS dashboard." We are not just building tools; we are building an environment that feels like a high-end IDE meets a luxury editorial magazine.

The aesthetic prioritizes **Tonal Depth** over structural rigidity. By utilizing intentional asymmetry, overlapping modular cards, and a sophisticated interplay between deep matte surfaces and vibrant glassmorphic accents, we create a UI that feels both infinitely powerful and deceptively simple. We break the "template" look by treating the screen as a 3D space where light (gradients) and density (surface tiers) guide the eye, rather than boxes and lines.

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, obsidian core (`background: #0b0e14`), punctuated by high-energy pulses of electric blue (`primary`), violet (`secondary`), and cyan (`tertiary`).

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders for sectioning or layout. Boundaries must be defined solely through:
- **Background Color Shifts:** Placing a `surface-container-high` module inside a `surface-container-low` parent.
- **Tonal Transitions:** Using soft shifts in saturation to indicate where one functional area ends and another begins.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create "nested" depth:
- **`surface-container-lowest` (#000000):** Use for the deepest recesses, like sidebars or background utility panels.
- **`surface-container` (#161a21):** The standard "canvas" for your main content.
- **`surface-container-highest` (#22262f):** Use for floating elements or active states that need to "pop" toward the user.

### The "Glass & Gradient" Rule
To achieve a "high-tech" soul, main CTAs and hero areas should utilize subtle gradients.
- **Signature Gradient:** A linear transition from `primary` (#85adff) to `secondary` (#c180ff) at a 135-degree angle.
- **Glassmorphism:** For floating overlays (modals, dropdowns, or hovering tooltips), use a semi-transparent `surface-variant` with a `backdrop-filter: blur(12px)`. This integrates the component into the environment rather than "pasting" it on top.

## 3. Typography
We utilize **Inter** to maintain a clean, high-precision developer aesthetic. The hierarchy is designed to feel "Editorial"—where data is treated with as much respect as a headline.

- **Display Scale (`display-lg` to `display-sm`):** Reserved for high-impact landing moments or massive data visualizations. These should feel authoritative and command the space.
- **Headline & Title Scale:** Used for modular card headers. Pair a `headline-sm` with a `label-md` in `on-surface-variant` to create a sophisticated, "spec-sheet" look.
- **Body & Label Scale:** The workhorses. `body-md` is your default for documentation and code-adjacent text. `label-sm` is strictly for metadata, timestamps, and micro-interactions.

**Editorial Tip:** Use `letter-spacing: -0.02em` on Headlines to create a tighter, more premium "ink-on-paper" feel.

## 4. Elevation & Depth
In this design system, elevation is a product of light and layering, not shadows alone.

- **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` section. The human eye will perceive the lower-value (darker) area as recessed and the higher-value (lighter) area as lifted.
- **Ambient Shadows:** When a true "floating" effect is required (e.g., a command palette), use an extra-diffused shadow. 
    - *Shadow Settings:* `0px 24px 48px rgba(0, 0, 0, 0.4)`. The shadow should feel like ambient light being blocked, never a harsh outline.
- **The "Ghost Border" Fallback:** If a border is mission-critical for accessibility, use a "Ghost Border." Apply the `outline-variant` token at **15% opacity**. It should be felt, not seen.
- **Surface Tint:** Use `surface-tint` (#85adff) at a 5% overlay on `surface-container-highest` to give "active" modules a subtle, high-tech radioactive glow.

## 5. Components

### Buttons
- **Primary:** Use the Signature Gradient (Primary to Secondary) with `on-primary` text. Use `xl` (0.75rem) roundedness.
- **Secondary:** Transparent background with a `Ghost Border`. Text color should be `primary`.
- **Tertiary:** No background, no border. Use for low-priority actions like "Cancel."

### Cards (Modular Layouts)
- **Visuals:** Use `surface-container-low` with `xl` (0.75rem) roundedness. 
- **Structure:** Forbid dividers. Use 24px of internal padding (from your spacing scale) to separate the header from the body content.

### Input Fields
- **State:** Inactive inputs use `surface-container-highest`. 
- **Focus:** Transition the "Ghost Border" to 100% opacity using the `tertiary` (#7de9ff) color. Add a subtle `tertiary` outer glow (4px blur) to simulate a "powered-on" hardware state.

### Code Blocks & Data Lists
- **Forbid:** Do not use horizontal lines between list items. Use alternating background tints or subtle 8px vertical gaps.
- **Status Indicators:** Use `error` (#ff716c) for critical failures, but wrap them in an `error_container` with 10% opacity to soften the "alarm" and maintain sophistication.

### Chips
- **Selection:** Use `secondary_container` with `on_secondary_container` text.
- **Roundedness:** Always use `full` (9999px) for chips to contrast against the `xl` modular cards.

## 6. Do's and Don'ts

### Do
- **Do** embrace negative space. High-end tools need room to breathe.
- **Do** use `on-surface-variant` for secondary text to create a clear visual hierarchy against the `on-surface` primary content.
- **Do** use the `tertiary` (cyan) accent for "success" or "active terminal" states to maintain the high-tech vibe.

### Don't
- **Don't** use pure white (#FFFFFF). It will break the dark-mode immersion. Always use `on-background` (#ecedf6).
- **Don't** use 90-degree sharp corners. The `DEFAULT` (0.25rem) to `xl` (0.75rem) scale is mandatory to maintain the "Soft Glassmorphism" feel.
- **Don't** use high-contrast dividers. If you feel the need for a line, increase your padding instead.