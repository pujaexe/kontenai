<!-- BEGIN:kontenai-design-rules -->
# Kontenai Design System Guidelines

When building or updating UI components for the Kontenai web app, always adhere to these SaaS-y design rules to ensure consistency:

1. **Color Palette & Contrast**:
   - Primary Accent: Use the custom `p1` color (`#555DFF`).
   - Muted Text: Use the custom `muted` color (`#5A6987`).
   - All colors must pass WCAG AA contrast standards.
   - Use soft blues for hover states and active selections (e.g., `bg-p1/10 text-p1`, `bg-p1/5`).

2. **Borders & Shadows**:
   - Avoid harsh borders. Use very soft slate colors (e.g., `border-slate-100`, `border-slate-200`).
   - Shadows should be soft and diffuse. Use `shadow-sm`, `shadow-lg`, and custom glow shadows (like `shadow-glow-p1` for active items).
   - Use `ring-1 ring-slate-900/5` for container outlines instead of solid borders.

3. **Shapes & Corners**:
   - Favor rounded corners over sharp edges.
   - Standard components (buttons, dropdowns, selects) should typically use `rounded-md` or `rounded-xl`.
   - Large cards or hero sections should use extra rounded corners (e.g., `rounded-[40px]` or `rounded-card-lg`).

4. **Spacing (Whitespace)**:
   - Embrace generous whitespace to avoid a cluttered UI.
   - Tables: Use large padding for cells (e.g., `px-6 py-5` for `TableCell`, `px-6 h-14` for `TableHead`).

5. **Icons**:
   - Use `lucide-react` for all icons. Do not use generic emojis for UI elements.
   - For alerts, use `Rocket`, `AlertTriangle`, `CheckCircle`, etc.

6. **Shadcn Component Overrides**:
   - When installing new Shadcn UI components, immediately customize them to remove the "default gray/stiff" look.
   - Dropdown, Select, and Radio Group components should use `focus:bg-p1/10 focus:text-p1` rather than `bg-accent`.
   - Badges in tables should use soft backgrounds and thin borders (e.g., `bg-emerald-50 text-emerald-700 border-emerald-200/60 rounded-full`).
<!-- END:kontenai-design-rules -->
