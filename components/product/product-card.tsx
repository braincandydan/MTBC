'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/types/shopify';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const image = product.images[0] || {
    url: '/placeholder-product.jpg',
    altText: product.title,
  };
  const price = product.variants[0]?.price || { amount: '0.00', currencyCode: 'USD' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="group overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col border-2 border-gray-200 hover:border-[#FF6B35] bg-white">
        <Link href={`/products/${product.handle}`}>
          <CardHeader className="p-0">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <Image
                src={image.url}
                alt={image.altText || product.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-1">
            <div className="mb-2">
              <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wide">
                {product.productType}
              </span>
            </div>
            <h3 className="font-bold text-xl mb-3 line-clamp-2 text-black">{product.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {product.description}
            </p>
            <p className="text-2xl font-bold text-black">{formatPrice(price.amount, price.currencyCode)}</p>
          </CardContent>
        </Link>
        <CardFooter className="p-6 pt-0">
          <Button asChild className="w-full bg-black hover:bg-gray-800 text-white font-bold">
            <Link href={`/products/${product.handle}`}>View Sauce</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
