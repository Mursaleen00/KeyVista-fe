// src/constant/notification/notification-data.ts

import profile from '@/../public/navbar/profile.svg';
import { Notification } from '@/interfaces/notification/notification-interfaces';
import moment from 'moment';

export const notifications: Array<Notification> = [
  {
    _id: 'notif1',
    userId: 'user123',
    isRead: false,
    message:
      'You have a new follower! You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower! You have a new follower! You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower! You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!  2025-08-07T10:15:30.000Z',
    sender: {
      id: 'sender001',
      name: 'You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!  2025-08-07T10:15:30.000Z',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-07T10:15:30.000Z',
    __v: 0,
  },
  {
    _id: 'notif1',
    userId: 'user123',
    isRead: false,
    message:
      'You have a new follower! You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower! You have a new follower! You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower! You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!You have a new follower!',
    sender: {
      id: 'sender001',
      name: 'Ali Khan',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-07T11:15:30.000Z',
    __v: 0,
  },
  {
    _id: 'notif1',
    userId: 'user123',
    isRead: false,
    message: 'You have a new follower!',
    sender: {
      id: 'sender001',
      name: 'Ali Khan',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-07T12:15:30.000Z',
    __v: 0,
  },
  {
    _id: 'notif2',
    userId: 'user123',
    isRead: true,
    message: 'Your post has been liked by Sarah.',
    sender: {
      id: 'sender002',
      name: 'Sarah Ahmed',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-06T13:00:00.000Z',
    __v: 0,
  },
  {
    _id: 'notif2',
    userId: 'user123',
    isRead: true,
    message: 'Your post has been liked by Sarah.',
    sender: {
      id: 'sender002',
      name: 'Sarah Ahmed',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-06T14:00:00.000Z',
    __v: 0,
  },
  {
    _id: 'notif2',
    userId: 'user123',
    isRead: true,
    message: 'Your post has been liked by Sarah.',
    sender: {
      id: 'sender002',
      name: 'Sarah Ahmed',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-06T15:00:00.000Z',
    __v: 0,
  },
  {
    _id: 'notif2',
    userId: 'user123',
    isRead: true,
    message: 'Your post has been liked by Sarah.',
    sender: {
      id: 'sender002',
      name: 'Sarah Ahmed',
      profilePicture: profile.src,
    },
    createdAt: moment().format('LT'),
    updatedAt: '2025-08-06T16:00:00.000Z',
    __v: 0,
  },
  {
    _id: 'notif3',
    userId: 'user123',
    isRead: false,
    message: 'Comment added to your photo.',
    sender: {
      id: 'sender003',
      name: 'Omar Farooq',
      profilePicture: profile.src,
    },
    createdAt: moment().subtract(1, 'days').calendar(),
    updatedAt: '2025-08-05T09:25:50.000Z',
    __v: 0,
  },
  {
    _id: 'notif4',
    userId: 'user123',
    isRead: true,
    message: 'You’ve been tagged in a post.',
    sender: {
      id: 'sender004',
      name: 'Maria Iqbal',
      profilePicture: profile.src,
    },
    createdAt: moment().subtract(1, 'days').calendar(),
    updatedAt: '2025-08-04T13:11:30.000Z',
    __v: 0,
  },
];
