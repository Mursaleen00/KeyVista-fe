// src/constant/layouts-data/navbar-icon-data.tsx
'use client';
// Icons Imports
import profile from '@/../public/navbar/profile.svg';
import logout from '@/../public/navbar/logout.svg';
import notification from '@/../public/navbar/notification.svg';
import favorite from '@/../public/navbar/favorite.svg';

// Types Import
import { IconT } from '@/types/navbar-types';
import { PagesT } from '@/types/navbar-types';

// Urls Import
import { urls } from '../router/routes';

// Images Imports
import home from '@/../public/navbar/home.svg';
import chat from '@/../public/navbar/chat.svg';
import properties from '@/../public/navbar/properties.svg';
import map from '@/../public/navbar/map.svg';
import changePassword from '@/../public/icons/change-password.svg';
import myProperties from '@/../public/icons/my-properties.svg';

// NavbarIconData Export
export const NavbarIconData: IconT[] = [
  {
    icon: favorite.src,
    link: urls.favorite,
    name: 'favorite',
    width: 50,
    hight: 50,
  },
  {
    icon: notification.src,
    link: urls.notification,
    name: 'notification',
    width: 50,
    hight: 50,
  },
  { icon: profile.src, name: 'profile' },
  { icon: logout.src, link: urls.chat, name: 'logout', width: 30, hight: 40 },
];

// Export NavbarPagesData
export const NavbarPagesData: PagesT[] = [
  {
    icon: home.src,
    name: 'Home',
    link: urls.home,
  },
  {
    icon: properties.src,
    name: 'Properties',
  },
  {
    icon: map.src,
    name: 'Map',
    link: urls.map,
  },
  {
    icon: chat.src,
    name: 'Chat',
    link: urls.chat,
  },
];

//  lists data
export const propertyList: { label: string; path: string }[] = [
  { label: 'Rent', path: urls.rentProperties },
  { label: 'Buy', path: urls.buyProperties },
];
export const profileList: { label: string; path: string; img: string }[] = [
  { label: 'Profile', path: urls.profile, img: profile.src },
  {
    label: 'Change Password',
    path: urls.changePassword,
    img: changePassword.src,
  },
  { label: 'My Property', path: urls.myProperties, img: myProperties.src },
];
