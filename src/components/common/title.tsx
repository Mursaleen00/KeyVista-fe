// src/component/common/title.tsx
'use client';
// react Import
import React from 'react';

// interfaces Import
import { titleI } from '@/interfaces/common/title-interface';

const Title: React.FC<titleI> = ({ text, className }) => (
  // Text
  <p className={`text-text-dark text-2xl font-semibold ${className}`}>{text}</p>
);

export default Title;
