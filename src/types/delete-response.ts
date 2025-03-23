export interface TDeleteResponse {
  property: Property;
  message: string;
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
}
