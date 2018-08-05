import { ToastNotificationCategory } from './toast-notification-category.enum';


/**
 * An interface for standard ToastNotification fields
 *
 */
export interface ToastNotification {
  id       : number;
  header   : string;
  body     : string;
  
  category : ToastNotificationCategory;
  
  top     ?: string;
}
