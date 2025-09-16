// src/app/(pages)/properties/[slug]/page.tsx

// React Imports
import React from 'react';
import PropertyDetailsView from '@/views/Properties/property-details';
import owner from '@/../public/images/owner.png';
import sketch from '@/../public/images/sketch.png';
import thumbnail from '@/../public/images/beautiful-house.png';
import { amenitiesData } from '@/constant/properties/property-details/amenities-data';

const RentPropertiesPage = () => (
  <PropertyDetailsView
    id={1}
    thumbnail={thumbnail.src}
    location='lmdgsjlkdvsahjlldvsyjcdsa'
    bedrooms='9'
    bathrooms='9'
    area='9'
    quality='askv'
    price='987'
    duration
    status='Rent Property'
    description='kajcgs cva gdcvalkscavjh b kadvshjlca kjacgads clauydsca scjsac dcdc cv hjmvl jlhysgdc'
    sketch={sketch.src}
    ownerName='sdv'
    ownerPhone='2346236'
    ownerProfile={owner.src}
    propertyName='sdv'
    kitchen='https://placehold.co/600x400/png'
    loan='https://placehold.co/600x400/png'
    tvLaunch='https://placehold.co/600x400/png'
    room='https://placehold.co/600x400/png'
    amenities={amenitiesData}
  />
);

export default RentPropertiesPage;
