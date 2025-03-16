'use client';
import { useState } from 'react';
import ChatSidebar from './chat-sidebar';

type selectedUserT = {
  id: number;
  name: string;
  image: string;
};

const ChatView = () => {
  const [selectedUser, setSelectedUser] = useState<selectedUserT>({
    id: 0,
    name: '',
    image: '',
  });

  return (
    <div className='min-h-[84dvh] px-6 sm:px-10 md:px-14 xl:px-20 py-10 h-full'>
      <div className='w-full h-full bg-white shadow-md rounded-[20px] p-6 sm:p-10 md:p-14'>
        <h1 className='font-semibold text-[40px] text-heading'>Chat</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          <ChatSidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <div className='lg:col-span-2'></div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
