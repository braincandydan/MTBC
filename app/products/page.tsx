import { ProductGrid } from '@/components/product/product-grid';
import { getProducts } from '@/lib/shopify';

export const metadata = {
  title: 'Products - Shop3D',
  description: 'Browse our collection of premium products with 3D visualization',
};

export default async function ProductsPage() {
  const { products } = await getProducts(20);

  return (
    <div className="container px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
        <p className="text-muted-foreground">
          Discover our complete collection of premium products
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}

