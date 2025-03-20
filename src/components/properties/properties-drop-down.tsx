// import { Props } from '@/interfaces/auth-heading-interface';
import { PropertiesDropDownData } from '@/constant/properties/properties-drop-down-data';
import Link from 'next/link';
import React from 'react';

const PropertiesDropDown = () => {
  return (
    <div className='grid bg-white w-[150px] h-[150px]  rounded-3xl p-5 gap-y-1'>
      {PropertiesDropDownData.map((item, i) => (
        <Link
          key={i}
          href={item.link}
        >
          <div className='border border-border p-3 rounded-2xl'>
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PropertiesDropDown;
// : React.FC<props>
