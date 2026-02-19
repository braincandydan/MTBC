import { ProductGrid } from '@/components/product/product-grid';
import { getProducts } from '@/lib/shopify';

export const metadata = {
  title: 'Our Sauces - Uranus\'s Hot Sauce',
  description: 'Browse our collection of out-of-this-world hot sauces. From mild to inferno—find your perfect heat level.',
};

export default async function ProductsPage() {
  const { products } = await getProducts(20);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Sauces</h1>
        <p className="text-muted-foreground">
          Discover our complete collection of out-of-this-world hot sauces
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}

