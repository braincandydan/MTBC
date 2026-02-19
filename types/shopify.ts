// Shopify Storefront API Type Definitions

export interface Metafield {
  namespace: string;
  key: string;
  value: string;
  type: string;
}

export interface Image {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image: Image | null;
  sku: string | null;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  images: Image[];
  variants: ProductVariant[];
  metafields: Metafield[];
  tags: string[];
  vendor: string;
  productType: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartLineItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: {
      id: string;
      title: string;
      handle: string;
      images: Image[];
    };
    price: {
      amount: string;
      currencyCode: string;
    };
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
    subtotalAmount: {
      amount: string;
      currencyCode: string;
    };
    totalTaxAmount: {
      amount: string;
      currencyCode: string;
    };
    totalDutyAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: CartLineItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

