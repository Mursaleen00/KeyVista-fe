'use client';
import { selectedUserT } from '@/types/chat-selected-user';
// import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { io } from 'socket.io-client';
import ChatRoom from '../../components/chat/chat-room';
import ChatSidebar from '../../components/chat/chat-sidebar';

const ChatView = () => {
  const [selectedUser, setSelectedUser] = useState<selectedUserT>({
    id: 0,
    name: '',
    image: '',
  });
  const socketIO = io('http://localhost:3000', {
    query: { userId: 'your_user_id' },
  });

  socketIO.on('connect', () => {
    console.log('Connected to server');
    socketIO.emit('joinChat', 'chat_id');
  });

  socketIO.on('receiveMessage', message => {
    console.log('New message:', message);
  });

  // const queryClient = useQueryClient();

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
    <div className='min-h-[84dvh] px-6 sm:px-10 md:px-14 xl:px-20 py-10 h-full'>
      <div className='w-full h-full bg-white shadow-md rounded-[20px] p-6'>
        <h1 className='font-semibold text-[40px] text-heading'>Chat</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          <ChatSidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
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
