// src/components/properties/product-card-horizontal-carousel.tsx

// React Imports
import * as React from 'react';

// Ui Components Imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import ProductCardHorizontal from '../cards/product-card-horizontal';

// Constant Imports
import { ProductCardHorizontalData } from '@/constant/cards/product-card-horizontal-data';

export function ProductCardHorizontalCarousel() {
  return (
    // Carousel
    <Carousel className='w-full justify-center items-center'>
      {/* Carousel Content */}
      <CarouselContent className='flex gap-0'>
        {ProductCardHorizontalData.map((item, index) => (
          // Carousel Item
          <CarouselItem
            key={index}
            className='flex justify-center items-center'
          >
            {/* Product Card Horizontal */}
            <ProductCardHorizontal {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
