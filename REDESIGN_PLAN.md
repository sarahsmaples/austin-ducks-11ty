# Austin Ducks Website Redesign Plan

## Goal
Restyle the Austin Ducks website to match The Mosaic Workshop's design aesthetic: warm, modern, minimalist with soft earthy colors and clean typography.

---

## Design System (Based on The Mosaic Workshop)

### Color Palette
- **Mint/Sage Green:** `hsl(154, 29%, 72%)` - Primary accent
- **Warm Peach:** `hsl(17, 84%, 83%)` - Secondary accent
- **Deep Navy:** `hsl(193, 88%, 16%)` - Dark accent/text
- **Gold/Mustard:** `hsl(47, 61%, 45%)` - Highlights/buttons
- **White:** `#ffffff` - Primary background
- **Off-white:** `#f9f7f4` - Secondary background

### Typography
- **Headings:** Keep Bangers font for brand consistency, add slight rotation for playfulness
- **Body:** Clean sans-serif (Montserrat already in use - good choice)
- **Style:** Generous line-height, readable sizes

### Design Principles
- Rounded corners (12px) on cards/buttons
- No harsh shadows - clean, flat design
- Generous whitespace/padding
- Color-blocked sections
- Subtle hover animations

---

## Files to Modify

### 1. CSS Stylesheet
**File:** `src/assets/css/style.css`

### 2. Header Template
**File:** `src/_includes/header.njk`

### 3. Footer Template
**File:** `src/_includes/footer.njk`

### 4. Homepage
**File:** `src/index.njk`

### 5. Base Layout (fonts)
**File:** `src/_layouts/base.njk`

---

## Implementation Steps

### Phase 1: CSS Variables & Base Styles
1. Add CSS custom properties for the new color palette at the top of style.css
2. Update base typography styles (body, headings, links)
3. Update button styles with new colors and rounded corners

### Phase 2: Header Redesign
1. Simplify header structure - cleaner navigation
2. Add frosted glass effect (backdrop-filter blur)
3. Update colors to navy/white scheme
4. Modernize mobile hamburger menu
5. Style "Book Now" button with gold accent

### Phase 3: Hero Section
1. Keep existing slider but update overlay styling
2. Update title typography (add slight rotation like Mosaic Workshop)
3. Soften the wave transition
4. Update text colors for better contrast

### Phase 4: Info Cards Section (Partially Done)
1. Cards already updated with peach/mint/navy colors
2. Fine-tune padding and typography
3. Ensure responsive behavior is smooth

### Phase 5: About Section
1. Change background to white or off-white
2. Update section header styling
3. Add color accent to pretitle
4. Improve image presentation

### Phase 6: Videos Section
1. Update background color (remove blue, use white or mint)
2. Restyle section headers
3. Clean up video container styling

### Phase 7: Reviews Section
1. Redesign review cards with new color palette
2. Update carousel styling
3. Improve card layout and typography

### Phase 8: Contact Section
1. Update background and colors
2. Modernize form styling
3. Update contact info card styling

### Phase 9: Footer Redesign
1. Update to navy background with white text
2. Simplify layout
3. Style social icons in colored circles (like Mosaic Workshop)
4. Clean typography

### Phase 10: Final Polish
1. Review all hover states
2. Ensure consistent spacing throughout
3. Test responsive breakpoints
4. Remove unused CSS

---

## Estimated Changes Summary

| Component | Complexity | Description |
|-----------|------------|-------------|
| CSS Variables | Low | Add color palette variables |
| Header | Medium | New blur effect, simplified nav, colors |
| Hero | Low | Typography tweaks, overlay colors |
| Info Cards | Done | Already updated |
| About | Low | Background, typography updates |
| Videos | Low | Background color, headers |
| Reviews | Medium | Card redesign, carousel styling |
| Contact | Medium | Form styling, layout updates |
| Footer | Medium | Full color/layout update |

---

## Notes
- Will preserve existing functionality (sliders, forms, maps)
- Focus on CSS changes to minimize breaking changes
- Some HTML structure updates needed for header/footer
- Keep Bangers font for brand identity
