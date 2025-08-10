// src/views/Properties/Add-Properties/index.tsx

// React Imports
import React from 'react';

// Components Imports
import AddPropertiesHero from '@/components/add-properties/add-properties-hero';
import AddPropertiesSection from '@/components/add-properties/add-properties-section';

const AddPropertiesIndex = () => {
  return (
    <div className='flex flex-col gap-y-6 w-full'>
      {/* Add Properties Hero */}
      <AddPropertiesHero
        title='Reach Millions of Buyers on our Platfroms'
        description='A great platform to buy, sell, or even rent your properties without any commisions.'
      />
      {/* Add Properties Section */}
      <div className='flex justify-center items-center p-5'>
        <AddPropertiesSection />
      </div>
    </div>
  );
};

export default AddPropertiesIndex;
