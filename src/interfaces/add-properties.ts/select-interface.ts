// src/interfaces/add-properties.ts/select-interface.ts

// export interface SelectI
export interface SelectI {
  label?: string;
  placeholder?: string;
  icon?: string;
  className?: string;
  options: { label: string; value: string }[];
  name: string;
  value: string;
  setFieldValue?: (name: string, value: string | number) => void;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  required?: boolean;
}
