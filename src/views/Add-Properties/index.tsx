import AddPropertiesHero from '@/components/add-properties/add-properties-hero';
import AddPropertiesSection from '@/components/add-properties/add-properties-section';
import React from 'react';

const AddPropertiesIndex = () => {
  return (
    <div className='flex flex-col gap-y-6 w-full h-full'>
      <AddPropertiesHero />
      <AddPropertiesSection />
    </div>
  );
};

export default AddPropertiesIndex;
