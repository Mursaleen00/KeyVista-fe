// src/constant/layouts-data/navbar-icon-data.tsx
'use client';
// Icons Imports
import favorite from '@/../public/navbar/favorite.svg';
import logout from '@/../public/navbar/logout.svg';
import notification from '@/../public/navbar/notification.svg';
import profile from '@/../public/navbar/profile.svg';

// Types Import
import {
  IconT,
  notificationT,
  PagesT,
  profileListT,
  propertyListT,
} from '@/types/navbar-types';

// Urls Import
import { urls } from '../router/routes';

// Images Imports
import changePassword from '@/../public/icons/change-password.svg';
import myProperties from '@/../public/icons/my-properties.svg';
import chat from '@/../public/navbar/chat.svg';
import home from '@/../public/navbar/home.svg';
import map from '@/../public/navbar/map.svg';
import properties from '@/../public/navbar/properties.svg';
import moment from 'moment';

//  ---------------------------------- Export NavbarIconData  ---------------------------------
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
    name: 'notification',
  },
  { icon: profile.src, name: 'profile' },
  { icon: logout.src, link: urls.chat, name: 'logout', width: 30, hight: 40 },
];

// ----------------------------- Export NavbarPagesData ----------------------------
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

//  ---------------------------------- Export Property lists Data -------------------------------
export const propertyList: propertyListT[] = [
  { name: 'Rent', path: urls.rentProperties, value: 'rent' },
  { name: 'Buy', path: urls.buyProperties, value: 'buy' },
];

// ------------------------------------- Export profile List Data -----------------------------------
export const profileList: profileListT[] = [
  { name: 'Profile', path: urls.profile, img: profile.src, value: '/profile' },
  {
    name: 'Change Password',
    path: urls.changePassword,
    img: changePassword.src,
    value: '/change-password',
  },
  {
    name: 'My Property',
    path: urls.myProperties,
    img: myProperties.src,
    value: '/my-properties',
  },
];

// ------------------------------------- Export Notification List Data ---------------------------------
export const notificationList: notificationT[] = [
  {
    name: 'salemszdv',
    massage:
      'You have a new message You have a new messageYou have a new messageYou have a new messageYou have a new messageYou have a new messageYou have a new message',
    path: urls.notification,
    img: profile.src,
    value: 'salem',
    time: moment().format('LT'),
  },
  {
    name: 'Sameer',
    massage:
      'You have a new property You have a new property You have a new property You have a new property You have a new property  property property property property property property',
    path: urls.notification,
    img: profile.src,
    value: 'Sameer',
    time: moment().format('LT'),
  },
  {
    name: 'Ali',
    massage:
      'You have a new property You have a new property You have a new property You have a new property You have a new property  property property property property property property',
    path: urls.notification,
    img: profile.src,
    value: 'Ali',
    time: moment().format('LT'),
  },
  {
    name: 'Adnan',
    massage:
      'You have a new property You have a new property You have a new property You have a new property You have a new property  property property property property property property',
    path: urls.notification,
    img: profile.src,
    value: 'Adnan',
    time: moment().format('LT'),
  },
  {
    name: 'Razajdfvgbjshbvjshfbvjsh',
    massage:
      'You have a new property You have a new property You have a new property You have a new property You have a new property  property property property property property property',
    path: urls.notification,
    img: profile.src,
    value: 'Raza',
    time: moment().format('LT'),
  },
  {
    name: 'Muzammil',
    massage: 'You have a new property You ',
    path: urls.notification,
    img: profile.src,
    value: 'Muzammil',
    time: moment().format('LT'),
  },
];
