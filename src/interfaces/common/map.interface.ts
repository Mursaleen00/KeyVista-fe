import { TMarkersData } from '@/types/map.type';

export interface IMapProps {
  width?: string;
  height?: string;
  isCurrentLocation?: boolean;
  markers?: TMarkersData[];
}
