# MTBC Design System

Technical design system documentation for MTBC (MTB Components) e-commerce website.

## Color Tokens

### Brand Colors

The MTBC brand colors should be integrated into the Tailwind CSS theme. Add these to your `globals.css` or Tailwind config:

```css
/* MTBC Brand Colors */
--color-trail-black: #1A1A1A;
--color-trail-orange: #FF6B35;
--color-mud-brown: #4A4A4A;
--color-raw-aluminum: #C0C0C0;
--color-clean-white: #FFFFFF;
```

### Tailwind CSS Usage

For Tailwind CSS v4 (using @theme inline), add to `globals.css`:

```css
@theme inline {
  /* MTBC Brand Colors */
  --color-trail-black: #1A1A1A;
  --color-trail-orange: #FF6B35;
  --color-mud-brown: #4A4A4A;
  --color-raw-aluminum: #C0C0C0;
  --color-clean-white: #FFFFFF;
}
```

### Color Application

**Primary (Trail Black)**
- Use for: Headers, navigation, primary text, product titles
- Tailwind class: `text-trail-black`, `bg-trail-black`
- Usage: Main brand color, primary UI elements

**Accent (Trail Orange)**
- Use for: CTAs, highlights, important information, hover states
- Tailwind class: `text-trail-orange`, `bg-trail-orange`
- Usage: Buttons, links, badges, emphasis

**Secondary (Mud Brown)**
- Use for: Secondary text, borders, subtle backgrounds
- Tailwind class: `text-mud-brown`, `bg-mud-brown`
- Usage: Supporting elements, dividers

**Neutral (Raw Aluminum)**
- Use for: Technical specs, secondary UI elements, dividers
- Tailwind class: `text-raw-aluminum`, `bg-raw-aluminum`
- Usage: Technical information, subtle elements

**Background (Clean White)**
- Use for: Page backgrounds, card backgrounds, product photography
- Tailwind class: `bg-clean-white`
- Usage: Primary background color

### Semantic Colors

Map brand colors to semantic roles:

```css
/* Semantic Color Mapping */
--color-primary: var(--color-trail-black);
--color-primary-foreground: var(--color-clean-white);
--color-accent: var(--color-trail-orange);
--color-accent-foreground: var(--color-clean-white);
--color-secondary: var(--color-mud-brown);
--color-secondary-foreground: var(--color-clean-white);
```

## Typography

### Font Families

**Primary Font: Inter**
- Already configured via Next.js Google Fonts
- Variable: `--font-geist-sans` (Inter)
- Usage: All body text, headlines, UI elements

**Monospace Font: Geist Mono**
- Variable: `--font-geist-mono`
- Usage: Technical specs, SKUs, measurements, code

### Typography Scale

Use Tailwind's default type scale with Inter:

```css
/* Typography Scale */
.text-display { font-size: 3rem; line-height: 1.2; font-weight: 700; }      /* 48px */
.text-headline { font-size: 2.25rem; line-height: 1.3; font-weight: 700; }  /* 36px */
.text-subhead { font-size: 1.5rem; line-height: 1.4; font-weight: 600; }   /* 24px */
.text-title { font-size: 1.25rem; line-height: 1.5; font-weight: 500; }     /* 20px */
.text-body-lg { font-size: 1.125rem; line-height: 1.6; font-weight: 400; } /* 18px */
.text-body { font-size: 1rem; line-height: 1.6; font-weight: 400; }        /* 16px */
.text-body-sm { font-size: 0.875rem; line-height: 1.5; font-weight: 400; } /* 14px */
.text-caption { font-size: 0.75rem; line-height: 1.4; font-weight: 400; }  /* 12px */
```

### Tailwind Typography Classes

Use Tailwind's built-in typography utilities:

- Headlines: `text-4xl font-bold` (H1), `text-3xl font-bold` (H2), `text-2xl font-semibold` (H3)
- Body: `text-base` (default), `text-lg` (large), `text-sm` (small)
- Technical: `font-mono text-sm` (specs, SKUs)

## Spacing System

Use Tailwind's default spacing scale (4px base unit):

- `space-1` = 4px
- `space-2` = 8px
- `space-4` = 16px
- `space-6` = 24px
- `space-8` = 32px
- `space-12` = 48px
- `space-16` = 64px
- `space-24` = 96px

### Common Spacing Patterns

**Component Padding:**
- Cards: `p-6` (24px)
- Buttons: `px-6 py-3` (24px horizontal, 12px vertical)
- Inputs: `px-4 py-2` (16px horizontal, 8px vertical)

**Section Spacing:**
- Between sections: `mb-16` or `py-16` (64px)
- Between cards: `gap-6` (24px)
- Page padding: `px-4 md:px-6 lg:px-8` (responsive)

## Component Patterns

### Buttons

**Primary Button (Trail Orange)**
```tsx
<button className="bg-trail-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
  Add to Cart
</button>
```

**Secondary Button (Trail Black)**
```tsx
<button className="bg-trail-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
  Learn More
</button>
```

**Outline Button**
```tsx
<button className="border-2 border-trail-black text-trail-black px-6 py-3 rounded-lg font-semibold hover:bg-trail-black hover:text-white transition-colors">
  View Details
</button>
```

### Cards

**Product Card**
```tsx
<div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
  {/* Product content */}
</div>
```

**Feature Card**
```tsx
<div className="bg-clean-white rounded-lg p-8 border border-raw-aluminum">
  {/* Feature content */}
</div>
```

### Typography Components

**Product Title**
```tsx
<h3 className="text-xl font-semibold text-trail-black mb-2">
  MTBC Trail Flat Bar
</h3>
```

**Product Description**
```tsx
<p className="text-body text-mud-brown">
  Premium aluminum handlebar designed for trail riding...
</p>
```

**Technical Specs**
```tsx
<div className="font-mono text-sm text-raw-aluminum">
  SKU: MTBC-HB-FLAT-AL-780-BLK
</div>
```

## 3D Visualization Guidelines

### Product Viewer Component

**Container Sizing:**
- Desktop: `w-full h-[600px]` or `aspect-square`
- Mobile: `w-full h-[400px]`
- Maintain aspect ratio for consistent viewing

**Background:**
- Use `bg-clean-white` or `bg-gray-50` for neutral background
- Avoid busy backgrounds that distract from 3D model
- Consider subtle gradient: `bg-gradient-to-br from-gray-50 to-white`

**Controls:**
- Orbit controls: Enable rotate, zoom, pan
- Show loading state: Skeleton or spinner
- Error fallback: Display product image if 3D model fails

### Material Switching

**Color Variant Switcher:**
```tsx
<div className="flex gap-2">
  {colors.map(color => (
    <button
      key={color}
      className={`w-8 h-8 rounded-full border-2 ${
        selectedColor === color ? 'border-trail-orange' : 'border-gray-300'
      }`}
      style={{ backgroundColor: color }}
      onClick={() => switchColor(color)}
    />
  ))}
</div>
```

**Material Switcher:**
```tsx
<div className="flex gap-2">
  {materials.map(material => (
    <button
      key={material}
      className={`px-4 py-2 rounded-lg border ${
        selectedMaterial === material
          ? 'border-trail-orange bg-orange-50'
          : 'border-gray-300'
      }`}
    >
      {material}
    </button>
  ))}
</div>
```

### 3D Model Best Practices

**Model Requirements:**
- Format: GLB (binary glTF) preferred
- File size: < 5MB for web performance
- Optimization: Use Draco compression
- Scale: Normalized to 1 unit = 1 meter
- Origin: Centered at (0, 0, 0)

**Lighting:**
- Use environment lighting (HDRI or three-point setup)
- Avoid harsh shadows
- Ensure materials are visible in all lighting conditions

**Camera:**
- Default position: Slightly elevated, angled view
- Auto-fit to model bounds
- Smooth transitions between views

**Performance:**
- Lazy load 3D models
- Show loading states
- Optimize textures and geometry
- Use React.memo for viewer component

## Responsive Breakpoints

Use Tailwind's default breakpoints:

- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (extra large desktop)

### Common Responsive Patterns

**Product Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Product cards */}
</div>
```

**3D Viewer:**
```tsx
<div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
  {/* 3D viewer */}
</div>
```

**Typography:**
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
  MTBC Components
</h1>
```

## Animation Guidelines

### Transitions

Use Framer Motion for smooth animations:

**Page Transitions:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

**Hover Effects:**
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  {/* Interactive element */}
</motion.div>
```

### Animation Principles

- **Duration**: 200-300ms for UI interactions
- **Easing**: Use `ease-in-out` for natural motion
- **Performance**: Use `transform` and `opacity` for GPU acceleration
- **Accessibility**: Respect `prefers-reduced-motion`

### Common Animations

**Button Hover:**
- Scale: 1.02-1.05
- Shadow: Increase elevation
- Color: Slight darken/lighten

**Card Hover:**
- Elevation: Increase shadow
- Scale: 1.01-1.02 (subtle)
- Border: Highlight with accent color

**Loading States:**
- Skeleton screens for content
- Spinner for 3D models
- Progress indicators for long operations

## Accessibility

### Color Contrast

Ensure WCAG AA compliance:
- Text on Trail Black: Use Clean White (21:1 contrast)
- Text on Trail Orange: Use Clean White (4.5:1 contrast)
- Text on Mud Brown: Use Clean White (7:1 contrast)

### Focus States

**Visible Focus Indicators:**
```css
button:focus-visible {
  outline: 2px solid var(--color-trail-orange);
  outline-offset: 2px;
}
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Include alt text for all images
- Use ARIA labels for interactive 3D elements
- Ensure keyboard navigation works

## Implementation Checklist

- [ ] Add brand colors to Tailwind theme
- [ ] Configure typography scale
- [ ] Create button component variants
- [ ] Set up product card component
- [ ] Implement 3D viewer with material switching
- [ ] Add responsive breakpoints
- [ ] Configure animations with Framer Motion
- [ ] Test color contrast ratios
- [ ] Add focus states for accessibility
- [ ] Optimize 3D models for web

---

*Last Updated: 2024*

