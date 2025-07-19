import location from '@/../public/properties-hero/location.svg';
import dolor from '@/../public/properties-hero/dolor.svg';
import information from '@/../public/properties-hero/information.svg';

type StepBarT = {
  id: number;
  tittle: string;
  icon: string;
};
export const StepBarData: StepBarT[] = [
  { id: 1, tittle: 'location & purpose', icon: location.src },
  { id: 2, tittle: 'Features & Price', icon: dolor.src },
  { id: 3, tittle: 'Add Information', icon: information.src },
];
