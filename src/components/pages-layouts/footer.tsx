import React from 'react';
import mobile from '@/../public/footer/mobile.png';
import AppStore from '@/../public/footer/apps-store.png';
import googlePlay from '@/../public/footer/googlePlay.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex p-2  sm:p-9 justify-center'>
      <div className='grid lg:grid-cols-2 grid-cols-1 bg-[#0FA6A2]  justify-items-center rounded-3xl pt-6'>
        <div className='flex flex-col p-9 text-white gap-y-9'>
          <h1 className='flex font-semibold text-2xl'>
            Get Started with your Journey by joining AgileSpace Today !
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Image
              src={googlePlay}
              alt='AppStore'
              width={150}
              height={100}
            />
            <Image
              src={AppStore}
              alt='AppStore'
              width={150}
              height={100}
            />
          </div>
        </div>
        <div>
          <Image
            src={mobile}
            alt='mobile'
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
