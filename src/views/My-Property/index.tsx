// src/app/views/My-Properties/index.tsx

import MyPropertyCard from '@/components/cards/my-property-card';
import ProductCardHorizontal from '@/components/cards/product-card-horizontal';
import Title from '@/components/common/title';
import { MyPropertiesData } from '@/constant/cards/my-properties-data';
import { ProductCardHorizontalData } from '@/constant/cards/product-card-horizontal-data';

const MyPropertiesView = () => {
  return (
    <div className='flex p-2 sm:px-8 md:px-11 xl:px-20 py-14 justify-center items-center w-screen'>
      <div className='flex flex-col rounded-xl justify-center sm:px-5 shadow-2xl py-5'>
        <div className='grid p-9'>
          <Title text='My Properties' />
        </div>
        <div className='grid justify-center gap-y-6'>
          {MyPropertiesData.map((item, i) => (
            <MyPropertyCard
              key={i}
              {...item}
            />
          ))}
          {ProductCardHorizontalData.map((item, i) => (
            <ProductCardHorizontal
              key={i}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPropertiesView;
