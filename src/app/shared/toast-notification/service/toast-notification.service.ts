import { Injectable, ViewContainerRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ToastNotification } from '../toast-notification.model';


@Injectable()
export class ToastNotificationService {
  
  private sendNewNotification = new BehaviorSubject<ToastNotification>(null);
  newNotification             = this.sendNewNotification.asObservable();
  
  private sendNewSiblingsTopValue = new BehaviorSubject<ToastNotification[]>(null);
  newSiblingsTopValue = this.sendNewSiblingsTopValue.asObservable();
  
  notifications: ToastNotification[] = [];
  top: number = 0;
  
  constructor() { }
  
  show(notification: ToastNotification): void {
    notification.top = `${this.incrementTopValue()}px`;
    
    this.notifications.push({...notification});
    this.sendNewNotification.next(notification);
  }
  
  hide(id: number, container: ViewContainerRef): void {
    const notificationIndex = this.notifications.findIndex(notification => notification.id == id);
    
    this.notifications.splice(notificationIndex, 1);
    container.remove(notificationIndex);
    
    this.updateToastDistanceValue();
  }
  
  updateToastDistanceValue(): void {
    this.top = 0;
    
    this.notifications = this.notifications.map((notification, index) => {
      notification.top = `${this.incrementTopValue()}px`;
      return notification;
    });
    
    this.sendNewSiblingsTopValue.next(this.notifications);
  }
  
  incrementTopValue(): number {
    this.top += this.top == 0 ? 25 : 70;
    return this.top;
  }

}
