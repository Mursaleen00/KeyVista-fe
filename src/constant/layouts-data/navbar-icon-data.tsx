import profile from '@/../public/navbar/profile.svg';
import logout from '@/../public/navbar/logout.svg';
import notification from '@/../public/navbar/notification.svg';
import favorite from '@/../public/navbar/favorite.svg';

// import favorite from "@/../public/navbarIcon/favorite.svg";
// import logout from "@/../public/navbarIcon/logout.svg";
// import notification from "@/../public/navbarIcon/notification.svg";
// import profile from "@/../public/navbarIcon/profile.svg";

import { IconT } from '@/types/navbar-types';
import { urls } from '../routers-data';

export const NavbarIconData: IconT[] = [
  { icon: favorite.src, link: urls.favorite },
  { icon: notification.src, link: urls.notification },
  { icon: profile.src, link: urls.notification },
  { icon: logout.src, link: urls.chat },
];
