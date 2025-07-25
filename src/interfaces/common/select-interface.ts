export interface SelctI {
  name: string;
  label?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  icon?: string;
  value?: string;
  error?: string;
  touched?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
}
export interface SectI {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  options: { label: string; value: string }[];
  onChange?: (e: { target: { name: string; value: string } }) => void;
  onBlur?: () => void; // optional, in case you want to handle blur later
}
export interface SelectI {
  label?: string;
  placeholder?: string;
  icon?: string;
  className?: string;
  options: { label: string; value: string }[];
  disabled?: boolean;
}
