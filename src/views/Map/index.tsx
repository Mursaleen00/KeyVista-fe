'use client';
import Map from '@/components/map/map';
import ProductCardHorizontal from '@/components/cards/product-card-horizontal';
import { ProductCardHorizontalData } from '@/constant/cards/product-card-horizontal-data';
import * as React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MapView = () => {
  // Card Constant
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevIcon = () => {
    setCurrentIndex(ProductCardHorizontal =>
      ProductCardHorizontal === 0
        ? ProductCardHorizontalData.length - 1
        : ProductCardHorizontal - 1,
    );
  };

  const nextIcon = () => {
    setCurrentIndex(ProductCardHorizontal =>
      ProductCardHorizontal === ProductCardHorizontalData.length - 1
        ? 0
        : ProductCardHorizontal + 1,
    );
  };

  const currentData = ProductCardHorizontalData[currentIndex];
  // Card Constant
  return (
    <div>
      <Map height='100dvh' />
      <div className='relative w-full mx-auto overflow-hidden mt-20 flex justify-around'>
        <ProductCardHorizontal {...currentData} />
        {/* Left Button */}
        <button
          className='absolute top-1/2 left-4  translate-y-28 sm:-translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
          onClick={prevIcon}
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          className='absolute top-1/2 right-4 translate-y-28 sm:-translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
          onClick={nextIcon}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MapView;
