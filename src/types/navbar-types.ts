// src/types/navbar-types.ts

// =================================== Export IconT ===================================
export type IconT = {
  link?: string;
  icon: string;
  name: string;
  width?: number;
  hight?: number;
};

// =================================== Export PagesT ===================================
export type PagesT = {
  link?: string;
  name: string;
  icon?: string;
};

// =================================== Export PropertiesT ===================================
export type PropertiesT = {
  label?: string;
  path?: string;
};

// =================================== Export propertyListT ===================================
export type propertyListT = {
  name: string;
  path: string;
  value: string;
};

// =================================== Export profileListT ===================================
export type profileListT = {
  name: string;
  path: string;
  img: string;
  value: string;
};

// =================================== Export notificationT ===================================
export type notificationT = {
  name: string;
  massage: string;
  path?: string;
  img: string;
  value: string;
  time?: string;
};
