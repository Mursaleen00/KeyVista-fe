import React from 'react';
import StepBar from './step-bar';
// import LocationAndPurpose from './location-&-purpose';
// import FeatureAndPrice from './features-&-price';
import Description from './description';

const AddPropertiesSection = () => {
  return (
    <div className='rounded-lg bg-white shadow-2xl w-full max-w-6xl px-5 md:px-9 flex flex-col py-9 gap-y-9 z-0'>
      <StepBar />
      <div className='flex flex-col gap-y-6'>
        <Description />
        {/* <LocationAndPurpose /> */}
        {/* <FeatureAndPrice /> */}
      </div>
    </div>
  );
};

export default AddPropertiesSection;
