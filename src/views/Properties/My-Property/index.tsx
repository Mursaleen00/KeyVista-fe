// src/app/views/My-Properties/index.tsx

import MyPropertyCard from '@/components/cards/my-property-card';
import Title from '@/components/common/title';
import { MyPropertiesData } from '@/constant/cards/my-properties-data';

const MyPropertiesView = () => {
  return (
    <div className='flex p-2 sm:px-8 md:px-11 xl:px-20 py-1 justify-center items-center'>
      <div className='flex flex-col rounded-3xl justify-center sm:px-5 shadow-2xl py-5 w-full max-w-[1500px]'>
        <div className='grid p-6'>
          <Title text='My Properties' />
        </div>
        <div className='grid justify-center gap-y-3'>
          {MyPropertiesData.map((item, i) => (
            <MyPropertyCard
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
