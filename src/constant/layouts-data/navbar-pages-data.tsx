// src/constant/layouts-data/navbar-pages-data.tsx

// Images Imports
import home from '@/../public/navbar/home.svg';
import chat from '@/../public/navbar/chat.svg';
import properties from '@/../public/navbar/properties.svg';
import map from '@/../public/navbar/map.svg';

// Types Import
import { PagesT } from '@/types/navbar-types';

import { urls } from '../router/routes';

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
