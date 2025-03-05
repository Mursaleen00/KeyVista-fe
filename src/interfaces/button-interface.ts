export interface ButtonInterface {
  text: string;
  isOutline?: boolean;
  className?: string;
  icon?: string;
  onclick?: () => void;
  type?: "submit" | "button";
}
