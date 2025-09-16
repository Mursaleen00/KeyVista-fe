// src/views/Properties/property-details/index.tsx

'use client';

// React & Next imports
import Image from 'next/image';
import React from 'react';

// Components imports
import Title from '@/components/common/title';
import BreadCrumb from '@/components/common/bread-crumb';
import Reviews from '@/components/properties/property-details/reviews';
import FeaturesAmenities from '@/components/properties/property-details/amenities';
import PropertiesPrice from '@/components/properties/property-details/properties-price';
import PropertyFeatures from '@/components/properties/property-details/property-features';

// Icons Import
import locationI from '@/../public/icons/location.svg';
import share from '@/../public/icons/share.svg';
import Heart from '@/../public/icons/black-heart.svg';

// Interfaces Imports
import { PropertyDetailsInterfaces } from '@/interfaces/properties/property-details-interface';

const PropertyDetailsView = ({
  id,
  propertyName,
  location,
  thumbnail,
  kitchen,
  loan,
  tvLaunch,
  room,
  bedrooms,
  bathrooms,
  area,
  quality,
  price,
  duration,
  status,
  description,
  amenities,
  sketch,
  ownerName,
  ownerPhone,
  ownerProfile,
}: PropertyDetailsInterfaces) => {
  // const [property, setProperty] = React.useState<any>(null);
  // React.useEffect(() => {
  //   fetch(`${amenities}`)
  //     .then(res => res.json())
  //     .then(data => setProperty(data));
  // }, [amenities]);
  return (
    <div
      className='grid px-3 sm:px-4 lg:px-12 py-9 gap-y-7'
      key={`property?.${id}`}
    >
      {/* BreadCrumb */}
      <BreadCrumb />

      {/* Title & location */}
      <div className='flex flex-col gap-y-3'>
        <Title
          text={propertyName}
          className='flex'
        />
        {/* location section */}
        <div className='relative flex md:flex-row flex-col md:justify-between gap-y-4'>
          <div className='flex items-start gap-1'>
            <Image
              src={locationI}
              alt=''
              width={30}
            />
            <p className='text-text-dark'>{location || ''}</p>
          </div>
        </div>
      </div>

      {/* Like & share */}
      <div className='flex text-text-dark px-7 items-center justify-end gap-2 font-semibold'>
        <div className='flex items-center gap-1 cursor-pointer'>
          <Image
            src={share}
            alt='🔗'
          />
          <p>Share</p>
        </div>
        <div className='flex items-center gap-1 cursor-pointer'>
          <Image
            src={Heart}
            alt='❤️'
          />
          <p>Like</p>
        </div>
      </div>

      {/* image section */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-3 w-full'>
        {/* Thumbnail */}
        <div className='flex w-full md:col-span-3'>
          <Image
            src={thumbnail}
            alt='Placeholder'
            className='rounded-lg shadow-md w-full h-full'
            width={1000}
            height={1000}
          />
        </div>
        {/* Other Images */}
        <div className='grid grid-cols-2 w-full h-full gap-2 md:col-span-2'>
          <div className='flex w-full rounded-lg'>
            <Image
              src={kitchen}
              alt=''
              width={500}
              height={500}
              className='flex rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src={tvLaunch}
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src={room}
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
          <div>
            <Image
              src={loan}
              alt=''
              width={300}
              height={150}
              className='flex  rounded-lg w-full h-full'
            />
          </div>
        </div>
      </div>

      {/* More Details */}
      <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-x-5 gap-y-9'>
        {/* Property Qualities & Property Description $ Property Amenities */}
        <div className='flex flex-col xl:col-span-2 gap-y-8 border border-black '>
          {/* Rooms & area & Repair Quality */}
          <PropertyFeatures
            bedrooms={Number(bedrooms)}
            bathrooms={Number(bathrooms)}
            area={area}
            quality={quality}
          />

          {/* About of Property */}
          <div className='grid gap-y-5'>
            <Title text='About This Villa' />
            <p>{description}</p>
          </div>

          {/* Features $ Amenities */}
          <FeaturesAmenities amenities={amenities} />
        </div>

        {/* Property Price $ Property Review $ Property Map */}
        <div className='grid w-full max-w-lg gap-y-6 '>
          {/* Property Price */}
          <PropertiesPrice
            status={status}
            price={price}
            duration={duration}
          />

          {/* Property Reviews */}
          <Reviews />

          {/* Property Map */}
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
          src={sketch}
          alt='Sketch'
          width={500}
          height={500}
          className='flex w-full max-w-[600px] md:pl-32'
        />
      </div>

      {/* Owner */}
      <div className='grid gap-y-7'>
        <Title text='Owner' />
        <div className='grid items-center shadow-md w-fit py-4 px-7 justify-center text-center gap-y-3 rounded-2xl sm:ml-32 bg-white'>
          <Image
            src={ownerProfile}
            alt='Owner Profile'
            width={150}
            height={150}
          />
          <Title text={ownerName} />
          <p className='text-primary text-sm'>{ownerPhone}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsView;
