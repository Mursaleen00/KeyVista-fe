export type TMarkersData = {
  id: number;
  lat: number;
  lng: number;
  title: string;
  image: string;
};

export type TCurrentLocation = {
  lat: number;
  lng: number;
} | null;
