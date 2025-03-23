// src/app/views/Auth/Home/index.tsx

// components Imports
import PropertyByCityCard from '@/components/cards/property-by-city-card';
import PropertyByCategory from '@/components/common/property-by-category';
import Button from '@/components/buttons/button';
import Title from '@/components/common/title';
import RentCard from '@/components/cards/rent-Card';
import BuyCard from '@/components/cards/buy-card';
import Paragraph from '@/components/common/paragraph';

// constants Import
import { propertyByCategoryData } from '@/constant/properties/property-by-category-data';

const HomeView = () => {
  return (
    <div className='grid'>
      {/* Browse Property by Category */}
      <div className='grid my-10'>
        <Title
          text='Browse Property by Category'
          className='px-6'
        />
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 gap-5 w-full'>
          {propertyByCategoryData.map((item, i) => (
            <PropertyByCategory
              key={i}
              icon={item.icon}
              tittle={item.tittle}
              text={item.text}
            />
          ))}
        </div>
      </div>

      {/* Browse Properties */}
      <div>
        {/* Text section  */}
        <div className='flex flex-col w-full justify-center pl-4'>
          {/* <div className='flex flex-col gap-y-2'> */}

          <h1 className='text-2xl font-semibold'>Our Work in Action</h1>
          {/* </div> */}
          <div className='flex flex-col gap-y-3 pt-5'>
            <p className='text-sm text-text-light'>
              Explore our gallery to see how we’ve helped customers with expert
              generator and cooler maintenance. From routine servicing to
              complex repairs, our work speaks for itself.
            </p>
          </div>
        </div>

        {/* button Section  */}

        <div className='flex gap-x-4 sm:gap-x-14 justify-start pl-8 py-4 text-text-light'>
          <button
          // onClick={() => setSelectedTab('all')}
          // className={` ${
          //   selectedTab === 'all'
          //     ? 'text-primary border-b-2 border-b-primary font-semibold '
          //     : 'border-none'
          // }`}
          >
            All
          </button>
          <button
          // onClick={() => setSelectedTab('generator')}
          // className={` ${
          //   selectedTab === 'generator'
          //     ? 'text-primary border-b-2 border-b-primary font-semibold pb-[1px]'
          //     : ' border-none'
          // } `}
          >
            Buy
          </button>
          <button
          // onClick={() => setSelectedTab('cooling tower')}
          // className={` ${
          //   selectedTab === 'cooling tower'
          //     ? 'text-primary border-b-2 border-b-primary font-semibold'
          //     : ' border-none'
          // }`}
          >
            Rent
          </button>
        </div>
        <RentCard />
        <BuyCard />
      </div>

      {/* Browse Properties by city  */}
      <div className='grid bg-light-SeGreen w-full p-9'>
        {/* text section */}
        <div className='grid gap-y-5'>
          <Title text='Browse Properties by city' />
          <Paragraph
            text='Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.'
            className='text-text-light'
          />
        </div>

        {/* PropertyByCityCard */}
        <PropertyByCityCard />

        {/* button */}
        <div className='flex justify-around'>
          <Button text='Show more' />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
