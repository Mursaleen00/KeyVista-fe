import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='grid md:p-12 p-6 gap-y-5'>
      <h1 className=' flex text-4xl font-semibold'>Privacy Policy</h1>
      <p className='text-sm'>
        This Privacy Policy outlines how Your Company/App Name collects, uses,
        maintains, and discloses information gathered from users of the Your App
        Name <br />
        mobile application App.
      </p>
      {/* Identification */}
      <div>
        <h1 className=' flex text-2xl font-semibold'>Information Collection</h1>
        {/* Paragraph */}
        <ul className='flex flex-col pl-6 gap-y-3 pt-2'>
          <li className='text-lg font-semibold items-center'>
            Personal Identification Information :{' '}
            <div className='text-sm font-normal'>
              We may collect personal identification information from users in
              various ways, including but not limited to when users visit our
              app, register on the app, subscribe to newsletters, fill out
              forms, and in connection with other activities, services,
              features, or resources we make available.
            </div>
          </li>

          <li className='text-lg font-semibold items-center'>
            Non-Personal Identification Information :{' '}
            <span className='text-sm font-normal'>
              We may collect non-personal identification information about users
              whenever they interact with our app. Non-personal identification
              information may include the type of device used, the operating
              system, the internet service providers utilized, and other similar
              information.
            </span>
          </li>
        </ul>
      </div>
      {/* Collected Information */}
      <div className='grid'>
        <h1 className=' text-2xl font-semibold'>
          How We Use Collected Information
        </h1>
        <ul>
          <li className='text-lg font-semibold items-center'>
            Personal Information :{' '}
            <div className='text-sm font-normal'>
              We may use personal information provided by users for the
              following purposes
            </div>
          </li>
          <ul>
            <li>To personalize user experience</li>
            <li> To improve our app</li>
            <li>To send periodic emails or notifications</li>
          </ul>
          <li className='text-lg font-semibold items-center'>
            Non-personal Information :{' '}
            <span className='text-sm font-normal'>
              We may use non-personal information collected to understand how
              users interact with our app and to improve user experience.
            </span>
          </li>
        </ul>
      </div>
      {/* Data Protection */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold'>Data Protection</h1>
        <li className='md:px-9'>
          We are committed to protecting the confidentiality of users personal
          information. We employ industry standard data collection, storage, and
          processing practices and security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of users
          personal information stored on our app.
        </li>
      </div>
      {/* Third-Party Services */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold'>Third-Party Services</h1>
        <li className='md:px-9'>
          We may use third-party services and applications within our app. Users
          may be directed to third-party sites or services that are not
          controlled by us. Users should review the privacy policies of these
          third-party sites before providing any personal information.
        </li>
      </div>
      {/* Sharing Personal Information */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold'>Sharing Personal Information</h1>
        <li className='md:px-9'>
          We do not sell trade or rent users personal identification information
          to others. We may share generic aggregated demographic information not
          linked to any personal identification information regarding visitors
          and users with our business partners trusted affiliates and
          advertisers.
        </li>
      </div>
      {/* Changes to This Privacy Policy */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold'>
          Changes to This Privacy Policy
        </h1>
        <li className='md:px-9'>
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
        <h1 className='text-2xl font-semibold'>
          Your Acceptance of These Terms
        </h1>
        <li className='md:px-9'>
          By using this app, you signify your acceptance of this policy. If you
          do not agree to this policy, please do not use our app. Your continued
          use of the app following the posting of changes to this policy will be
          deemed your acceptance of those changes.
        </li>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
