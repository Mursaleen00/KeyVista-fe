export interface ButtonInterface {
  text: string;
  isOutline?: boolean;
  className?: string;
  icon?: string;
  onClick?: () => void | string | object;
  type?: 'submit' | 'button';
}
