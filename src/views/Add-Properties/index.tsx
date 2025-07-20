import AddPropertiesHero from '@/components/properties/add-properties-hero';
import StepBar from '@/components/properties/step-bar';
import React from 'react';

const AddPropertiesIndex = () => {
  return (
    <div className='flex flex-col gap-y-6 w-full h-full'>
      <AddPropertiesHero />
      <StepBar />
    </div>
  );
};

export default AddPropertiesIndex;
