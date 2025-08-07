// src/interfaces/navbar-interface.ts

// Types Imports
import { Dispatch, ReactNode } from 'react';

// --------------------------------------- Export Navbar Props ---------------------------------
export interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
//  --------------------------------------- Export Notification Dropdown Props ---------------------------------
export interface NotificationDropdownProps {
  trigger: ReactNode;
  items: Array<{
    name: string;
    value: string;
    massage?: string;
    time?: string;
  }>;
  onClick?: (selected: string) => void;
  className?: string;
  img?: string[];
  selectedValue?: string;
}

// --------------------------------------- Export Dropdown Props ---------------------------------
export interface DropdownProps {
  trigger: ReactNode;
  items: Array<{
    name: string;
    value: string;
  }>;
  onClick?: (selected: string) => void;
  className?: string;
  img?: string[];
  selectedValue?: string;
}
