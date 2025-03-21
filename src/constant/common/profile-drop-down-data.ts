import { urls } from '../routers-data';
import profile from '@/../public/images/profile.webp';
import myProperties from '@/../public/icons/myProperties.svg';
import changePassword from '@/../public/icons/changePassword.svg';

export const ProfileDropDownData = [
  { icon: profile.src, text: 'Profile', link: urls.profile },
  { icon: myProperties.src, text: 'My Properties', link: urls.myProperties },
  {
    icon: changePassword.src,
    text: 'Change Password',
    link: urls.changePassword,
  },
];
