'use client';
import React, { useState } from 'react';
import StepBar from './step-bar';
import LocationAndPurpose from './location-&-purpose';
import FeatureAndPrice from './features-&-price';
import Description from './description';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';

const AddPropertiesSection = () => {
  // State to manage the current step
  const [step, setStep] = useState(0);

  // Function to handle previous steps
  const handlePrev = () => {
    if (step >= 1) setStep(step - 1);
    // else if (step == 2) setStep(step - 1)
  };

  // Function to handle next steps
  const handleNext = () => {
    if (step >= 0) setStep(step + 1);
    else toast.error('Please fill all the fields');
  };
  // formik
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema:
  //     step == 1 ? personalDetailSchema : step == 2 ? bankDetailSchema : null,
  //   onSubmit: () => {
  //     toast.success('Order placed successfully');
  //     router.push(urls.home);
  //     dispatch(removeAllProducts());
  //   },
  // });
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
            // formik={formik}
          />
        )}

        {/* Feature and Price */}
        {step === 1 && (
          <FeatureAndPrice
            setStep={handleNext}
            prevStep={handlePrev}
            // formik={formik}
          />
        )}

        {/* Description */}
        {step == 2 && (
          <Description
            setStep={handleNext}
            prevStep={handlePrev}
          />
        )}
      </div>
    </div>
  );
};

export default AddPropertiesSection;
