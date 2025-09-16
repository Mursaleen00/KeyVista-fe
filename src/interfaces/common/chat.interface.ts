// src/interfaces/common/chat.interface.ts

// -------------------------------- user --------------------------------
interface User {
  id: number;
  name: string;
  image: string;
}

// -------------------------------- chat head --------------------------------
export interface ChatHeadProps {
  selectedUser: User;
  setSelectedUser: React.Dispatch<React.SetStateAction<User>>;
}

// -------------------------------- chat room --------------------------------
export interface ChatMRoomProps {
  handleBack: () => void;
  selectedUser: User;
  handleSend: React.Dispatch<string>;
}

// -------------------------------- Message --------------------------------
export interface MessageProps {
  message: string;
  name: string;
  timestamp: string;
  profile: string;
  isMyMessage: boolean;
}
