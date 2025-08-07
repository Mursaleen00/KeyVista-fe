export interface Notification {
  _id: string;
  userId: string;
  isRead: boolean;
  message: string;
  sender: Sender;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Sender {
  id: string;
  name: string;
  profilePicture: string;
}
