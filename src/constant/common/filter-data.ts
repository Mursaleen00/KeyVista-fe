// src/constant/common/filter-data.ts

import Arrow from '@/../public/icons/down-arrow.svg';
import location from '@/../public/icons/location.svg';

// Export FilterData
export const PriceAndAreaData = [
  {
    label: 'Price',
    type: 'number',
    placeholder: 'From',
    name: 'PriceFrom',
  },
  {
    type: 'number',
    placeholder: 'To',
    name: 'PriceTo',
  },
  {
    label: 'Area',
    type: 'number',
    placeholder: 'From',
    name: 'AreaFrom',
  },
  {
    type: 'number',
    placeholder: 'To',
    name: 'AreaTo',
  },
];

export const SelectData = [
  {
    label: 'City',
    icon: Arrow.src,
    placeholder: 'Select City',
    // name: 'City',
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
    // name: 'Location',
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
    // name: 'Property',
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
    // name: 'Purpose',
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
    // name: 'Beds',
    options: [
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
    ],
  },
];
