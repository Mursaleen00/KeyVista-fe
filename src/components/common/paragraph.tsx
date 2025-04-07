import React from 'react';
import { Props } from '@/interfaces/common/paragraph-interface';

const Paragraph: React.FC<Props> = ({ text, className }) => (
  <p
    className={`text-text-light text-sm  
    ${className}`}
  >
    {text}
  </p>
);

export default Paragraph;
