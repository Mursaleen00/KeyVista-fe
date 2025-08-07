// src/constant/common/profile-data.ts
import Arrow from '@/../public/icons/down-arrow.svg';

// Export ChangePasswordData
export const ProfileInputData = [
  {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Your Name',
    name: 'name',
  },
  {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Your Email',
    name: 'email',
  },
];

// Export ChangePasswordData
export const ProfileSelectedData = [
  {
    label: 'Country',
    icon: Arrow.src,
    type: 'text',
    placeholder: 'Select Country',
    name: 'country',
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
];
