'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Product, ProductVariant } from '@/types/shopify';
import { formatPrice } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem, cart, isLoading: cartLoading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedVariant) return;

    setIsAdding(true);
    try {
      await addItem(selectedVariant.id, quantity);
      // Reset quantity after adding
      setQuantity(1);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    } finally {
      setIsAdding(false);
    }
  };

  // Group variants by option
  const variantOptions = product.variants.reduce((acc, variant) => {
    variant.selectedOptions.forEach((option) => {
      if (!acc[option.name]) {
        acc[option.name] = new Set<string>();
      }
      acc[option.name].add(option.value);
    });
    return acc;
  }, {} as Record<string, Set<string>>);

  return (
    <div className="space-y-6">
      {/* Variant Selection */}
      {Object.entries(variantOptions).map(([optionName, values]) => (
        <div key={optionName}>
          <label className="block text-sm font-medium mb-2">{optionName}</label>
          <div className="flex flex-wrap gap-2">
            {Array.from(values).map((value) => {
              const variant = product.variants.find((v) =>
                v.selectedOptions.some(
                  (opt) => opt.name === optionName && opt.value === value
                )
              );
              const isSelected =
                selectedVariant?.selectedOptions.some(
                  (opt) => opt.name === optionName && opt.value === value
                ) || false;

              return (
                <Button
                  key={value}
                  variant={isSelected ? 'default' : 'outline'}
                  onClick={() => variant && setSelectedVariant(variant)}
                  className="min-w-[80px]"
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium mb-2">Quantity</label>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val) && val > 0) {
                setQuantity(val);
              }
            }}
            className="w-20 text-center"
            min="1"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>

      {/* Price Display */}
      {selectedVariant && (
        <div className="text-2xl font-bold">
          {formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
        </div>
      )}

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={isAdding || cartLoading || !selectedVariant?.availableForSale}
        className="w-full"
        size="lg"
      >
        {isAdding ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Adding...
          </>
        ) : (
          'Add to Cart'
        )}
      </Button>

      {!selectedVariant?.availableForSale && (
        <p className="text-sm text-destructive">This variant is currently unavailable</p>
      )}
    </div>
  );
}

