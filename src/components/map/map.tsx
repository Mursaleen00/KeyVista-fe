// src/components/map/map.tsx

'use client';

// Reacts & Next Imports
import { useState } from 'react';
import Image from 'next/image';
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

// image Import
import markerIcon from '@/../public/icons/marker.svg';

// Constant Import
import { dummyMarkersData } from '@/constant/map/dummy-markers';

// Interface Import
import { MapI } from '@/interfaces/common/map.interface';

// Type Import
import { TCurrentLocation, TMarkersData } from '@/types/map.type';

const Map = ({ width, height, isCurrentLocation, markers }: MapI) => {
  // Api key
  const apiKey = process.env.GOOGLE_MAPS_API_KEY as string;

  // selectedMarker State
  const [selectedMarker, setSelectedMarker] = useState<TMarkersData | null>(
    null,
  );
  // currentLocation State
  const [currentLocation, setCurrentLocation] =
    useState<TCurrentLocation>(null);
  // Condition
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  // mapOptions
  const mapOptions = {
    zoom: 15,
    center: isCurrentLocation
      ? (currentLocation ?? markers?.[0] ?? { lat: 37.7749, lng: -122.4194 })
      : (markers?.[0] ?? { lat: 37.7749, lng: -122.4194 }),
  };

  // Style
  const containerStyle = {
    width: width ?? '100%',
    height: height ?? '500px',
  };

  return (
    // Api key
    <LoadScript googleMapsApiKey={apiKey}>
      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        options={mapOptions}
      >
        {(markers ?? dummyMarkersData).map((marker: TMarkersData) => {
          return (
            // Maker
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => setSelectedMarker(marker)}
              icon={{ url: markerIcon.src }}
            />
          );
        })}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker?.lat,
              lng: selectedMarker?.lng,
            }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className='flex flex-col gap-2 max-w-xs'>
              <Image
                src={selectedMarker?.image}
                alt={selectedMarker?.title}
                width={600}
                height={500}
                className='rounded-lg w-full h-full'
              />
              <h3 className='text-text-light font-medium text-lg line-clamp-1'>
                {selectedMarker?.title}
              </h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
