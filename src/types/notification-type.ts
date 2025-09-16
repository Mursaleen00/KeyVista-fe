// src/types/notification-type.ts

// Interface Import
import { NotificationI } from '@/interfaces/notification/notification-interfaces';

// ------------------------- notificationT --------------------------
export type notificationT = {
  title: string;
  data: NotificationI[];
};
