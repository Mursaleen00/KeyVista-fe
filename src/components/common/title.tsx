// src/component/common/title.tsx

// react Import
import React from 'react';

// interfaces Import
import { Props } from '@/interfaces/title-interface';

const Title: React.FC<Props> = ({ text, className }) => (
  <p className={`text-black text-2xl font-semibold ${className}`}>{text}</p>
);

export default Title;
