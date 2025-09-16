// src/components/add-properties/add-properties-section.tsx
'use client';

// Import React
import { useState } from 'react';
import toast from 'react-hot-toast';

// Import Components
import Description from './description';
import FeatureAndPrice from './features-&-price';
import LocationAndPurpose from './location-&-purpose';
import StepBar from './step-bar';

// Import Types
import { AddPropertiesT } from '@/types/add-properties-types/add-properties-section-types';
import { useRouter } from 'next/navigation';
import { urls } from '@/constant/router/routes';

const AddPropertiesSection = () => {
  const [data, setData] = useState<AddPropertiesT>({
    area: '',
    city: '',
    purpose: '',
    residential: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    amenities: '',
    price: '',
    condition: '',
    propertyName: '',
    description: '',
    image: '',
    sketch: '',
  });

  // State to manage the current step
  const [step, setStep] = useState(0);

  const { push } = useRouter();
  // Function to handle previous steps
  const handlePrev = () => {
    if (step >= 1) setStep(step - 1);
  };

  // Function to handle next steps
  const handleNext: () => void = () => {
    if (data && step >= 0 && step < 2) setStep(step + 1);
    else if (data && step === 2) {
      toast.success('Property added successfully');
      push(urls.myProperties);
    }
  };

  return (
    <div className='rounded-lg bg-white shadow-2xl w-full max-w-6xl px-5 md:px-9 flex flex-col py-9 gap-y-9 z-0'>
      {/* Step Bar */}
      <StepBar step={step} />

      {/* Steps Section */}
      <div className='flex flex-col gap-y-6'>
        {/* Location and Purpose */}
        {step == 0 && (
          <LocationAndPurpose
            setStep={handleNext}
            setData={setData}
          />
        )}

        {/* Feature and Price */}
        {step === 1 && (
          <FeatureAndPrice
            setStep={handleNext}
            prevStep={handlePrev}
            setData={setData}
          />
        )}

        {/* Description */}
        {step == 2 && (
          <Description
            setStep={handleNext}
            prevStep={handlePrev}
            setData={setData}
          />
        )}
      </div>
    </div>
  );
};

export default AddPropertiesSection;
