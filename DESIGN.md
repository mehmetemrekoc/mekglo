# Design System Documentation: MEK GLOBAL

## 1. Overview & Creative North Star: "The Architect of Motion"
This design system moves away from the generic "logistics template" to embrace a high-end, editorial aesthetic titled **"The Architect of Motion."** Logistics is often viewed as a back-office function; we transform it into a precision-engineered, global command center. 

The Creative North Star focuses on **Technical Authority**. We achieve this through a "Desktop-First" wide-screen approach that utilizes intentional asymmetry, overlapping structural elements, and a high-contrast palette. By pairing the utility of a technical sans-serif with the dramatic scale of editorial typography, we create a digital experience that feels as reliable as a steel container and as sophisticated as global trade algorithms.

---

## 2. Colors & Tonal Depth
Our palette is now rooted in a **light mode first** approach, emphasizing clarity and modern professionalism while retaining the metallic and industrial tones from the original vision.

### The "No-Line" Rule
**Standard 1px solid borders are strictly prohibited for sectioning.** To define boundaries between content blocks, designers must use background color shifts. For example, a main content area using `surface` should be separated from a sidebar or secondary module using `surface-container-low`. This creates a seamless, "molded" look rather than a fragmented grid of boxes.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the Material surface tiers to create "stacked" depth:
- **`surface-container-lowest` (#0e0e0e):** Use for the furthest background or "void" spaces.
- **`surface` (#131313):** The primary canvas for page content.
- **`surface-container-highest` (#353534):** Reserved for interactive cards or floating menus that need to "rise" toward the user.

### The "Glass & Gradient" Rule
To prevent the design from feeling flat or "default," incorporate **Glassmorphism** for floating overlays (e.g., Navigation Bars or Tooltips). Use semi-transparent `surface` colors with a `backdrop-blur` (12px–20px). 
- **Signature Gradient:** For primary CTAs and Hero accents, use a subtle linear gradient from `primary` (#afc6ff) to `primary_container` (#21488e) at a 135-degree angle. This adds a "metallic luster" that reflects the brand’s technical soul.

---

## 3. Typography: Technical Precision
We utilize a dual-font strategy to balance industrial strength with digital clarity.

- **Display & Headlines (Space Grotesk):** This is our "Technical Signature." Its wide apertures and geometric construction feel like high-end engineering. Use `display-lg` for hero statements with a tight `-2%` letter-spacing to create an authoritative, "locked-in" look.
- **Body & Labels (Inter):** Inter provides the "Reliability." It is optimized for data-heavy logistics interfaces. Use `body-md` for standard descriptions and `label-sm` (all caps, +5% tracking) for technical metadata or status tags.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering**, not structural lines.

- **The Layering Principle:** Instead of a shadow, place a `surface-container-low` card on a `surface` background. The subtle 2-3% difference in value provides a sophisticated, "quiet" elevation.
- **Ambient Shadows:** When a high-level component (like a modal) requires a shadow, use a large blur (40px+) with an extremely low opacity (6%). The shadow color must be a tinted version of `on-surface` (#e5e2e1) to mimic natural light passing through glass, rather than a muddy black drop shadow.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a "Ghost Border": use the `outline-variant` token at **15% opacity**. This provides a hint of structure without breaking the editorial flow.

---

## 5. Components

### Buttons: The Kinetic Strike
- **Primary:** High-contrast `primary` background with `on-primary` text. Use a subtle roundedness of `1` (or `0.125rem`) for a sharp, technical corner.
- **Secondary/Tertiary:** Avoid solid fills. Use a "Ghost Border" and `primary` text. On hover, transition to a subtle `surface-bright` background.

### Cards & Lists: The Negative Space Rule
- **No Dividers:** Forbid the use of horizontal lines to separate list items. Use the **Spacing Scale** (vertical white space) or alternating background shifts (e.g., `surface` to `surface-container-low`) to define rows.
- **Compact Layout:** Cards in this system should lean into the wide-screen format, but with a more compact feel as defined by the spacing scale. Use asymmetric padding (e.g., 32px top/bottom, 48px left/right) to create an editorial rhythm.

### Input Fields: Technical Clarity
- **Style:** Underlined or "Soft Box." Use `surface-container-high` for the input area. The focus state should not be a thick border, but a transition of the label to `primary` and a 2px `primary` bottom-bar "glow."

### Additional Component: The "Global Pulse" Map
- **Context:** Given MEK GLOBAL's operations, a custom map component is required.
- **Styling:** Use a monochromatic `surface-container-lowest` base map with `primary` (#afc6ff) data points and "Glassmorphism" info-cards floating over shipping lanes.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use a normal level of white space (or "dark space") to let high-contrast headings breathe, reflecting a more compact spacing setting.
- **Do** align technical data (tracking numbers, timestamps) to a strict monospaced feel using `label-md`.
- **Do** use `primary_fixed_dim` for subtle accents in data visualization to maintain professional restraint.

### Don’t:
- **Don't** use a standard 8px or 12px corner radius. This system demands the precision of a subtle roundedness of `1` (or `2px`) scale. Large rounds feel too "consumer-soft."
- **Don’t** use pure black (#000000). Use the defined `surface-container-lowest` to ensure depth is visible on professional-grade monitors.
- **Don’t** use "Alert Red" for anything other than critical system failures. For logistics warnings, lean into `tertiary` or `secondary` tones to maintain a calm, professional atmosphere.