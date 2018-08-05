import { Component, OnChanges, Input } from '@angular/core';

import { ToastNotification, ToastNotificationCategory, ToastNotificationService } from '../index';


@Component({
  moduleId    : module.id,
  selector    : 'app-notification',
  templateUrl : 'notification.component.html',
  styleUrls   : ['notification.component.scss']
})
export class NotificationComponent implements OnChanges {
  
  @Input() notification: ToastNotification;
  
  category: typeof ToastNotificationCategory = ToastNotificationCategory;
  notificationCategory: string;
  
  constructor(private toastNotificationService: ToastNotificationService) { }
  
  ngOnChanges(): void {
    if (this.notification) this.notificationCategory = this.category[this.notification.category];
  }

}
