'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import type { CartLineItem } from '@/types/shopify';
import { formatPrice } from '@/lib/utils';

interface CartItemProps {
  line: CartLineItem;
}

export function CartItem({ line }: CartItemProps) {
  const { updateItem, removeItem } = useCart();
  const productImage = line.merchandise.product.images[0] || {
    url: '/placeholder-product.jpg',
    altText: line.merchandise.product.title,
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(line.id);
    } else {
      updateItem(line.id, newQuantity);
    }
  };

  return (
    <div className="flex gap-4 py-4 border-b">
      <Link
        href={`/products/${line.merchandise.product.handle}`}
        className="relative w-20 h-20 flex-shrink-0"
      >
        <Image
          src={productImage.url}
          alt={productImage.altText || line.merchandise.product.title}
          fill
          className="object-cover rounded"
        />
      </Link>

      <div className="flex-1 space-y-2">
        <div>
          <Link
            href={`/products/${line.merchandise.product.handle}`}
            className="font-medium hover:underline"
          >
            {line.merchandise.product.title}
          </Link>
          <p className="text-sm text-muted-foreground">{line.merchandise.title}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(line.quantity - 1)}
            >
              -
            </Button>
            <Input
              type="number"
              value={line.quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val)) {
                  handleQuantityChange(val);
                }
              }}
              className="w-16 text-center"
              min="1"
            />
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => handleQuantityChange(line.quantity + 1)}
            >
              +
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">
              {formatPrice(line.cost.totalAmount.amount)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive"
              onClick={() => removeItem(line.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

