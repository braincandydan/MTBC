# MTBC - Mountain Bike Components

A modern e-commerce store for MTBC (MTB Components), a premium mountain bike component brand. Built with Next.js 16, featuring immersive 3D product visualization using React Three Fiber.

## About MTBC

**MTBC (MTB Components)** - "Built for the Trail"

MTBC is a premium mountain bike component brand dedicated to creating high-quality, performance-focused parts for serious trail riders. This e-commerce platform showcases our complete line of mountain bike components with interactive 3D visualization.

**Product Categories:**
- Cockpit (Handlebars, Stems, Grips)
- Seating (Saddles, Dropper Posts)
- Pedals (Flat, Clipless)
- Wheels (Wheelsets, Rims)
- Braking (Brakes, Rotors)
- Drivetrain (Chainrings, Cassettes)

For complete brand guidelines and product catalog, see the [documentation](./docs/) directory.

## Features

- 🎯 **3D Product Visualization** - Interactive 3D models with orbit controls
- 🛒 **Full E-commerce Flow** - Browse, view, cart, and checkout
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui
- ⚡ **Performance** - Server Components, optimized images, lazy loading
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎭 **Animations** - Smooth transitions with Framer Motion
- 🛡️ **Type Safety** - Full TypeScript support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **3D Rendering**: React Three Fiber, Three.js, Drei
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **E-commerce**: Mock Shopify Storefront API

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── products/           # Product pages
│   ├── cart/               # Cart page
│   └── checkout/           # Checkout page
├── components/
│   ├── 3d/                 # 3D components (R3F)
│   ├── cart/               # Cart components
│   ├── layout/             # Layout components
│   ├── product/            # Product components
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utilities and API clients
│   ├── shopify.ts          # Mock Shopify API
│   └── cart-context.tsx    # Cart state management
├── types/                  # TypeScript type definitions
├── docs/                   # Brand documentation
│   ├── BRAND_GUIDELINES.md # Brand identity and guidelines
│   ├── PRODUCT_CATALOG.md  # Complete product specifications
│   └── DESIGN_SYSTEM.md    # Design tokens and patterns
└── public/
    └── models/             # 3D model files (GLTF/GLB)
```

## Key Features

### 3D Product Viewer
- Interactive 3D models with orbit controls (rotate, zoom, pan)
- Automatic model centering and scaling
- Fallback to product images if 3D model fails
- Loading states and error handling

### Shopping Cart
- Persistent cart using localStorage
- Real-time cart updates
- Cart drawer for quick access
- Full cart page with quantity management

### Product Pages
- Product listing with grid layout
- Product detail pages with 3D viewer
- Variant selection (size, color, etc.)
- Add to cart functionality

### Checkout
- Shipping information form
- Payment form (mock)
- Order summary
- Responsive design

## Development

### Adding Products

Edit `lib/shopify.ts` to add more MTBC products. Each product can have:
- Multiple variants (size, color, material, etc.)
- Images
- 3D model URL in metafields (namespace: `custom`, key: `model_3d`)

See [PRODUCT_CATALOG.md](./docs/PRODUCT_CATALOG.md) for complete product specifications and SKU naming conventions.

### Adding 3D Models

1. Place GLTF/GLB files in `public/models/`
2. Reference them in product metafields:
```typescript
metafields: [
  {
    namespace: 'custom',
    key: 'model_3d',
    value: '/models/your-model.glb',
    type: 'file_reference',
  },
]
```

### Environment Variables

Currently using mock data. To integrate with real Shopify:

```env
SHOPIFY_STOREFRONT_API_URL=
SHOPIFY_STOREFRONT_ACCESS_TOKEN=
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Deploy

## Brand Documentation

Complete brand documentation is available in the `docs/` directory:

- **[BRAND_GUIDELINES.md](./docs/BRAND_GUIDELINES.md)** - Brand identity, colors, typography, voice, and visual identity
- **[PRODUCT_CATALOG.md](./docs/PRODUCT_CATALOG.md)** - Complete product line specifications, variants, and SKU naming
- **[DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)** - Technical design tokens, component patterns, and 3D visualization guidelines

## License

MIT
