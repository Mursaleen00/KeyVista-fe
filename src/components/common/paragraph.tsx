import React from 'react';

interface Props {
  text: string;
  className?: string;
}

const Paragraph: React.FC<Props> = ({ text, className }) => (
  <p
    className={`text-text-light text-sm  
    ${className}`}
  >
    {text}
  </p>
);

export default Paragraph;
