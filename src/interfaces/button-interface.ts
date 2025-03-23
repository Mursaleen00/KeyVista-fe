//  src/interfaces/button-interface.tsx

// interfaces Export
export interface ButtonInterface {
  text: string;
  isOutline?: boolean;
  className?: string;
  icon?: string;
  onClick?: () => void | string | object;
  type?: 'submit' | 'button';
}
