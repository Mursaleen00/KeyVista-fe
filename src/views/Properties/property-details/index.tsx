import BreadCrumb from '@/components/common/bread-crumb';
import Title from '@/components/common/title';
import Image from 'next/image';
import React from 'react';
import location from '@/../public/icons/location.svg';
import share from '@/../public/icons/share.svg';
import Heart from '@/../public/icons/black-heart.svg';
import Owner from '@/../public/images/owner.png';
import Sketch from '@/../public/images/sketch.png';
import PropertyFeatures from '@/components/properties/property-features';
import PropertiesPrice from '@/components/properties/properties-price';
import FeaturesAmenities from '@/components/properties/features-amenities';
import Reviews from '@/components/properties/reviews';

const PropertyDetailsView = () => {
  return (
    <div className='grid px-3 sm:px-4 lg:px-12 py-9 gap-y-7'>
      {/* BreadCrumb */}
      <BreadCrumb />
      {/* Title */}
      <div className='flex flex-col gap-y-3'>
        <Title
          text='Le Plateau Mont-Royal'
          className='flex'
        />
        {/* location section */}
        <div className='relative flex md:flex-row flex-col md:justify-between gap-y-4'>
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
        </div>
      </div>
      <div className='flex text-text-dark px-7 items-center justify-end gap-2 font-semibold'>
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
      {/* image section */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-3 w-full'>
        <div className='flex w-full md:col-span-3'>
          <Image
            src='https://placehold.co/900x500'
            alt='Placeholder'
            className='rounded-lg shadow-md w-full h-full'
            width={1000}
            height={1000}
          />
        </div>
        <div className='grid grid-cols-2 w-full h-full gap-2 md:col-span-2'>
          <div className='flex w-full rounded-lg'>
            <Image
              src='https://placehold.co/600x400/png'
              alt=''
              width={500}
              height={500}
              className='flex rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src='https://placehold.co/600x400/png'
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src='https://placehold.co/600x400/png'
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src='https://placehold.co/600x400/png'
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
        </div>
      </div>

      {/* more details */}
      <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-x-5 gap-y-9'>
        {/* 1st section  */}
        <div className='flex flex-col xl:col-span-2 gap-y-8'>
          <PropertyFeatures />

          <div className='grid gap-y-5'>
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

          <FeaturesAmenities />
        </div>
        {/* 2nd section */}
        <div className='grid w-full max-w-lg gap-y-6 '>
          <PropertiesPrice />
          <Reviews />
          {/* Map */}
          {/* <div className='grid w-[300px] gap-y-4'>
            <Title text='Location' />
            <Map />
          </div> */}
        </div>
      </div>

      {/* Sketch */}
      <div className='grid pt-7 gap-y-6'>
        <Title text='Sketch' />
        <Image
          src={Sketch}
          alt='Sketch'
          width={500}
          className='flex w-full max-w-[600px] md:pl-32'
        />
      </div>

      {/* Owner */}
      <div className='grid gap-y-7'>
        <Title text='Owner' />
        <div className='grid items-center shadow-md w-fit py-4 px-7 justify-center text-center gap-y-3 rounded-2xl sm:ml-32 bg-white'>
          <Image
            src={Owner}
            alt=''
            width={150}
          />
          <Title text='Jhon Doe' />
          <p className='text-primary text-sm'>+92 398 765 985 </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsView;
