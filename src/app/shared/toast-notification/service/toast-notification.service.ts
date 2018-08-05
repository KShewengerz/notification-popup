import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ToastNotification } from '../toast-notification.model';


@Injectable()
export class ToastNotificationService {
  
  private sendNewNotification = new BehaviorSubject<ToastNotification>(null);
  newNotification             = this.sendNewNotification.asObservable();
  
  notifications: ToastNotification[] = [];
  
  constructor() { }
  
  show(notification: ToastNotification): void {
    this.sendNewNotification.next(notification);
  }
  
  hide(id: number): void {
    const notificationIndex = this.notifications.findIndex(notification => notification.id == id);
    this.notifications.splice(notificationIndex, 1);
  }

}
