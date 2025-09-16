// src/Component/common/paragraph.tsx

// React Import
import React from 'react';

// interface Import
import { paragraphI } from '@/interfaces/common/paragraph-interface';

const Paragraph: React.FC<paragraphI> = ({ text, className }) => (
  // paragraph
  <p
    className={`text-text-light text-sm  
    ${className}`}
  >
    {text}
  </p>
);

export default Paragraph;
