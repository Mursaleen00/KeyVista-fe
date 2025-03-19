import { MessageProps } from '@/interfaces/chat.interface';
import moment from 'moment';
import React from 'react';
import Avatar from '../common/avatar';

const Message: React.FC<MessageProps> = ({
  isMyMessage,
  message,
  name,
  timestamp,
  profile,
}) => {
  return (
    <div>
      <div
        className={`${isMyMessage ? 'flex flex-row-reverse' : 'flex'} gap-x-3`}
      >
        <Avatar avatar={profile} />
        <div
          className={`${isMyMessage ? 'bg-primary text-white' : 'text-heading'} flex flex-col gap-y-2 shadow-md py-2 px-4 rounded-lg w-full sm:max-w-[50%] md:max-w-full lg:max-w-[50%] relative`}
        >
          <p className='font-medium'>{name}</p>
          <p>{message}</p>
          <p
            className={`absolute ${isMyMessage ? 'right-0' : 'left-0'} -bottom-5 text-text-light font-medium text-xs`}
          >
            {moment(timestamp).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
