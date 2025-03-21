// import { Props } from '@/interfaces/auth-heading-interface';
import { ProfileDropDownData } from '@/constant/common/profile-drop-down-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// interface Props {
//   icon: object | string;
//   text: string;
//   link: string;
// }
const ProfileDropDown = () => {
  return (
    <div className='grid bg-white h-fit rounded-3xl p-5 gap-y-1'>
      {ProfileDropDownData.map((item, i) => (
        <Link
          key={i}
          href={item.link}
        >
          <div className='flex border border-border p-3 rounded-2xl hover:bg-primary hover:text-white text-text gap-x-2 items-center'>
            <Image
              src={item.icon}
              alt=''
              width={30}
              height={20}
            />
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileDropDown;
