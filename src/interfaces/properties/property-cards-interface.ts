//  src/interfaces/properties/cards-interface.tsx

// export interface PropertyCardsInterfaces {
//   id?: number;
//   thumbnail: string;
//   status: string;
//   title: string;
//   location: string;
//   price: string;
//   duration?: string;
//   bedrooms: string;
//   bathrooms: string;
//   area: string;
// }
// ------------------------------------- PropertyCardsInterfaces -------------------------------------
export interface PropertyCardsI {
  _id: string;
  city: string;
  area: string;
  country: string;
  purpose: string;
  size?: number;
  bedrooms: number;
  bathrooms: number;
  amenities?: string[];
  price: number;
  kind?: string;
  condition?: string;
  name: string;
  description?: string;
  thumbnail: string;
  sketch?: string;
  images?: string[];
  ownerId?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
