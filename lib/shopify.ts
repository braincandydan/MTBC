import type {
  Product,
  ProductVariant,
  Cart,
  CartLineItem,
  ProductsResponse,
  Image,
  Metafield,
} from '@/types/shopify';

// Uranus's Hot Sauce - Product data
const mockProducts: Product[] = [
  {
    id: 'gid://shopify/Product/1',
    title: "Uranus's Original",
    handle: 'uranus-original',
    description: "Our flagship sauce. A perfectly balanced blend of jalapeños, habaneros, and a secret blend of cosmic spices. Medium heat that's bold on flavor without overwhelming your taste buds. Great on everything from eggs to tacos to pizza.",
    descriptionHtml: '<p>Our flagship sauce. A perfectly balanced blend of jalapeños, habaneros, and a secret blend of cosmic spices. Medium heat that\'s bold on flavor without overwhelming your taste buds.</p><p><strong>Heat Level:</strong> Medium (3/5)</p><p><strong>Flavor:</strong> Tangy, smoky, with a hint of garlic</p><p>Great on everything from eggs to tacos to pizza.</p>',
    vendor: "Uranus's Hot Sauce",
    productType: 'Medium',
    tags: ['hot-sauce', 'medium', 'original', 'best-seller'],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
    images: [
      {
        id: 'img1',
        url: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=800',
        altText: "Uranus's Original Hot Sauce",
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/1-1',
        title: '5oz',
        price: { amount: '9.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '5oz' }],
        image: {
          id: 'img1',
          url: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=800',
          altText: "Uranus's Original - 5oz",
          width: 800,
          height: 600,
        },
        sku: 'UHS-ORIG-5',
      },
      {
        id: 'gid://shopify/ProductVariant/1-2',
        title: '10oz',
        price: { amount: '14.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '10oz' }],
        image: {
          id: 'img1-2',
          url: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=800',
          altText: "Uranus's Original - 10oz",
          width: 800,
          height: 600,
        },
        sku: 'UHS-ORIG-10',
      },
    ],
    metafields: [],
  },
  {
    id: 'gid://shopify/Product/2',
    title: 'Cosmic Inferno',
    handle: 'cosmic-inferno',
    description: "For heat seekers who dare to go further. Ghost peppers, scorpion peppers, and our proprietary cosmic blend create an inferno of flavor. Not for the faint of heart—this one's truly out of this world.",
    descriptionHtml: '<p>For heat seekers who dare to go further. Ghost peppers, scorpion peppers, and our proprietary cosmic blend create an inferno of flavor.</p><p><strong>Heat Level:</strong> Hot (5/5)</p><p><strong>Flavor:</strong> Intense, fruity, with a lingering burn</p><p>Not for the faint of heart—this one\'s truly out of this world.</p>',
    vendor: "Uranus's Hot Sauce",
    productType: 'Hot',
    tags: ['hot-sauce', 'hot', 'ghost-pepper', 'extreme'],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-18T10:00:00Z',
    images: [
      {
        id: 'img2',
        url: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800',
        altText: 'Cosmic Inferno Hot Sauce',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/2-1',
        title: '5oz',
        price: { amount: '11.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '5oz' }],
        image: {
          id: 'img2',
          url: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800',
          altText: 'Cosmic Inferno - 5oz',
          width: 800,
          height: 600,
        },
        sku: 'UHS-INFERNO-5',
      },
      {
        id: 'gid://shopify/ProductVariant/2-2',
        title: '10oz',
        price: { amount: '16.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '10oz' }],
        image: {
          id: 'img2-2',
          url: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800',
          altText: 'Cosmic Inferno - 10oz',
          width: 800,
          height: 600,
        },
        sku: 'UHS-INFERNO-10',
      },
    ],
    metafields: [],
  },
  {
    id: 'gid://shopify/Product/3',
    title: 'Nebula Mild',
    handle: 'nebula-mild',
    description: "Smooth, flavorful, and approachable. Our Nebula Mild brings the cosmic flavor without the cosmic heat. Perfect for everyday use—tacos, eggs, burgers, and more. A gateway sauce to the Uranus experience.",
    descriptionHtml: '<p>Smooth, flavorful, and approachable. Our Nebula Mild brings the cosmic flavor without the cosmic heat.</p><p><strong>Heat Level:</strong> Mild (1/5)</p><p><strong>Flavor:</strong> Sweet, tangy, with roasted pepper notes</p><p>Perfect for everyday use—tacos, eggs, burgers, and more. A gateway sauce to the Uranus experience.</p>',
    vendor: "Uranus's Hot Sauce",
    productType: 'Mild',
    tags: ['hot-sauce', 'mild', 'everyday', 'gateway'],
    createdAt: '2024-01-05T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    images: [
      {
        id: 'img3',
        url: 'https://images.unsplash.com/photo-1579963333765-b4129b3250fc?w=800',
        altText: 'Nebula Mild Hot Sauce',
        width: 800,
        height: 600,
      },
    ],
    variants: [
      {
        id: 'gid://shopify/ProductVariant/3-1',
        title: '5oz',
        price: { amount: '8.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '5oz' }],
        image: {
          id: 'img3',
          url: 'https://images.unsplash.com/photo-1579963333765-b4129b3250fc?w=800',
          altText: 'Nebula Mild - 5oz',
          width: 800,
          height: 600,
        },
        sku: 'UHS-NEBULA-5',
      },
      {
        id: 'gid://shopify/ProductVariant/3-2',
        title: '10oz',
        price: { amount: '12.99', currencyCode: 'USD' },
        availableForSale: true,
        selectedOptions: [{ name: 'Size', value: '10oz' }],
        image: {
          id: 'img3-2',
          url: 'https://images.unsplash.com/photo-1579963333765-b4129b3250fc?w=800',
          altText: 'Nebula Mild - 10oz',
          width: 800,
          height: 600,
        },
        sku: 'UHS-NEBULA-10',
      },
    ],
    metafields: [],
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

