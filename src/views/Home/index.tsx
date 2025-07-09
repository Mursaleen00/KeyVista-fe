'use client';
import Button from '@/components/buttons/button';
import PropertyByCityCard from '@/components/cards/property-by-city-card';
import PropertyCard from '@/components/cards/property-Card';
import Paragraph from '@/components/common/paragraph';
import PropertyByCategory from '@/components/common/property-by-category';
import Title from '@/components/common/title';
import { PropertyByCityCardData } from '@/constant/cards/property-by-city-card-data';
import { CardsData } from '@/constant/cards/rent-buy-cards-data';
import { propertyByCategoryData } from '@/constant/properties/property-by-category-data';
import { useState } from 'react';

const HomeView = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const filteredCard =
    selectedTab === 'all'
      ? CardsData
      : CardsData.filter(card => card.category === selectedTab);

  return (
    <div className='grid'>
      {/* Browse Property by Category */}
      <div className='grid p-2 sm:px-6 sm:pt-14'>
        <Title text='Browse Property by Category' />
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 gap-5 w-full'>
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
      <div className='grid px-2 sm:px-6 py-9'>
        {/* Text section */}
        <div className='flex flex-col w-full justify-center md:pl-4'>
          <Title text='Browse Properties' />
          <div className='flex flex-col gap-y-3 pt-5'>
            <p className='text-sm text-text-light'>
              Explore our gallery to see how we’ve helped customers with expert
              generator and cooler maintenance. From routine servicing to
              complex repairs, our work speaks for itself.
            </p>
          </div>
        </div>
        {/* button Section */}
        <div className='flex gap-x-4 sm:gap-x-14 justify-start pl-5 py-9 text-text-light'>
          <button
            onClick={() => setSelectedTab('all')}
            className={`${
              selectedTab === 'all'
                ? 'text-primary border-b-2 border-b-primary font-semibold'
                : 'border-none'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedTab('buy')}
            className={`${
              selectedTab === 'buy'
                ? 'text-primary border-b-2 border-b-primary font-semibold pb-[1px]'
                : 'border-none'
            } `}
          >
            Buy
          </button>
          <button
            onClick={() => setSelectedTab('rent')}
            className={`${
              selectedTab === 'rent'
                ? 'text-primary border-b-2 border-b-primary font-semibold'
                : 'border-none'
            }`}
          >
            Rent
          </button>
        </div>
        {/* filteredCard */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
          {filteredCard.map((item, i) => (
            <PropertyCard
              key={i}
              {...item}
              // thumbnail={item.thumbnail}
              // title={item.title}
              // location={item.location}
              // duration={item.duration}
              // status={item.status || ''}
              // price={item.price}
              // bathrooms={item.bathrooms}
              // bedrooms={item.bedrooms}
              // area={item.area}
            />
          ))}
        </div>
      </div>

      {/* Browse Properties by city */}
      <div className='grid bg-light-SeGreen w-full p-4 sm:p-7 gap-y-9'>
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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
          {PropertyByCityCardData.map((item, i) => (
            <PropertyByCityCard
              key={i}
              thumbnail={item.thumbnail}
              cityName={item.title}
              description={item.text}
            />
          ))}
        </div>

        {/* button */}
        <div className='flex justify-around'>
          <Button text='Show more' />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
