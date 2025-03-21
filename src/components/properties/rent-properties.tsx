import React from 'react';
import Title from '../common/title';
import Paragraph from '../common/paragraph';
import RentCard from '../cards/rent-Card';

const RentProperties = () => {
  return (
    <div className='grid  gap-4 px-9'>
      <div className='grid p-4 gap-4 pt-9'>
        <Title text='Rent Properties' />
        <Paragraph
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          className='flex text-lg'
        />
      </div>

      <RentCard />
    </div>
  );
};

export default RentProperties;
