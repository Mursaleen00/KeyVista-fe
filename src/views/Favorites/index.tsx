// src/app/views/Auth/favorites/index.tsx

import RentCard from '@/components/cards/rent-Card';
import Title from '@/components/common/title';

// React Import

const FavoriteView = () => {
  return (
    <div className='grid p-3 sm:p-12 gap-y-9'>
      <Title text='Favorite Properties' />
      <RentCard />
    </div>
  );
};

export default FavoriteView;
