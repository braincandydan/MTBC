import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/product/product-grid';
import { getProducts } from '@/lib/shopify';

export default async function HomePage() {
  const { products } = await getProducts(8);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Fox Racing Inspired */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Built for the Trail
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
              Premium mountain bike components engineered for performance
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Handlebars, pedals, stems, and more. Every component designed to handle the toughest trails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold px-8 py-6 text-lg">
                <Link href="/products">Shop Components</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">Mountain Bike Components</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Precision-engineered components for serious trail riders
            </p>
          </div>
          <ProductGrid products={products} />
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-6">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4 font-bold text-[#FF6B35]">⚡</div>
              <h3 className="text-xl font-bold text-black">Performance First</h3>
              <p className="text-gray-600">
                Every component engineered for maximum trail performance
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4 font-bold text-[#FF6B35]">🔧</div>
              <h3 className="text-xl font-bold text-black">Precision Engineering</h3>
              <p className="text-gray-600">
                Built to exacting standards with premium materials
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4 font-bold text-[#FF6B35]">🏔️</div>
              <h3 className="text-xl font-bold text-black">Trail Tested</h3>
              <p className="text-gray-600">
                Designed and tested on the toughest mountain trails
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
