export interface SelectI {
  label?: string;
  placeholder?: string;
  icon: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
}
