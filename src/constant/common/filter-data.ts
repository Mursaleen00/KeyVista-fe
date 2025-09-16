// src/constant/common/filter-data.ts

import Arrow from '@/../public/icons/down-arrow.svg';
import location from '@/../public/icons/location.svg';

// Export PriceAndAreaData
export const PriceAndAreaData = [
  {
    label: 'Price',
    type: 'number',
    placeholder: 'From',
    name: 'priceFrom',
  },
  {
    type: 'number',
    placeholder: 'To',
    name: 'priceTo',
  },
  {
    label: 'Area',
    type: 'number',
    placeholder: 'From',
    name: 'areaFrom',
  },
  {
    type: 'number',
    placeholder: 'To',
    name: 'areaTo',
  },
];

// Export SelectData
export const SelectData = [
  {
    label: 'City',
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
    label: 'Location',
    icon: location.src,
    placeholder: 'Add Location',
    name: 'location',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
    ],
  },
  {
    label: 'Property',
    icon: Arrow.src,
    placeholder: 'Select Property Type',
    name: 'property',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
    ],
  },
  {
    label: 'Purpose',
    icon: Arrow.src,
    placeholder: 'Select Purpose',
    name: 'purpose',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
    ],
  },
  {
    label: 'Beds',
    icon: Arrow.src,
    placeholder: 'Select Beds',
    name: 'beds',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
    ],
  },
];
