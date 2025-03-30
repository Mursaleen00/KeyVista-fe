// 'use client';

// import * as Select from '@radix-ui/react-select';
// import Image from 'next/image';
// import { useState } from 'react';

// const FilterSelect = ({ label, placeholder, icon, options }) => {
//   const [selected, setSelected] = useState('');

//   return (
//     <div className='w-full text-black'>
//       <label className='block text-black mb-1'>{label}</label>

//       <Select.Root
//         value={selected}
//         onValueChange={setSelected}
//       >
//         <Select.Trigger className='relative flex items-center border border-border rounded-xl p-[15px] w-full bg-white h-[57px]'>
//           <div className='absolute text-text'>
//             <Select.Value placeholder={placeholder} />
//           </div>

//           <Select.Icon className='absolute right-4'>
//             {icon && (
//               <Image
//                 src={icon}
//                 alt=''
//                 width={25}
//               />
//             )}
//           </Select.Icon>
//         </Select.Trigger>

//         <Select.Portal>
//           <Select.Content className='bg-white border shadow-md rounded-lg'>
//             <Select.Viewport className='p-1 text-black'>
//               <div className='text-black'>
//                 {options.map(option => (
//                   <Select.Item
//                     key={option.value}
//                     value={option.value}
//                     className='p-2 cursor-pointer flex justify-between items-center hover:bg-gray-100 rounded-md text-black border-primary'
//                   >
//                     <Select.ItemText>{option.label}</Select.ItemText>
//                   </Select.Item>
//                 ))}
//               </div>
//             </Select.Viewport>
//           </Select.Content>
//         </Select.Portal>
//       </Select.Root>
//     </div>
//   );
// };

// export default FilterSelect;
