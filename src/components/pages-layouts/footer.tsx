import React from 'react';
import mobile from '@/../public/footer/mobile.png';
import AppStore from '@/../public/footer/apps-store.png';
import googlePlay from '@/../public/footer/googlePlay.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex  pb-20 pt-11 px-5 sm:px-16 justify-center w-full'>
      <div className='relative grid lg:grid-cols-2 grid-cols-1 bg-[#0FA6A2] justify-items-center rounded-3xl pt-3 w-full lg items-center'>
        <div className='flex flex-col p-3 sm:px-7 text-white gap-y-4 md:gap-9'>
          <h1 className='flex font-semibold text-2xl'>
            Get Started with your Journey by joining AgileSpace Today !
          </h1>
          <p>
            Lorem Ipsum is simply dummy text <br />
            of the printing and typesetting industry
          </p>
          <div className='flex flex-col lg:flex-row gap-3'>
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
        <div className='md bottom-0 right-4'>
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
