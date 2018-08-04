import { NotificationCategory } from './notification-category.enum';

export interface Notification {
  header: string;
  body: string;
  
  category: NotificationCategory;
}
