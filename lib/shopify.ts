import type {
  Product,
  ProductVariant,
  Cart,
  CartLineItem,
  ProductsResponse,
  Image,
  Metafield,
} from '@/types/shopify';

// MTBC Product data - Mountain Bike Components
const mockProducts: Product[] = [
  // Handlebars
  {
    id: 'gid://shopify/Product/1',
    title: 'MTBC Trail Flat Bar',
    handle: 'mtbc-trail-flat-bar',
    description: 'Premium aluminum flat handlebar designed for trail riding. Features 9° backsweep and 5° upsweep for optimal control and comfort. Available in multiple widths and colors.',
    descriptionHtml: '<p>Premium aluminum flat handlebar designed for trail riding. Features 9° backsweep and 5° upsweep for optimal control and comfort. Available in multiple widths and colors.</p><p><strong>Specifications:</strong></p><ul><li>Material: 6061-T6 Aluminum</li><li>Clamp Diameter: 31.8mm</li><li>Backsweep: 9°</li><li>Upsweep: 5°</li><li>Rise: 0mm (flat)</li></ul>',
    vendor: 'MTBC',
    productType: 'Cockpit',
    tags: ['handlebar', 'cockpit', 'aluminum', 'trail'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
    images: [
      {
        id: 'img1',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        altText: 'MTBC Trail Flat Bar',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1-1',
        title: '780mm / Black',
        price: { amount: '45.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '780mm' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img1',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Bar - 780mm Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-FLAT-AL-780-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/1-2',
        title: '800mm / Black',
        price: { amount: '45.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '800mm' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img1-2',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Bar - 800mm Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-FLAT-AL-800-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/1-3',
        title: '780mm / Raw Aluminum',
        price: { amount: '50.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '780mm' },
          { name: 'Color', value: 'Raw Aluminum' },
        ],
        image: {
          id: 'img1-3',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Bar - 780mm Raw Aluminum',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-FLAT-AL-780-SLV',
      },
      {
        id: 'gid://shopify/ProductVariant/1-4',
        title: '800mm / Raw Aluminum',
        price: { amount: '50.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '800mm' },
          { name: 'Color', value: 'Raw Aluminum' },
        ],
        image: {
          id: 'img1-4',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Bar - 800mm Raw Aluminum',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-FLAT-AL-800-SLV',
      },
    ],
    metafields: [
      {
        namespace: 'custom',
        key: 'model_3d',
        value: '/models/keyboard.glb',
        type: 'file_reference',
      },
    ],
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'MTBC Trail Riser Bar',
    handle: 'mtbc-trail-riser-bar',
    description: 'Performance riser handlebar with multiple rise options. Engineered for aggressive trail riding with optimal ergonomics and control.',
    descriptionHtml: '<p>Performance riser handlebar with multiple rise options. Engineered for aggressive trail riding with optimal ergonomics and control.</p><p><strong>Specifications:</strong></p><ul><li>Material: 6061-T6 Aluminum</li><li>Clamp Diameter: 31.8mm</li><li>Backsweep: 9°</li><li>Upsweep: 5°</li><li>Rise Options: 20mm, 35mm, 50mm</li></ul>',
    vendor: 'MTBC',
    productType: 'Cockpit',
    tags: ['handlebar', 'cockpit', 'aluminum', 'riser', 'trail'],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-18T10:00:00Z',
    images: [
      {
        id: 'img2',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        altText: 'MTBC Trail Riser Bar',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/2-1',
        title: '800mm / 35mm Rise / Black',
        price: { amount: '55.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '800mm' },
          { name: 'Rise', value: '35mm' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img2',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Riser Bar - 800mm 35mm Rise Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-RISER-AL-800-35-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/2-2',
        title: '800mm / 50mm Rise / Black',
        price: { amount: '60.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '800mm' },
          { name: 'Rise', value: '50mm' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img2-2',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Riser Bar - 800mm 50mm Rise Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-RISER-AL-800-50-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/2-3',
        title: '780mm / 35mm Rise / Raw Aluminum',
        price: { amount: '60.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Width', value: '780mm' },
          { name: 'Rise', value: '35mm' },
          { name: 'Color', value: 'Raw Aluminum' },
        ],
        image: {
          id: 'img2-3',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Riser Bar - 780mm 35mm Rise Raw Aluminum',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-HB-RISER-AL-780-35-SLV',
      },
    ],
    metafields: [
      {
        namespace: 'custom',
        key: 'model_3d',
        value: '/models/keyboard.glb',
        type: 'file_reference',
      },
    ],
  },
  // Pedals
  {
    id: 'gid://shopify/Product/3',
    title: 'MTBC Trail Flat Pedal',
    handle: 'mtbc-trail-flat-pedal',
    description: 'Large platform flat pedals with replaceable pins for maximum grip. Sealed cartridge bearings for smooth rotation and durability.',
    descriptionHtml: '<p>Large platform flat pedals with replaceable pins for maximum grip. Sealed cartridge bearings for smooth rotation and durability.</p><p><strong>Specifications:</strong></p><ul><li>Platform Size: 105mm x 105mm</li><li>Thickness: 15mm</li><li>Pins: 10 per side (replaceable)</li><li>Axle: Chromoly Steel</li><li>Body: 6061-T6 Aluminum</li><li>Bearings: Sealed Cartridge</li></ul>',
    vendor: 'MTBC',
    productType: 'Pedals',
    tags: ['pedal', 'flat', 'aluminum', 'trail'],
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    images: [
      {
        id: 'img3',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        altText: 'MTBC Trail Flat Pedal',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/3-1',
        title: 'Black',
        price: { amount: '75.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img3',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Pedal - Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-PD-FLAT-BLK-STD',
      },
      {
        id: 'gid://shopify/ProductVariant/3-2',
        title: 'Raw Aluminum',
        price: { amount: '80.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Color', value: 'Raw Aluminum' },
        ],
        image: {
          id: 'img3-2',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Pedal - Raw Aluminum',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-PD-FLAT-SLV-STD',
      },
      {
        id: 'gid://shopify/ProductVariant/3-3',
        title: 'Orange',
        price: { amount: '85.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Color', value: 'Orange' },
        ],
        image: {
          id: 'img3-3',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Flat Pedal - Orange',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-PD-FLAT-ORG-STD',
      },
    ],
    metafields: [
      {
        namespace: 'custom',
        key: 'model_3d',
        value: '/models/mouse.glb',
        type: 'file_reference',
      },
    ],
  },
  {
    id: 'gid://shopify/Product/4',
    title: 'MTBC Trail Clipless Pedal',
    handle: 'mtbc-trail-clipless-pedal',
    description: 'Large platform clipless pedals with SPD compatibility. Perfect for enduro and XC riding with adjustable tension.',
    descriptionHtml: '<p>Large platform clipless pedals with SPD compatibility. Perfect for enduro and XC riding with adjustable tension.</p><p><strong>Specifications:</strong></p><ul><li>Cleat Compatibility: SPD</li><li>Tension Adjustment: Yes</li><li>Axle: Chromoly Steel</li><li>Body: 6061-T6 Aluminum</li><li>Bearings: Sealed Cartridge</li></ul>',
    vendor: 'MTBC',
    productType: 'Pedals',
    tags: ['pedal', 'clipless', 'spd', 'trail'],
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-19T10:00:00Z',
    images: [
      {
        id: 'img4',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        altText: 'MTBC Trail Clipless Pedal',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/4-1',
        title: 'Enduro / Black',
        price: { amount: '110.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Style', value: 'Enduro' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img4',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Clipless Pedal - Enduro Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-PD-CLIPLESS-ENDURO-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/4-2',
        title: 'XC / Black',
        price: { amount: '105.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Style', value: 'XC' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img4-2',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Clipless Pedal - XC Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-PD-CLIPLESS-XC-BLK',
      },
    ],
    metafields: [
      {
        namespace: 'custom',
        key: 'model_3d',
        value: '/models/mouse.glb',
        type: 'file_reference',
      },
    ],
  },
  // Stems
  {
    id: 'gid://shopify/Product/5',
    title: 'MTBC Trail Stem',
    handle: 'mtbc-trail-stem',
    description: 'Lightweight aluminum stem with multiple length and angle options. Precision machined for optimal fit and performance.',
    descriptionHtml: '<p>Lightweight aluminum stem with multiple length and angle options. Precision machined for optimal fit and performance.</p><p><strong>Specifications:</strong></p><ul><li>Material: 6061-T6 Aluminum</li><li>Clamp Diameter: 31.8mm</li><li>Steerer Diameter: 1-1/8" (28.6mm)</li><li>Weight: 120g - 180g (depending on length)</li></ul>',
    vendor: 'MTBC',
    productType: 'Cockpit',
    tags: ['stem', 'cockpit', 'aluminum', 'trail'],
    createdAt: '2024-01-08T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
    images: [
      {
        id: 'img5',
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
        altText: 'MTBC Trail Stem',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/5-1',
        title: '50mm / -6° / Black',
        price: { amount: '45.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Length', value: '50mm' },
          { name: 'Angle', value: '-6°' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img5',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Stem - 50mm -6° Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-ST-50-N6-AL-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/5-2',
        title: '60mm / -6° / Black',
        price: { amount: '50.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Length', value: '60mm' },
          { name: 'Angle', value: '-6°' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img5-2',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Stem - 60mm -6° Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-ST-60-N6-AL-BLK',
      },
      {
        id: 'gid://shopify/ProductVariant/5-3',
        title: '50mm / 0° / Raw Aluminum',
        price: { amount: '50.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Length', value: '50mm' },
          { name: 'Angle', value: '0°' },
          { name: 'Color', value: 'Raw Aluminum' },
        ],
        image: {
          id: 'img5-3',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Stem - 50mm 0° Raw Aluminum',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-ST-50-0-AL-SLV',
      },
      {
        id: 'gid://shopify/ProductVariant/5-4',
        title: '35mm / -10° / Black',
        price: { amount: '40.00', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [
          { name: 'Length', value: '35mm' },
          { name: 'Angle', value: '-10°' },
          { name: 'Color', value: 'Black' },
        ],
        image: {
          id: 'img5-4',
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          altText: 'MTBC Trail Stem - 35mm -10° Black',
          width: 800,
          height: 600,
        },
        sku: 'MTBC-ST-35-N10-AL-BLK',
      },
    ],
    metafields: [
      {
        namespace: 'custom',
        key: 'model_3d',
        value: '/models/mouse.glb',
        type: 'file_reference',
      },
    ],
  },
];

// Cart storage key
const CART_STORAGE_KEY = 'shopify_cart';

// Helper function to calculate cart totals
function calculateCartTotals(lines: CartLineItem[]): {
  subtotal: number;
  tax: number;
  total: number;
} {
  const subtotal = lines.reduce((sum, line) => {
    const price = parseFloat(line.cost.totalAmount.amount);
    return sum + price;
  }, 0);

  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    total: Math.round(total * 100) / 100,
  };
}

// Get all products
export async function getProducts(
  first: number = 10,
  after?: string
): Promise<ProductsResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const products = mockProducts.slice(0, first);
  const hasNextPage = mockProducts.length > first;
  const hasPreviousPage = false;

  return {
    products,
    hasNextPage,
    hasPreviousPage,
  };
}

// Get product by handle
export async function getProduct(handle: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const product = mockProducts.find((p) => p.handle === handle);
  return product || null;
}

// Get product by ID
export async function getProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const product = mockProducts.find((p) => p.id === id);
  return product || null;
}

// Create a new cart
export async function createCart(): Promise<Cart> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const cartId = `gid://shopify/Cart/${Date.now()}`;
  const cart: Cart = {
    id: cartId,
    checkoutUrl: `/checkout?cart=${cartId}`,
    totalQuantity: 0,
    cost: {
      totalAmount: { amount: '0.00', currencyCode: 'USD' },
      subtotalAmount: { amount: '0.00', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0.00', currencyCode: 'USD' },
      totalDutyAmount: { amount: '0.00', currencyCode: 'USD' },
    },
    lines: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  return cart;
}

// Get cart by ID
export async function getCart(cartId: string): Promise<Cart | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  if (typeof window === 'undefined') {
    return null;
  }

  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    const cart: Cart = JSON.parse(stored);
    if (cart.id === cartId) {
      return cart;
    }
  } catch (error) {
    console.error('Error parsing cart from localStorage:', error);
  }

  return null;
}

// Get or create cart
export async function getOrCreateCart(): Promise<Cart> {
  if (typeof window === 'undefined') {
    return createCart();
  }

  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (stored) {
    try {
      const cart: Cart = JSON.parse(stored);
      return cart;
    } catch (error) {
      console.error('Error parsing cart from localStorage:', error);
    }
  }

  return createCart();
}

// Add item to cart
export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number = 1
): Promise<Cart> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let cart = await getCart(cartId);
  if (!cart) {
    cart = await createCart();
  }

  // Find the variant and product
  let variant: ProductVariant | null = null;
  let product: Product | null = null;

  for (const p of mockProducts) {
    const foundVariant = p.variants.find((v) => v.id === variantId);
    if (foundVariant) {
      variant = foundVariant;
      product = p;
      break;
    }
  }

  if (!variant || !product) {
    throw new Error('Variant not found');
  }

  // Check if item already exists in cart
  const existingLineIndex = cart.lines.findIndex(
    (line) => line.merchandise.id === variantId
  );

  if (existingLineIndex >= 0) {
    // Update quantity
    const existingLine = cart.lines[existingLineIndex];
    const newQuantity = existingLine.quantity + quantity;
    cart.lines[existingLineIndex] = {
      ...existingLine,
      quantity: newQuantity,
      cost: {
        totalAmount: {
          amount: (parseFloat(variant.price.amount) * newQuantity).toFixed(2),
          currencyCode: variant.price.currencyCode,
        },
      },
    };
  } else {
    // Add new line item
    const lineItem: CartLineItem = {
      id: `gid://shopify/CartLine/${Date.now()}-${Math.random()}`,
      quantity,
      merchandise: {
        id: variant.id,
        title: variant.title,
        selectedOptions: variant.selectedOptions,
        product: {
          id: product.id,
          title: product.title,
          handle: product.handle,
          images: product.images,
        },
        price: variant.price,
      },
      cost: {
        totalAmount: {
          amount: (parseFloat(variant.price.amount) * quantity).toFixed(2),
          currencyCode: variant.price.currencyCode,
        },
      },
    };
    cart.lines.push(lineItem);
  }

  // Recalculate totals
  const totals = calculateCartTotals(cart.lines);
  cart.totalQuantity = cart.lines.reduce((sum, line) => sum + line.quantity, 0);
  cart.cost = {
    totalAmount: { amount: totals.total.toFixed(2), currencyCode: 'USD' },
    subtotalAmount: { amount: totals.subtotal.toFixed(2), currencyCode: 'USD' },
    totalTaxAmount: { amount: totals.tax.toFixed(2), currencyCode: 'USD' },
    totalDutyAmount: { amount: '0.00', currencyCode: 'USD' },
  };
  cart.updatedAt = new Date().toISOString();

  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  return cart;
}

// Update cart line item
export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<Cart> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const cart = await getCart(cartId);
  if (!cart) {
    throw new Error('Cart not found');
  }

  if (quantity <= 0) {
    // Remove item
    cart.lines = cart.lines.filter((line) => line.id !== lineId);
  } else {
    // Update quantity
    const lineIndex = cart.lines.findIndex((line) => line.id === lineId);
    if (lineIndex >= 0) {
      const line = cart.lines[lineIndex];
      const unitPrice = parseFloat(line.merchandise.price.amount);
      cart.lines[lineIndex] = {
        ...line,
        quantity,
        cost: {
          totalAmount: {
            amount: (unitPrice * quantity).toFixed(2),
            currencyCode: line.merchandise.price.currencyCode,
          },
        },
      };
    }
  }

  // Recalculate totals
  const totals = calculateCartTotals(cart.lines);
  cart.totalQuantity = cart.lines.reduce((sum, line) => sum + line.quantity, 0);
  cart.cost = {
    totalAmount: { amount: totals.total.toFixed(2), currencyCode: 'USD' },
    subtotalAmount: { amount: totals.subtotal.toFixed(2), currencyCode: 'USD' },
    totalTaxAmount: { amount: totals.tax.toFixed(2), currencyCode: 'USD' },
    totalDutyAmount: { amount: '0.00', currencyCode: 'USD' },
  };
  cart.updatedAt = new Date().toISOString();

  // Save to localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }

  return cart;
}

// Remove line item from cart
export async function removeCartLine(
  cartId: string,
  lineId: string
): Promise<Cart> {
  return updateCartLine(cartId, lineId, 0);
}

