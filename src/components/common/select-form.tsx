import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectI } from '@/interfaces/add-properties.ts/select-interface';
import Image from 'next/image';

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
}: SelectI) => {
  return (
    <Select
      value={value}
      name={name}
      onValueChange={v => setFieldValue?.(name, v)}
      disabled={disabled}
    >
      <div className={`flex flex-col  ${className}`}>
        <label className='flex flex-col text-text-dark text-md'> {label}</label>
        <SelectTrigger
          className={`flex justify-between w-full rounded-lg p-4 ${placeholder ? 'text-text-light' : value ? 'text-text-dark ' : 'text-text-light'}`}
        >
          <SelectValue placeholder={value || placeholder} />
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
    </Select>
  );
};

export default SelectForm;
