interface User {
  id: number;
  name: string;
  image: string;
}

export interface ChatHeadProps {
  selectedUser: User;
  setSelectedUser: React.Dispatch<React.SetStateAction<User>>;
}

export interface ChatMRoomProps {
  handleBack: () => void;
  selectedUser: User;
}

export interface MessageProps {
  message: string;
  name: string;
  timestamp: string;
  profile: string;
  isMyMessage: boolean;
}
