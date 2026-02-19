'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Trash2 } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { cart, isLoading, updateItem, removeItem } = useCart();

  if (isLoading) {
    return (
      <div className="container px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="w-20 h-20" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="container px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Your cart is empty</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.lines.map((line) => {
            const productImage = line.merchandise.product.images[0] || {
              url: '/placeholder-product.jpg',
              altText: line.merchandise.product.title,
            };

            return (
              <div
                key={line.id}
                className="flex gap-4 p-4 border rounded-lg"
              >
                <Link
                  href={`/products/${line.merchandise.product.handle}`}
                  className="relative w-24 h-24 flex-shrink-0"
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
                      className="font-semibold hover:underline"
                    >
                      {line.merchandise.product.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {line.merchandise.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateItem(line.id, line.quantity - 1)}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={line.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10);
                          if (!isNaN(val) && val > 0) {
                            updateItem(line.id, val);
                          }
                        }}
                        className="w-16 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateItem(line.id, line.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-semibold">
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
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-4 sticky top-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(cart.cost.subtotalAmount.amount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>{formatPrice(cart.cost.totalTaxAmount.amount)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(cart.cost.totalAmount.amount)}</span>
                </div>
              </div>
            </div>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

