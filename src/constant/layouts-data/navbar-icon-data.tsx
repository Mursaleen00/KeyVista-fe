// src/constant/layouts-data/navbar-icon-data.tsx

// Icons Imports
import profile from '@/../public/navbar/profile.svg';
import logout from '@/../public/navbar/logout.svg';
import notification from '@/../public/navbar/notification.svg';
import favorite from '@/../public/navbar/favorite.svg';

// Types Import
import { IconT } from '@/types/navbar-types';

// Urls Import
import { urls } from '../routes';

// NavbarIconData Export
export const NavbarIconData: IconT[] = [
  { icon: favorite.src, link: urls.favorite, name: 'favorite' },
  { icon: notification.src, link: urls.notification, name: 'notification' },
  { icon: profile.src, name: 'profile' },
  { icon: logout.src, link: urls.chat, name: 'logout' },
];
