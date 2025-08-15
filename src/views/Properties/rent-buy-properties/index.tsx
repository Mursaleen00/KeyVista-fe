// src/views/Properties/rent-buy-properties/index.tsx

'use client';

// React Import
import { FC } from 'react';

// Component Import
import PropertyCard from '@/components/cards/property-Card';
import Paragraph from '@/components/common/paragraph';
import Title from '@/components/common/title';

// Constant Import
import {
  BuyPropertyData,
  RentPropertyData,
} from '@/constant/cards/rent-buy-property-data';

// Type Export
export type CategoryT = 'rent' | 'buy';

interface IProps {
  type: CategoryT;
}

const RentAndBuyPropertiesIndex: FC<IProps> = ({ type }) => {
  // Rent or Not
  const isRent = type === 'rent';

  return (
    <div className='grid gap-4 p-2 sm:px-5'>
      {/* Text section */}
      <div className='grid sm:px-3 gap-4'>
        {/* Title */}
        <Title text={isRent ? 'Rent Properties' : 'Buy Properties'} />
        {/* Description */}
        <Paragraph
          text={
            isRent
              ? 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
              : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has and typesetting industry. Lorem Ipsum has been the industry'
          }
          className='flex text-lg'
        />
      </div>

      {/* Rent & Buy Properties */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {(isRent ? RentPropertyData : BuyPropertyData).map((item, i) => (
          <PropertyCard
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default RentAndBuyPropertiesIndex;
