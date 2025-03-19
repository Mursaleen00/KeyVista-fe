import { PagesT } from '@/types/navbar-types';
import { urls } from '../routers-data';
import home from '@/../public/navbar/home.svg';
import chat from '@/../public/navbar/chat.svg';
import properties from '@/../public/navbar/properties.svg';
import map from '@/../public/navbar/map.svg';

export const NavbarPagesData: PagesT[] = [
  {
    icon: home.src,
    name: 'Home',
    link: urls.home,
  },
  {
    icon: properties.src,
    name: 'Rent Properties',
    link: urls.rentProperties,
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
