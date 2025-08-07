// src/views/Map/index.tsx
'use client';

// Import Components
import Map from '@/components/map/map';
import { ProductCardHorizontalCarousel } from '@/components/properties/product-card-horizontal-carousel';

// Import React
import * as React from 'react';

const MapView = () => {
  return (
    <div className='flex flex-col gap-y-10 w-full justify-center items-center'>
      {/* Map */}
      <Map height='100dvh' />

      {/* ProductCardHorizontalCarousel */}
      <div className='flex w-full justify-center items-center'>
        <ProductCardHorizontalCarousel />
      </div>
    </div>
  );
};

export default MapView;
