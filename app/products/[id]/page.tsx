import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct } from '@/lib/shopify';
import { ProductDetailClient } from './product-detail-client';
import { formatPrice } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} - Uranus's Hot Sauce`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const primaryImage = product.images[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted relative flex items-center justify-center">
            {primaryImage ? (
              <Image
                src={primaryImage.url}
                alt={primaryImage.altText || product.title}
                fill
                className="object-cover"
              />
            ) : (
              <span className="text-muted-foreground text-sm">No image available</span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(0, 4).map((image, index) => (
                <div
                  key={image.id || index}
                  className="aspect-square relative rounded-lg overflow-hidden bg-muted"
                >
                  <Image
                    src={image.url}
                    alt={image.altText || `${product.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block text-xs font-bold text-[#FF6B35] uppercase tracking-wide mb-2">
              {product.productType} Heat
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-muted-foreground">
              {formatPrice(product.variants[0]?.price.amount || '0', product.variants[0]?.price.currencyCode || 'USD')}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground whitespace-pre-wrap">
              {product.description}
            </p>
          </div>

          <ProductDetailClient product={product} />
        </div>
      </div>
    </div>
  );
}

