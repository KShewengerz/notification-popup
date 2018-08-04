import { ToastNotificationCategory } from './toast-notification-category.enum';


export interface ToastNotification {
  id       : number;
  header   : string;
  body     : string;
  
  category : ToastNotificationCategory;
}
