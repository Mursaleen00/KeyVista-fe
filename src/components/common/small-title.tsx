// src/component/common/title.tsx

// react Import
import React from 'react';

// interfaces Import
import { titleI } from '@/interfaces/common/title-interface';

const SmallTitle: React.FC<titleI> = ({ text, className }) => (
  <p className={`font-semibold text-lg text-text-light  ${className}`}>
    {text}
  </p>
);

export default SmallTitle;
