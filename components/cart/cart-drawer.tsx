'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { CartItem } from './cart-item';
import { Skeleton } from '@/components/ui/skeleton';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const { cart, isLoading } = useCart();

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-4">
          {cart.lines.map((line) => (
            <CartItem key={line.id} line={line} />
          ))}
        </div>
      </div>

      <div className="border-t pt-4 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(cart.cost.subtotalAmount.amount)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>{formatPrice(cart.cost.totalTaxAmount.amount)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(cart.cost.totalAmount.amount)}</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href="/cart">View Cart</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
}

