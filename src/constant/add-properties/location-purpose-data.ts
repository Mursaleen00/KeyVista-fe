// src/constant/common/location-purpose-data.ts
import { ResidentialT } from '@/types/add-properties-types';

import Arrow from '@/../public/icons/down-arrow.svg';

// Export FilterData
export const CityAndAreaData = [
  {
    label: 'Which City is your property in?',
    icon: Arrow.src,
    placeholder: 'Select City',
    name: 'city',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
      { value: 'vila', label: 'Villa' },
      { value: 'vla', label: 'Villa' },
      { value: 'vlla', label: 'Villa' },
      { value: 'illa', label: 'Villa' },
      { value: 'va', label: 'Villa' },
      { value: 'lla', label: 'Villa' },
      { value: 'vil', label: 'Villa' },
      { value: 'vsdufbla', label: 'Villa' },
    ],
  },

  {
    label: 'Which Area is your property in?',
    icon: Arrow.src,
    placeholder: 'Select Area',
    name: 'area',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
      { value: 'vla', label: 'Villa' },
      { value: 'vlla', label: 'Villa' },
      { value: 'illa', label: 'Villa' },
      { value: 'va', label: 'Villa' },
      { value: 'lla', label: 'Villa' },
      { value: 'vil', label: 'Villa' },
      { value: 'vsdufbla', label: 'Villa' },
    ],
  },
];

export const ResidentialData: ResidentialT[] = [
  { Residential: 'Upper Portion' },
  { Residential: 'Commercial' },
  { Residential: 'Hostel' },
  { Residential: 'Flat' },
  { Residential: 'House' },
  { Residential: 'Lower Portion' },
  { Residential: 'Plot' },
  { Residential: 'Room' },
];
