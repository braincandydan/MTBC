# MVP: Responsive Design

**Tier**: Technical | **Status**: In progress

---

## Definition of Done

The site renders correctly and remains usable at all viewport sizes (320px to 1920px+). No horizontal scroll, touch targets are adequate, and layout adapts appropriately at breakpoints.

---

## Acceptance Criteria

- [ ] Tested at 320px, 375px, 768px, 1024px, 1280px, 1920px
- [ ] No horizontal overflow on any page
- [ ] Mobile nav (hamburger) works; desktop nav shows at md+
- [ ] Product grid: 1 col mobile, 2 sm, 3 lg, 4 xl
- [ ] Hero, Why, Carousel, Newsletter, Footer all stack/flow correctly on mobile
- [ ] Buttons and links have min 44x44px touch targets on mobile
- [ ] Product carousel arrows and dots work on mobile

---

## Evidence to Capture

- Screenshot: Mobile view (hero)
- Screenshot: Tablet view (product grid)
- Screenshot: Desktop view (full homepage)
- Note: Breakpoints used (sm, md, lg, xl)

---

## Discovery Notes

- Container uses `mx-auto px-4` for centering and padding
- Mobile hamburger uses Sheet component with `side="left"`
- Carousel arrows use responsive offsets: `-left-2 -right-2 md:-left-4 md:-right-4`
