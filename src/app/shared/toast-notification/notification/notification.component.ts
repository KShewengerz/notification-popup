import { Component, OnInit } from '@angular/core';

import { ToastNotification, ToastNotificationService } from '../index';


@Component({
  moduleId    : module.id,
  selector    : 'app-notification',
  templateUrl : 'notification.component.html',
  styleUrls   : ['notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications: ToastNotification[] = [];
  
  constructor(private toastNotificationService: ToastNotificationService) { }

  ngOnInit() {
    this.onNewNotification();
  }
  
  onNewNotification(): void {
    this.toastNotificationService
      .newNotification
      .subscribe(notifications => notifications ? this.notifications = notifications : null);
  }
  
  closeNotification(): void {
  
  }

}
