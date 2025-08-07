// src/views/Terms-And-Conditions/index.tsx

import * as React from 'react';
import Link from 'next/link';

const TermsAndConditionsView = () => {
  return (
    <div className='flex flex-col px-3 sm:px-7 md:px-12 gap-y-5'>
      {/* Main Heading */}
      <h1 className='flex text-4xl font-semibold text-text-dark'>
        Terms and Condition
      </h1>
      {/* Acceptance of Terms */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Acceptance of Terms
        </h1>
        <p className='text-sm text-text-normal'>
          By accessing or using the Terms and Conditions mobile application Key
          vista you agree to be bound by these Terms and Conditions and all
          applicable laws and regulations. If you do not agree with any of these
          terms, you are prohibited from using or accessing this app.
        </p>
      </div>
      {/* Use License */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>Use License</h1>
        <p className='text-sm text-text-normal'>
          Permission is granted to temporarily download one copy of the App for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title. This license does not allow for:
        </p>
      </div>
      <div className='flex flex-col px-7 text-text-normal'>
        <li>Modification or copying of the App materials.</li>
        <li>
          Use of the App materials for any commercial purpose or for any public
          display (commercial or non-commercial).
        </li>
        <li>
          Attempt to decompile or reverse engineer any software contained within
          the App.
        </li>
      </div>
      {/*  User Accounts */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          User Accounts
        </h1>
        <p className='text-sm text-text-normal'>
          Some features of the App may require creating an account. You are
          responsible for maintaining the confidentiality of your account and
          password and for restricting access to your device. You agree to
          accept responsibility for all activities that occur under your account
          or password.
        </p>
      </div>
      {/* User Conduct */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>User Conduct</h1>
        <p className='text-sm text-text-normal'>
          By using the App, you agree not to::
        </p>
      </div>
      <div className='flex flex-col px-7 text-text-normal'>
        <li>
          Use the App in any way that may impair its functionality or interfere
          with other users’ access to the App.
        </li>
        <li>Use the App for any unlawful purpose.</li>
        <li>
          Attempt to gain unauthorized access to any part of the App or its
          related systems or networks.
        </li>
      </div>
      {/*  Intellectual Property Rights */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Intellectual Property Rights
        </h1>
        <p className='text-sm text-text-normal'>
          The App and its original content, features, and functionality are
          owned by key vista and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>
      </div>
      {/* Limitations */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>Limitations</h1>
        <p className='text-sm text-text-normal'>
          In no event shall key vista, its suppliers, or its licensors be liable
          for any damages arising out of the use or inability to use the App,
          even if key vista or an authorized representative has been notified
          orally or in writing of the possibility of such damage.
        </p>
      </div>
      {/* Privacy */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>Privacy</h1>
        <p className='text-sm text-text-normal'>
          Use of the App is also governed by our Privacy Policy, which can be
          found{' '}
          {
            <Link
              href='/privacy-policy'
              className='text-text-dark text-lg'
            >
              privacy policy
            </Link>
          }{' '}
          By using the App, you agree to the terms of our Privacy Policy.
        </p>
      </div>
      {/* Modifications */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Modifications
        </h1>
        <p className='text-sm text-text-normal'>
          key vista may revise these Terms and Conditions at any time without
          notice. By using this App, you are agreeing to be bound by the
          then-current version of these Terms and Conditions.
        </p>
      </div>
      {/* Governing Law */}
      <div className='flex flex-col gap-y-6'>
        <h1 className='text-2xl font-semibold text-text-light'>
          Governing Law
        </h1>
        <p className='text-sm text-text-normal'>
          These terms and conditions are governed by and construed in accordance
          with the laws of pakistan and you irrevocably submit to the exclusive
          jurisdiction of the courts in that jurisdiction.
        </p>
      </div>
      {/* End terms and condition */}
    </div>
  );
};

export default TermsAndConditionsView;
