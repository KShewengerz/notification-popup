import { Injectable, ViewContainerRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ToastNotification } from '../toast-notification.model';


@Injectable()
export class ToastNotificationService {
  
  private sendNewNotification = new BehaviorSubject<ToastNotification>(null);
  newNotification             = this.sendNewNotification.asObservable();
  
  notifications: ToastNotification[] = [];
  
  constructor() { }
  
  show(notification: ToastNotification): void {
    this.notifications.push({...notification});
    this.sendNewNotification.next(notification);
  }
  
  hide(id: number, container: ViewContainerRef): void {
    const notificationIndex = this.notifications.findIndex(notification => notification.id == id);
    container.remove(notificationIndex);
  }

}
