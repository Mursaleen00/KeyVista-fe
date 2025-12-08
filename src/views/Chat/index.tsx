// src/views/Chat/index.tsx
'use client';

// React Imports
import { useCallback, useState } from 'react';

// Type Imports
import { selectedUserT } from '@/types/chat-selected-user';

// Socket Imports
import { io } from 'socket.io-client';

// Components Imports
import ChatRoom from '../../components/chat/chat-room';
import ChatSidebar from '../../components/chat/chat-sidebar';

const ChatView = () => {
  // State
  const [selectedUser, setSelectedUser] = useState<selectedUserT>({
    id: 0,
    name: '',
    image: '',
  });

  // Socket
  const socketIO = io('http://localhost:8000', {
    query: { userId: '`your_user_id`' },
  });

  socketIO.on('connect', () => {
    console.log('Connected to server');
    socketIO.emit('joinChat', 'chat_id');
  });

  socketIO.on('receiveMessage', message => {
    console.log('New message:', message);
  });

  // Massage
  const addLastMessage = () => {
    // queryClient.invalidateQueries({
    //   queryKey: ['chats-by-id'],
    //   refetchType: 'all',
    // });
    // queryClient.invalidateQueries({
    //   queryKey: ['chats'],
    //   refetchType: 'all',
    // });
  };

  const onSend = useCallback(
    (message: string) => {
      socketIO.emit('sendMessage', {
        chatId: selectedUser.id,
        content: message,
      });

      addLastMessage();
    },
    [selectedUser, addLastMessage],
  );

  const handleBack = () => {
    setSelectedUser({
      id: 0,
      name: '',
      image: '',
    });
  };

  return (
    <div className='px-6 sm:px-10 md:px-14 xl:px-20 h-full'>
      <div className='w-full h-full bg-white shadow-md rounded-[20px] p-6'>
        {/* Title */}
        <h1 className='font-semibold text-[40px] text-heading'>Chat</h1>
        {/* Chat Sidebar */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          <ChatSidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          {/* Chat Room */}
          {selectedUser.name && (
            <ChatRoom
              handleSend={onSend}
              handleBack={handleBack}
              selectedUser={selectedUser}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatView;
