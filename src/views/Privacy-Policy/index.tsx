import SmallTitle from '@/components/common/small-title';
import Title from '@/components/common/title';
import React from 'react';

const PrivacyPolicyView = () => {
  return (
    <div className='grid px-2 sm:px-5 py-9 md:p-9'>
      <Title text='Privacy Policy' />
      <p className='flex text-sm text-text-light'>
        This Privacy Policy outlines how Agile Space collects, uses, maintains,
        and discloses information gathered from users of the Agile Space mobile
        application App.
      </p>
      <div>
        <SmallTitle text='Information Collection' />
        <ul>
          <li className='flex'>
            <SmallTitle
              text='Personal Identification Information :'
              className='flex text-md'
            />
            <p className='flex text-sm text-text-light'>
              We may collect personal identification information from users in
              various ways, including but not limited to when users visit our
              app, register on the app, subscribe to newsletters, fill out
              forms, and in connection with other activities, services,
              features, or resources we make available
            </p>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;
