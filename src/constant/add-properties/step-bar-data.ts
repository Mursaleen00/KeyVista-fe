// src/constant/add-properties/step-bar-data.ts

// Imports Icons
import location from '@/../public/add-properties/location.svg';
import dolor from '@/../public/add-properties/dolor.svg';
import information from '@/../public/add-properties/information.svg';
import grayDolor from '@/../public/add-properties/gray-dolor.svg';
import grayInformation from '@/../public/add-properties/gray-information.svg';

// Types Imports
import { StepBarT } from '@/types/add-properties-types/add-properties-section-types';

// Export StepBarData
export const StepBarData: StepBarT[] = [
  {
    tittle: 'location & \n purpose',
    icon: location.src,
  },
  {
    tittle: 'Features & \n Price',
    icon: dolor.src,
    darkIcon: grayDolor.src,
  },
  {
    tittle: 'Add \nInformation',
    icon: information.src,
    darkIcon: grayInformation.src,
  },
];
