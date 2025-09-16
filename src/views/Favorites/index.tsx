// src/app/views/Auth/favorites/index.tsx
// 'use client';
// import PropertyCard from '@/components/cards/property-Card';
// import Title from '@/components/common/title';
// import { RentPropertyData } from '@/constant/cards/rent-buy-property-data';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// import NoFavoriteProperties from '@/components/common/no-favorite-properties';

import PropertyCard from '@/components/cards/property-Card';
import Title from '@/components/common/title';
import { RentPropertyData } from '@/constant/cards/rent-buy-property-data';

const FavoriteView = () => {
  // likedProducts
  // const likedProducts = useSelector((state: RootState) => state.property) || [];
  // const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    // <div>
    //   <Title
    //     text='Favorite Properties'
    //     className='p-5 md:px-9 xl:px-20 md:text-3xl'
    //   />
    //   {RentPropertyData.length === 0 ? (
    //     <NoFavoriteProperties />
    //   ) : (
    //     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-5 xl:px-10'>
    //       {RentPropertyData.map(item => (
    //         <PropertyCard
    //           key={item.id}
    //           {...item}
    //         />
    //       ))}
    //     </div>
    //   )}
    // </div>
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
