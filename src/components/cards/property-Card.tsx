// src/components/cards/property-Card.tsx

'use client';
import Image from 'next/image';
import React from 'react';
import StatusChip from '../common/status-chip';
import Title from '../common/title';
import Paragraph from '../common/paragraph';
import Bathrooms from '@/../public/icons/bath-rooms.svg';
import Bedrooms from '@/../public/icons/bed-rooms.svg';
import HomeSpace from '@/../public/icons/home-space.svg';
import { PropertyCardsInterfaces } from '@/interfaces/properties/property-cards-interface';
import HeartIcon from '../common/heart-icon';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleFavorite } from '@/store/Slice/silce';
// import { RootState } from '@/store/store';
// import { useRouter } from 'next/navigation';
// import { urls } from '@/constant/router/routes';
const PropertyCard = ({
  duration,
  status,
  title,
  location,
  price,
  thumbnail,
  bedrooms,
  bathrooms,
  area,
  id,
}: PropertyCardsInterfaces) => {
  // const dispatch = useDispatch();
  // const { push } = useRouter();

  // const favorites = useSelector((state: RootState) => state.favorites.items);
  // const isFavorite = favorites.some(item => item.id === id);
  // const handleFavoriteClick = () => {
  //   dispatch(
  //     toggleFavorite({
  //       duration,
  //       status,
  //       title,
  //       location,
  //       price,
  //       thumbnail,
  //       bedrooms,
  //       bathrooms,
  //       area,
  //       id,
  //     }),
  //   );
  // Pehli baar add karte hi favorites page pe le jao (optional)
  // if (!isFavorite) {
  //   push(urls.favorite);
  // }
  // };
  return (
    <div
      className='grid w-full border border-border rounded-3xl'
      key={id}
    >
      {/* Image Section  */}
      <div className='relative -z-20'>
        <Image
          src={thumbnail || ''}
          alt='building'
          width={260}
          height={10}
          className='w-full'
        />

        <StatusChip
          text={status}
          className='absolute top-3 right-3'
        />
      </div>
      {/* Properties details section */}
      <div className='flex flex-col px-4 pt-4 gap-y-3'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col gap-y-3'>
            <Title text={title} />
            <Paragraph text={location} />
          </div>
          <div>
            <HeartIcon
            // onClick={handleFavoriteClick}
            // isFilled={isFavorite}
            />
          </div>
        </div>

        <p className='text-primary text-2xl items-center flex'>
          {price}
          <span className='text-text-light text-[15px]'>{duration}</span>
        </p>
      </div>
      {/* border */}
      <div className='border border-border-light m-4' />
      {/* Home information */}
      <div className='flex px-2 sm:px-4 pb-4 gap-4 justify-around items-center'>
        <div className='flex flex-col gap-y-2 sm:gap-x-1 items-start'>
          <Image
            src={Bedrooms}
            alt=''
            className='flex justify-center items-center'
          />
          <Paragraph
            text={bedrooms}
            className='text-heading'
          />
        </div>
        <div className='flex flex-col gap-y-2 sm:gap-x-1 items-start'>
          <Image
            src={Bathrooms}
            alt=''
          />
          <Paragraph
            text={bathrooms}
            className='text-heading'
          />
        </div>
        <div className='flex flex-col gap-y-2 sm:gap-x-1 items-start'>
          <Image
            src={HomeSpace}
            alt=''
          />
          <Paragraph
            text={area}
            className='text-heading'
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
