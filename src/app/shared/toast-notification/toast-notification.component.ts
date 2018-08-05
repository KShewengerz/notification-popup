import { Component, OnInit } from '@angular/core';

import { ToastNotification, ToastNotificationService } from './index';


@Component({
  selector: 'app-toast-notification',
  template: `<app-notification></app-notification>`,
  styles: [``]
})
export class ToastNotificationComponent implements OnInit {
  
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

}
