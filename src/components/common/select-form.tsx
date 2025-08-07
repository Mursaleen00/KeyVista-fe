// src/components/common/select-form.tsx

// Next & React Imports
import Image from 'next/image';

// Components Imports
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Interfaces Imports
import { SelectI } from '@/interfaces/add-properties.ts/select-interface';

const SelectForm = ({
  name,
  options,
  value,
  className,
  icon,
  label,
  setFieldValue,
  placeholder,
  disabled,
  error,
  touched,
  required,
}: SelectI) => {
  // is Error
  const isError = error && touched;
  return (
    // Select Form
    <Select
      value={value}
      name={name}
      onValueChange={v => setFieldValue?.(name, v)}
      disabled={disabled}
    >
      {/* inner Select Form */}
      <div className={`flex flex-col gap-y-1 ${className}`}>
        {/* Label */}
        <label className={`flex flex-col text-text-dark text-md`}>
          {label}
          {required && <span className='text-red'>*</span>}
        </label>
        {/* Select Trigger */}
        <SelectTrigger
          className={`flex justify-between w-full rounded-xl p-4 ${value ? 'text-text-dark' : 'text-text-normal'}
           ${isError && `!border-red`}`}
        >
          {/* Select Value Amd placeholder */}
          <SelectValue
            placeholder={value || placeholder}
            className='flex border border-yellow-400'
          />
          {icon && (
            <Image
              src={icon}
              alt='o'
              width={20}
              height={20}
            />
          )}
        </SelectTrigger>
      </div>
      {/* Select Content / options */}
      <SelectContent className='bg-white'>
        {options?.map((item, i) => (
          <SelectItem
            value={item.value}
            key={i}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
      {/* Error Message */}
      {isError && <p className='text-sm text-red'>{error}</p>}
    </Select>
  );
};

export default SelectForm;
