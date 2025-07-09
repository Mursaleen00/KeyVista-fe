import PropertyCard from '@/components/cards/property-Card';
import Paragraph from '@/components/common/paragraph';
import Title from '@/components/common/title';
import React from 'react';
import { BuyPropertyData } from '@/constant/cards/buy-property-data';

const BuyPropertiesIndex = () => {
  return (
    <div className='grid gap-4 sm:px-9'>
      {/* Text section */}
      <div className='grid p-4 gap-4 pt-9'>
        <Title text='Buy Properties' />
        <Paragraph
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          className='flex text-lg'
        />
      </div>
      {/* Buy Property */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {BuyPropertyData.map((item, i) => (
          <PropertyCard
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default BuyPropertiesIndex;
