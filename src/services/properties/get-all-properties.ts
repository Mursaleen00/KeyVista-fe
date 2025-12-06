import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { URLS } from '../base-urls';

export interface Res {
  properties: Property[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Property {
  _id: string;
  city: string;
  area: string;
  country: string;
  purpose: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  price: number;
  kind: string;
  condition: string;
  name: string;
  description: string;
  thumbnail: string;
  sketch: string;
  images: string[];
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  position?: Position;
}

export interface Position {
  lat: number;
  lng: number;
}

export const useGetAllPropertiesQuery = () => {
  const useAllProProperties = async () => {
    const { data } = await axios.get(URLS.GET_PROPERTIES);
    return data as Res;
  };

  return useQuery({
    queryKey: ['all-properties'],
    queryFn: useAllProProperties,
  });
};
