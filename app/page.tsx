import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCarousel } from '@/components/product/product-carousel';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { getProducts } from '@/lib/shopify';

export default async function HomePage() {
  const { products } = await getProducts(3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#1a0a2e] via-[#2d1b4e] to-gray-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Uranus&apos;s Hot Sauce
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#FDBA74] font-medium">
              Out of This World Hot Sauce
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Hand-crafted small-batch sauces with cosmic flavor. From mild to inferno—we&apos;ve got the heat level for every heat seeker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white font-bold px-8 py-6 text-lg"
              >
                <Link href="/products">Shop Sauces</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg"
              >
                <Link href="/products">View All Flavors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Hot Sauce */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
              Why Our Hot Sauce?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We&apos;re not just another hot sauce brand. We&apos;re on a mission to bring cosmic flavor to your table.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">🌶️</div>
              <h3 className="text-xl font-bold text-black">Cosmic Heat</h3>
              <p className="text-gray-600">
                Crafted with peppers that are literally out of this world. Hand-picked peppers, otherworldly flavor.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">🛸</div>
              <h3 className="text-xl font-bold text-black">Small Batch</h3>
              <p className="text-gray-600">
                Made in small batches for maximum flavor and quality. No mass production—just craft sauce.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-black">Zero Gravity Flavor</h3>
              <p className="text-gray-600">
                Bold, balanced flavor that doesn&apos;t weigh you down. Perfect on everything from eggs to tacos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-16 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
              Our Flavors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From mild to inferno—find your perfect heat level
            </p>
          </div>
          <ProductCarousel products={products} />
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-6"
            >
              <Link href="/products">View All Sauces</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pre-Footer: Newsletter */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Join the Launch Crew
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to know about new flavors, cosmic deals, and exclusive heat. No spam—just sauce.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
