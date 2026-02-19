'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Cart } from '@/types/shopify';
import { getOrCreateCart, addToCart, updateCartLine, removeCartLine, getCart } from './shopify';

interface CartContextType {
  cart: Cart | null;
  isLoading: boolean;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshCart = useCallback(async () => {
    try {
      const currentCart = await getOrCreateCart();
      setCart(currentCart);
    } catch (error) {
      console.error('Error refreshing cart:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const addItem = useCallback(
    async (variantId: string, quantity: number = 1) => {
      if (!cart) return;

      try {
        const updatedCart = await addToCart(cart.id, variantId, quantity);
        setCart(updatedCart);
      } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
      }
    },
    [cart]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;

      try {
        const updatedCart = await updateCartLine(cart.id, lineId, quantity);
        setCart(updatedCart);
      } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;

      try {
        const updatedCart = await removeCartLine(cart.id, lineId);
        setCart(updatedCart);
      } catch (error) {
        console.error('Error removing cart item:', error);
        throw error;
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addItem,
        updateItem,
        removeItem,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

