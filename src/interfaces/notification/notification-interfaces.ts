// src/interfaces/notification/notification-interfaces.ts

// --------------------------- NotificationI ---------------------------
export interface NotificationI {
  _id: string;
  userId: string;
  isRead: boolean;
  message: string;
  sender: SenderI;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// --------------------------- SenderI ---------------------------
export interface SenderI {
  id: string;
  name: string;
  profilePicture: string;
}
