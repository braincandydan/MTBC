import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct } from '@/lib/shopify';
import { ProductViewer } from '@/components/3d/product-viewer';
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
    title: `${product.title} - Shop3D`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const modelMetafield = product.metafields.find(
    (m) => m.namespace === 'custom' && m.key === 'model_3d'
  );
  const modelUrl = modelMetafield?.value || null;
  const primaryImage = product.images[0];

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images / 3D Viewer */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted">
            {modelUrl ? (
              <ProductViewer
                modelUrl={modelUrl}
                fallbackImage={primaryImage?.url}
                className="w-full h-full"
              />
            ) : (
              <div className="relative w-full h-full">
                {primaryImage && (
                  <Image
                    src={primaryImage.url}
                    alt={primaryImage.altText || product.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
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

