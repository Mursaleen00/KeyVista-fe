//  src/interfaces/properties/property-details-interface.ts

// ============================== Property Details Interfaces ==============================
export interface PropertyDetailsInterfaces {
  id?: number;
  propertyName: string;
  location: string;
  thumbnail: string;
  kitchen: string;
  loan: string;
  tvLaunch: string;
  room: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  quality: string;
  price: string;
  duration?: boolean;
  status: string;
  description: string;
  amenities: AmenitiesInterface[];
  sketch: string;
  ownerName: string;
  ownerPhone: string;
  ownerProfile: string;
}

// ============================== Amenities Interfaces for Property Details ===============================
export interface AmenitiesInterface {
  title: string;
  image: string;
}

// ======================== Amenities Props Interfaces for Amenities Component ==============================
export interface amenitiesProps {
  amenities?: Array<{
    title: string;
    image: string;
  }>;
}

// ======================== Property Features Props Interfaces for Property Features Component ==============================
export interface PropertyFeaturesProps {
  bedrooms: string | number;
  bathrooms: string | number;
  area: string;
  quality: string;
}
