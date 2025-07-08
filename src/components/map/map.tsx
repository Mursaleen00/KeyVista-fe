'use client';

import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

import { useState } from 'react';

import { dummyMarkersData } from '@/constant/map/dummy-markers';
import { IMapProps } from '@/interfaces/common/map.interface';
import { TCurrentLocation, TMarkersData } from '@/types/map.type';
import Image from 'next/image';
import MarkerIcon from './../../../public/icons/marker.svg';

const Map = ({ width, height, isCurrentLocation, markers }: IMapProps) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY as string;

  const [selectedMarker, setSelectedMarker] = useState<TMarkersData | null>(
    null,
  );

  const [currentLocation, setCurrentLocation] =
    useState<TCurrentLocation>(null);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  const mapOptions = {
    zoom: 15,
    center: isCurrentLocation
      ? (currentLocation ?? markers?.[0] ?? { lat: 37.7749, lng: -122.4194 })
      : (markers?.[0] ?? { lat: 37.7749, lng: -122.4194 }),
  };

  const containerStyle = {
    width: width ?? '100%',
    height: height ?? '500px',
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        options={mapOptions}
      >
        {(markers ?? dummyMarkersData).map((marker: TMarkersData) => {
          return (
            <Marker
              key={marker.id}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
              onClick={() => setSelectedMarker(marker)}
              icon={{ url: MarkerIcon.src }}
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
