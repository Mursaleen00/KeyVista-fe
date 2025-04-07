// src/app/views/Auth/favorites/index.tsx

import PropertyCard from '@/components/cards/property-Card';
import grayHouse from '@/../public/icons/grayHouse.svg';
import Title from '@/components/common/title';

// React Import

const FavoriteView = () => {
  return (
    <div className='grid p-3 sm:p-12 gap-y-9'>
      <Title text='Favorite Properties' />
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

export default FavoriteView;
