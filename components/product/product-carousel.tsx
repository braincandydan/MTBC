'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '@/types/shopify';
import { ProductCard } from './product-card';
import { Button } from '@/components/ui/button';

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < products.length - 1;

  const goPrev = () => {
    if (canGoPrev) setCurrentIndex((i) => i - 1);
  };

  const goNext = () => {
    if (canGoNext) setCurrentIndex((i) => i + 1);
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Navigation arrows */}
      <div className="absolute -left-2 -right-2 md:-left-4 md:-right-4 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-auto">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 hover:border-accent"
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Previous product"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 hover:border-accent"
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Next product"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Carousel container */}
      <div ref={containerRef} className="overflow-hidden px-2 md:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md mx-auto">
              <ProductCard product={products[currentIndex]} index={0} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-accent scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
