import React from 'react';
import Title from '../common/title';
import Paragraph from '../common/paragraph';
import BuyCard from '../cards/buy-card';

const BuyProperties = () => {
  return (
    <div className='grid  gap-4 px-9'>
      <div className='grid p-4 gap-4 pt-9'>
        <Title text='Buy Properties' />
        <Paragraph
          text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
          className='flex text-lg'
        />
      </div>

      <BuyCard />
    </div>
  );
};

export default BuyProperties;
