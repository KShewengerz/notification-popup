import { Injectable, ViewContainerRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ToastNotification } from '../toast-notification.model';


/**
 * A service that shows and hide a generated NotificationComponent
 */
@Injectable()
export class ToastNotificationService {
  
  /**
   * An Event Emitter that sends new notification data.
   *
   * @type {BehaviorSubject<ToastNotification>}
   */
  private sendNewNotification = new BehaviorSubject<ToastNotification>(null);
  
  /**
   * Listens to what 'sendNewNotification' sends and relays the data to components that listens thereto.
   *
   * @type {Observable<ToastNotification>}
   */
  newNotification             = this.sendNewNotification.asObservable();
  
  /**
   * An Event Emitter that sends new siblings top value - which is used to calculate every component's distance with each other as
   * a toast notification list.
   *
   * @type {BehaviorSubject<ToastNotification[]>}
   */
  private sendNewSiblingsTopValue = new BehaviorSubject<ToastNotification[]>(null);
  
  /**
   * Listens to what 'sendNewSiblingsTopValue' sends and relays the data to components that listens thereto.
   *
   * @type {Observable<ToastNotification[]>}
   */
  newSiblingsTopValue = this.sendNewSiblingsTopValue.asObservable();
  
  notifications: ToastNotification[] = [];
  top: number = 0;
  
  constructor() { }
  
  /**
   * Broadcasts new notification and stores data to this.notifications for reference on hide() functionality.
   *
   * @param {ToastNotification} notification
   */
  show(notification: ToastNotification): void {
    notification.top = `${this.incrementTopValue()}px`;
    
    this.notifications.push({...notification});
    this.sendNewNotification.next(notification);
  }
  
  /**
   * Hides a Notification Component that is referenced by its id and container used.
   *
   * @param {number} id
   * @param {ViewContainerRef} container
   */
  hide(id: number, container: ViewContainerRef): void {
    const notificationIndex = this.notifications.findIndex(notification => notification.id == id);
    
    this.notifications.splice(notificationIndex, 1);
    container.remove(notificationIndex);
    
    this.updateToastDistanceValue();
  }
  
  /**
   * Updates Notification Toasts Distance Value to avoid overlapping or produce much space between generated Notification Component.
   */
  updateToastDistanceValue(): void {
    this.top = 0;
    
    this.notifications = this.notifications.map((notification, index) => {
      notification.top = `${this.incrementTopValue()}px`;
      return notification;
    });
    
    this.sendNewSiblingsTopValue.next(this.notifications);
  }
  
  /**
   * Increments Top Distance Value based on this.top incremental value. It starts with 25 then increments to adding 70 on the following
   * components.
   *
   * @returns {number}
   */
  incrementTopValue(): number {
    this.top += this.top == 0 ? 25 : 70;
    return this.top;
  }

}
