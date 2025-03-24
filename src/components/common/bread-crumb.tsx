import React from 'react';

const BreadCrumb = () => {
  return (
    <div className='flex text-text-light'>
      <div className='flex gap-1 sm:gap-3'>
        <p>Home</p>/<p>Rent Properties</p>/
        <p className='text-primary'>Arabian Villas</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
