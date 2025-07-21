import location from '@/../public/properties-hero/location.svg';
import dolor from '@/../public/properties-hero/dolor.svg';
import information from '@/../public/properties-hero/information.svg';
import grayDolor from '@/../public/properties-hero/gray-dolor.svg';
import grayInformation from '@/../public/properties-hero/gray-information.svg';

type StepBarT = {
  id: number;
  tittle: string;
  icon: string;
  darkIcon?: string;
};
export const StepBarData: StepBarT[] = [
  { id: 1, tittle: 'location & purpose', icon: location.src },
  {
    id: 2,
    tittle: 'Features & Price',
    icon: dolor.src,
    darkIcon: grayDolor.src,
  },
  {
    id: 3,
    tittle: 'Add Information',
    icon: information.src,
    darkIcon: grayInformation.src,
  },
];
