import React from 'react';
import { Props } from '@/interfaces/paragraph-interface';

const Paragraph: React.FC<Props> = ({ text, className }) => (
  <p
    className={`text-text-light text-sm  
    ${className}`}
  >
    {text}
  </p>
);

export default Paragraph;
