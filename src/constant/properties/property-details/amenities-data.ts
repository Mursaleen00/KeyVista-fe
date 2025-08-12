// src/constant/properties/property-details/amenities-data.ts

//  Import Icons
import airConditioning from '@/../public/icons/air-conditioning.svg';
import MountainView from '@/../public/icons/mountain-view.svg';
import smoke from '@/../public/icons/smoke.svg';
import car from '@/../public/icons/car.svg';
import hotPot from '@/../public/icons/hot-pot.svg';
import Wifi from '@/../public/icons/wifi.svg';
import ratio from '@/../public/icons/ratio.svg';
import carbon from '@/../public/icons/carbon.svg';
import valleyView from '@/../public/icons/valley-view.svg';
import tv from '@/../public/icons/tv.svg';

// Amenities type Import
import { AmenitiesType } from '@/types/property-details-type';

// ================================== Amenities Data ==========================================
export const amenitiesData: AmenitiesType[] = [
  {
    image: MountainView.src,
    title: 'Mountain View',
  },
  {
    image: airConditioning.src,
    title: 'Air Conditioning',
  },
  {
    image: smoke.src,
    title: 'Smoke Alarm',
  },
  {
    image: car.src,
    title: 'Free Parking on Premises',
  },
  {
    image: hotPot.src,
    title: 'Hot Pot',
  },
  {
    image: Wifi.src,
    title: 'Wifi',
  },
  {
    image: ratio.src,
    title: 'Ratio',
  },
  {
    image: carbon.src,
    title: 'Carbon Monoxide Alarm',
  },
  {
    image: valleyView.src,
    title: 'Valley View',
  },
  {
    image: tv.src,
    title: 'TV',
  },
];
