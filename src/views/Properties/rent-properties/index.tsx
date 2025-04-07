import PropertyCard from '@/components/cards/property-Card';
import Paragraph from '@/components/common/paragraph';
import Title from '@/components/common/title';
import React from 'react';
import grayHouse from '@/../public/icons/grayHouse.svg';

const RentPropertiesIndex = () => {
  return (
    <div className='grid  gap-4 sm:px-9'>
      <div className='grid p-4 gap-4 pt-9'>
        <Title text='Rent Properties' />
        <Paragraph
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          className='flex text-lg'
        />
      </div>

      <PropertyCard
        icon={grayHouse}
        title='the city card'
        location='1011 Robson Street, Vancouver, BC V6E 1C2'
        thumbnail='/mouth'
        price='$ 8000'
        statusChip='rent'
        bathrooms=' 6 bathrooms'
        bedrooms='5 bedrooms'
        area='700 SQ.YD'
      />
    </div>
  );
};

export default RentPropertiesIndex;
