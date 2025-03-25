import BreadCrumb from '@/components/common/bread-crumb';
import Title from '@/components/common/title';
import Image from 'next/image';
import React from 'react';
import location from '@/../public/icons/location.svg';
import share from '@/../public/icons/share.svg';
import Heart from '@/../public/icons/blackHeart.svg';
// import blackHouse from '@/../public/images/blackHouse.png';
// import stairs from '@/../public/images/stairs.png';
// import TvLaunch from '@/../public/images/TvLaunch.png';
// import Rooms from '@/../public/images/Rooms.png';
// import Bathrooms from '@/../public/images/Bathrooms.png';
import Sketch from '@/../public/images/Sketch.png';

import PropertyFeatures from '@/components/properties/property-features';
import PropertiesPrice from '@/components/properties/properties-price';
import FeaturesAmenities from '@/components/properties/features-amenities';

const PropertyDetailsView = () => {
  return (
    <div className='grid px-4 sm:px-14 py-9 gap-y-4'>
      {/* BreadCrumb */}
      <BreadCrumb />
      {/* Title */}
      <div className='flex flex-col gap-y-3'>
        <Title
          text='Le Plateau Mont-Royal'
          className='flex'
        />
        {/* location section */}
        <div className='flex md:flex-row flex-col md:justify-between gap-4'>
          {/* location */}
          <div className='flex items-start gap-1'>
            <Image
              src={location}
              alt=''
              width={30}
            />
            <p className='text-text-dark'>
              1011 Robson Street, Vancouver, BC V6E 1C2
            </p>
          </div>
          {/* Like & share */}
          <div className='flex text-text-dark px-7 items-center justify-center gap-2 font-semibold'>
            <div className='flex items-center gap-1'>
              <Image
                src={share}
                alt=''
              />
              <p>Share</p>
            </div>
            <div className='flex items-center gap-1'>
              <Image
                src={Heart}
                alt=''
              />
              <p>Like</p>
            </div>
          </div>
        </div>
      </div>
      {/* PropertyFeatures & Price */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* 1st section */}
        <div className='grid gap-y-12 col-span-2'>
          <PropertyFeatures />
          <div className='grid gap-y-7'>
            <Title text='About This Villa' />
            <p>
              Welcome to this luxurious villa, a perfect blend of elegance and
              comfort. This exquisite property features three spacious bedrooms,
              offering ample room for relaxation and personal space. With two
              beautifully designed bathrooms, each detail is curated for your
              utmost convenience. The villa boasts a generous square area of 6x8
              square yards, providing a harmonious balance of open spaces and
              cozy corners. The architecture seamlessly integrates modern
              aesthetics with practical functionality, creating a home that is
              both stylish and welcoming.
            </p>
          </div>
        </div>
        {/* 2nd section */}
        <div className='grid col-span-1'>
          <PropertiesPrice />
        </div>
      </div>

      {/* FeaturesAmenities */}
      <div className='flex '>
        <FeaturesAmenities />
      </div>
      {/* Sketch */}
      <div className='grid pt-7 gap-y-6 '>
        <Title text='Sketch' />
        <Image
          src={Sketch}
          alt='Sketch'
          width={500}
          className='flex w-full max-w-[600px] md:pl-32'
        />
      </div>
      {/* image section */}
      {/* <div className='flex flex-col md:flex-row gap-7 w-full'>
        <Image
          src='https://placehold.co/600x400'
          alt='Placeholder'
          className='rounded-lg shadow-md w-full h-full'
          width={500}
          height={500}
        />
        <div className='grid grid-cols-2  w-full h-full gap-4'>
          <div>
            <Image
              src={Rooms}
              alt=''
              width={200}
              className='flex w-'
            />
          </div>

          <div>
            <Image
              src={TvLaunch}
              alt=''
              width={200}
              className='flex w-fu'
            />
          </div>
          <Image
            src={Bathrooms}
            alt=''
            width={200}
            className='flex w-ful'
          />
          <Image
            src={stairs}
            alt=''
            width={200}
            className='flex w-fu'
          />
        </div>
      </div> */}
    </div>
  );
};

export default PropertyDetailsView;
