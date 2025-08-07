// src/views/Privacy-Policy/index.tsx
import React from 'react';

const PrivacyPolicyView = () => {
  return (
    <div className='flex flex-col px-3 sm:px-6 gap-y-5'>
      {/* Main Heading */}
      <h1 className='flex text-4xl font-semibold text-text-dark'>
        Privacy Policy
      </h1>
      {/* First Paragraph */}
      <p className='text-sm text-text-normal'>
        This Privacy Policy outlines how Your Company/App Name collects, uses,
        maintains, and discloses information gathered from users of the Your App
        Name mobile application App.
      </p>
      {/* Information Collection */}
      <div>
        <h1 className='text-2xl font-semibold text-text-light'>
          Information Collection
        </h1>
        {/* Paragraph */}
        {/* <ul className='flex flex-col pl-6 gap-y-3 pt-2'> */}
        <li className='text-lg font-semibold items-center text-text-light px-4 py-6'>
          Personal Identification Information :{' '}
          <span className='text-sm font-normal text-text-normal'>
            We may collect personal identification information from users in
            various ways, including but not limited to when users visit our app,
            register on the app, subscribe to newsletters, fill out forms, and
            in connection with other activities, services, features, or
            resources we make available.
          </span>
        </li>
        <li className='text-lg font-semibold items-center text-text-light px-4 pb-6'>
          Non-Personal Identification Information :{' '}
          <span className='text-sm font-normal text-text-normal'>
            We may collect non-personal identification information about users
            whenever they interact with our app. Non-personal identification
            information may include the type of device used, the operating
            system, the internet service providers utilized, and other similar
            information.
          </span>
        </li>
        {/* </ul> */}
      </div>
      {/* How We Use Collected Information */}
      <div className='flex flex-col gap-y-6'>
        <h1 className=' text-2xl font-semibold text-text-light'>
          How We Use Collected Information{' '}
        </h1>
        <li className='text-lg font-semibold items-center text-text-light px-4'>
          Personal Information :{' '}
          <span className='text-sm font-normal text-text-normal'>
            We may use personal information provided by users for the following
            purposes
          </span>
        </li>
        <div className='flex flex-col px-12'>
          <li>To personalize user experience</li>
          <li> To improve our app</li>
          <li>To send periodic emails or notifications</li>
        </div>
        <li className='text-lg font-semibold items-center px-4 text-text-light'>
          Non-personal Information :{' '}
          <span className='text-sm font-normal text-text-normal'>
            We may use non-personal information collected to understand how
            users interact with our app and to improve user experience.
          </span>
        </li>
      </div>
      {/* Data Protection */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Data Protection{' '}
        </h1>
        <li className='md:px-9 text-text-normal'>
          We are committed to protecting the confidentiality of users personal
          information. We employ industry standard data collection, storage, and
          processing practices and security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of users
          personal information stored on our app.
        </li>
      </div>
      {/* Third-Party Services */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Third-Party Services
        </h1>
        <li className='md:px-9 text-text-normal'>
          We may use third-party services and applications within our app. Users
          may be directed to third-party sites or services that are not
          controlled by us. Users should review the privacy policies of these
          third-party sites before providing any personal information.
        </li>
      </div>
      {/* Sharing Personal Information */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Sharing Personal Information
        </h1>
        <li className='md:px-9 text-text-normal'>
          We do not sell trade or rent users personal identification information
          to others. We may share generic aggregated demographic information not
          linked to any personal identification information regarding visitors
          and users with our business partners trusted affiliates and
          advertisers.
        </li>
      </div>
      {/* Changes to This Privacy Policy */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Changes to This Privacy Policy
        </h1>
        <li className='md:px-9 text-text-normal'>
          Your Company/App Name has the discretion to update this privacy policy
          at any time. Users are encouraged to frequently check this page for
          any changes to stay informed about how we are helping to protect the
          personal information collected. You acknowledge and agree that it is
          your responsibility to review this privacy policy periodically and
          become aware of modifications.
        </li>
      </div>
      {/* Your Acceptance of These Terms */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Your Acceptance of These Terms
        </h1>
        <li className='md:px-9 text-text-normal'>
          By using this app, you signify your acceptance of this policy. If you
          do not agree to this policy, please do not use our app. Your continued
          use of the app following the posting of changes to this policy will be
          deemed your acceptance of those changes.
        </li>
      </div>
      {/* End Privacy Policy */}
    </div>
  );
};

export default PrivacyPolicyView;
