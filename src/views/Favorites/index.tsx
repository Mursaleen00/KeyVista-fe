// src/app/views/Auth/favorites/index.tsx

import PropertyCard from '@/components/cards/property-Card';
import Title from '@/components/common/title';
import { RentPropertyData } from '@/constant/cards/rent-buy-property-data';

const FavoriteView = () => {
  return (
    <div className='grid p-3 sm:p-6 gap-y-9'>
      <Title text='Favorite Properties' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {RentPropertyData.map((item, i) => (
          <PropertyCard
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteView;
