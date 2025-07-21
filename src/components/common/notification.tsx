// 'use client';

// import React, { useState } from 'react';
// import moment from 'moment';

// interface Notification {
//   id: string;
//   name: string;
//   profile: string;
//   message: string;
//   timestamp: string;
// }

// const notifications: Notification[] = [
//   {
//     id: '1',
//     name: 'Nicolas Bolek',
//     profile: '/avatar1.png',
//     message: 'Send you a message',
//     timestamp: moment().toISOString(),
//   },
//   {
//     id: '2',
//     name: 'Nicolas Bolek',
//     profile: '/avatar2.png',
//     message:
//       'Hey Sameer, this is a longer message that will be trimmed initially and shown fully when you click...',
//     timestamp: moment().subtract(1, 'day').toISOString(),
//   },
// ];

// const groupByDate = (list: Notification[]) => {
//   const today = moment().startOf('day');
//   const yesterday = moment().subtract(1, 'day').startOf('day');

//   return list.reduce(
//     (acc, item) => {
//       const itemDate = moment(item.timestamp).startOf('day');

//       if (itemDate.isSame(today)) acc.today.push(item);
//       else if (itemDate.isSame(yesterday)) acc.yesterday.push(item);
//       else acc.older.push(item);

//       return acc;
//     },
//     { today: [], yesterday: [], older: [] } as {
//       today: Notification[];
//       yesterday: Notification[];
//       older: Notification[];
//     },
//   );
// };

// const Notifications = () => {
//   const grouped = groupByDate(notifications);

//   const renderSection = (title: string, items: Notification[]) => (
//     <section className='mb-8'>
//       <h2 className='text-lg sm:text-xl font-semibold mb-4'>{title}</h2>
//       <ul className='space-y-4'>
//         {items.map(({ id, name, profile, message, timestamp }) => (
//           <NotificationItem
//             key={id}
//             name={name}
//             profile={profile}
//             message={message}
//             timestamp={timestamp}
//           />
//         ))}
//       </ul>
//     </section>
//   );

//   return (
//     <div className='w-full'>
//       <h1 className='text-xl sm:text-2xl font-bold mb-6'>Notification</h1>
//       {grouped.today.length > 0 && renderSection('Today', grouped.today)}
//       {grouped.yesterday.length > 0 &&
//         renderSection('Yesterday', grouped.yesterday)}
//       {grouped.older.length > 0 && renderSection('Earlier', grouped.older)}
//     </div>
//   );
// };

// const NotificationItem = ({
//   name,
//   profile,
//   message,
//   timestamp,
// }: {
//   name: string;
//   profile: string;
//   message: string;
//   timestamp: string;
// }) => {
//   const [showFull, setShowFull] = useState(false);
//   const isLong = message.length > 60;

//   return (
//     <li className='flex items-start gap-3 sm:gap-4'>
//       <img
//         src={profile}
//         alt={name}
//         className='w-10 h-10 rounded-full object-cover'
//       />
//       <div className='flex-grow text-sm sm:text-base'>
//         <p className='text-gray-800'>
//           <span className='font-medium'>{name}</span> purchased{' '}
//           {isLong && !showFull ? (
//             <>
//               {message.slice(0, 60)}...
//               <button
//                 onClick={() => setShowFull(true)}
//                 className='text-blue-500 ml-1'
//               >
//                 Show more
//               </button>
//             </>
//           ) : (
//             message
//           )}
//         </p>
//       </div>
//       <span className='text-xs text-gray-500 whitespace-nowrap min-w-[60px]'>
//         {moment(timestamp).format('hh:mm A')}
//       </span>
//     </li>
//   );
// };

// export default Notifications;
