import React from 'react';
interface Props {
  text: string;
}

const AuthHeading = ({ text }: Props) => {
  return (
    <div className='text-2xl pb-6 font-semibold text-heading'>
      {text}
      <span className='text-primary'> Agile</span>
      <span className='font-normal '>Space</span>
    </div>
  );
};

export default AuthHeading;
