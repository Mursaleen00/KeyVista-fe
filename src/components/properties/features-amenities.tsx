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
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='flex gap-x-4'>
          <Image
            src={MountainView}
            alt='MountainView'
          />
          <p>Mountain View</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={AirConditioning}
            alt='AirConditioning'
          />
          <p>Air Conditioning</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={Smoke}
            alt='Smoke'
          />
          <p>Smoke</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={car}
            alt='Car'
          />
          <p>Car</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={tv}
            alt='Tv'
          />
          <p>Tv</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={HotPot}
            alt='HotPot'
          />
          <p>HotPot</p>
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
          <p>Ratio</p>
        </div>

        <div className='flex gap-x-4'>
          <Image
            src={carbon}
            alt='carbon'
          />
          <p>carbon</p>
        </div>
        <div className='flex gap-x-4'>
          <Image
            src={ValleyView}
            alt='ValleyView'
          />
          <p>ValleyView</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAmenities;
