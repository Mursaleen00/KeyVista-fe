import React from 'react';

interface Props {
  text: string;
  className?: string;
}

const Title: React.FC<Props> = ({ text, className }) => (
  <p
    className={`text-black text-xl capitalize 
    ${className}`}
  >
    {text}
  </p>
);

export default Title;
