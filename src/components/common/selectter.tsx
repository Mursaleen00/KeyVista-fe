// import * as React from 'react';
// import { useState } from 'react';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import Image from 'next/image';
// import { SelectI } from '@/interfaces/common/select-interface';

// const AllSelect = ({
//   name,
//   value,
//   onChange,
//   onBlur,
//   options,
//   error,
//   label,
//   placeholder,
//   icon,
//   className,
//   disabled = false,
// }: SelectI) => {
//   const [selected, setSelected] = useState('');

//   return (
//     <Select
//       value={selected}
//       onValueChange={setSelected}
//       disabled={disabled}
//       name={name}
//       // value={value}
//       // onChange={onChange}
//       // onBlur={onBlur}
//     >
//       <div className={`flex flex-col gap-y-1 w-full ${className}`}>
//         <label
//           className={`flex text-sm text-text-dark ${error && 'text-red text-lg'}`}
//         >
//           {label}
//         </label>

//         <SelectTrigger
//           className={`flex rounded-xl py-7 text-xl text-text-dark ${error && 'border-red'}`}
//           value={value}
//           // onChange={onChange}
//           onBlur={onBlur}
//         >
//           <div className='text-text flex text-sm'>
//             <SelectValue placeholder={placeholder} />
//           </div>
//           <Image
//             src={icon || ''}
//             alt=''
//             width={20}
//             height={50}
//           />
//         </SelectTrigger>
//         <SelectContent className='grid bg-white'>
//           <SelectGroup>
//             <div className='text-text-dark'>
//               {options.map(option => (
//                 <SelectItem
//                   key={option.value}
//                   value={option.value}
//                   className='p-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 rounded-md text-black border-primary'
//                 >
//                   {option.label}
//                 </SelectItem>
//               ))}
//             </div>
//           </SelectGroup>
//         </SelectContent>
//         {error && <p className='text-red text-sm '>{error}</p>}
//       </div>
//     </Select>
//   );
// };

// export default AllSelect;
