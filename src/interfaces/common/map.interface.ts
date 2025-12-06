// src/interfaces/common/map.interface.ts

// Type Import
import { TMarkersData } from '@/types/map.type';

// MapI interface Export
export interface MapI {
  width?: string;
  height?: string;
  isCurrentLocation?: boolean;
  markers?: TMarkersData[];
}
