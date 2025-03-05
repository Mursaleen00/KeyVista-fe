import favorite from "@/../public/icons/favorite.png";
import logout from "@/../public/icons/logout.png";
import notification from "@/../public/icons/notification.png";
import { IconT } from "@/types/navbar-icon-icon";
import { urls } from "../urls-data";

export const NavbarData: IconT[] = [
  { icon: favorite.src, link: urls.favorite },
  { icon: notification.src, link: urls.notification },
  { icon: logout.src, link: urls.chat },
];
