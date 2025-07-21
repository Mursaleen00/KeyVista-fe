import React from 'react';
import StepBar from './step-bar';
import LocationAndPurpose from './location-&-purpose';

const AddPropertiesSection = () => {
  return (
    <div className='rounded-lg bg-white shadow-2xl mx-72 -z-50 px-9'>
      <StepBar />
      <div className='flex flex-col gap-y-6 mt-6'>
        <LocationAndPurpose />
      </div>
    </div>
  );
};

export default AddPropertiesSection;
