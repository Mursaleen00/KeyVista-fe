// src/app/views/My-Properties/index.tsx

import MyPropertyCard from '@/components/cards/my-property-card';
import Title from '@/components/common/title';
import React from 'react';

const MyPropertiesView = () => {
  return (
    <div className='grid gap-y-'>
      <div className='grid sm:py-9 sm:px-28'>
        <Title text='My Properties' />
      </div>
      <div className='grid justify-center gap-y-6'>
        <MyPropertyCard />
        <MyPropertyCard />
        <MyPropertyCard />
        <MyPropertyCard />
      </div>
    </div>
  );
};

export default MyPropertiesView;
