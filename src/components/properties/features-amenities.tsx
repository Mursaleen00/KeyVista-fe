import React from 'react';
import Title from '../common/title';
import AirConditioning from '@/../public/icons/Air conditioning.svg';
import MountainView from '@/../public/icons/MountainView.svg';
import Smoke from '@/../public/icons/Smoke.svg';
import car from '@/../public/icons/car.svg';
import HotPot from '@/../public/icons/HotPot.svg';
import Wifi from '@/../public/icons/wifi.svg';
import Ratio from '@/../public/icons/ratio.svg';
import carbon from '@/../public/icons/carbon.svg';
import ValleyView from '@/../public/icons/ValleyView.svg';
import tv from '@/../public/icons/tv.svg';
import Image from 'next/image';

const FeaturesAmenities = () => {
  return (
    <div className='grid gap-6'>
      <Title text='Features / Amenities' />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 text-md'>
        <div className='flex gap-x-4'>
          <Image
            src={MountainView}
            alt='MountainView'
          />
          <p>Mountain view</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={AirConditioning}
            alt='AirConditioning'
          />
          <p>Air conditioning</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={Smoke}
            alt='Smoke'
          />
          <p>Smoke alarm</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={car}
            alt='Car'
          />
          <p>Free parking on premises</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={tv}
            alt='Tv'
          />
          <p>TV with Apple TV, Netflix</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={HotPot}
            alt='HotPot'
          />
          <p>Private hot tub</p>
        </div>

        <div className='flex gap-x-4'>
          <Image
            src={Wifi}
            alt='Wifi'
          />
          <p>Wifi</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={Ratio}
            alt='Ratio'
          />
          <p>Private patio or balcony</p>
        </div>

        <div className='flex gap-x-4'>
          <Image
            src={carbon}
            alt='carbon'
          />
          <p>Carbon monoxide alarm</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={ValleyView}
            alt='ValleyView'
          />
          <p>Valley view</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAmenities;
