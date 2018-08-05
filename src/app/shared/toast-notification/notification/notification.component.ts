import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

import { ToastNotification, ToastNotificationCategory, ToastNotificationService } from '../index';


/**
 * A component that holds the toast notification UI and its animation
 */
@Component({
  moduleId    : module.id,
  selector    : 'app-notification',
  templateUrl : 'notification.component.html',
  styleUrls   : ['notification.component.scss'],
  animations  : [
    /**
     * Show and Hide Animation for Toast Notification using opacity 0 and 1
     */
    trigger('toast', [
      state('void', style({ 'opacity': 0 })),
      state('true', style({ 'opacity': 1 })),
      transition('void <=> *', animate('0.2s ease-in-out'))
    ])
  ]
})
export class NotificationComponent implements OnInit {
  
  /**
   * Passed Data of Toast Notification
   *
   * @type {ToastNotification}
   */
  @Input() notification: ToastNotification = null;
  
  /**
   * An event emitter that triggers that a certain component will be hidden.
   *
   * @type {EventEmitter<number>}
   */
  @Output() hideNotification: EventEmitter<number> = new EventEmitter<number>(null);
  
  state: boolean = false;
  notificationCategory: string;
  
  category: typeof ToastNotificationCategory = ToastNotificationCategory;
  
  constructor(private toastNotificationService: ToastNotificationService) { }
  
  /**
   * Initializes onHideNotification if there are ToastNotificationService's 'newSiblingsTopValue' broadcasts
   *
   * If notification exists/passed, initialize notificationCategory with its string enum name (info, warning, error).
   */
  ngOnInit(): void {
    this.onHiddenNotification();
    
    if (this.notification) this.notificationCategory = this.category[this.notification.category];
  }
  
  /**
   * Listens if there are newly broadcasted data from ToastNotificationService's 'newSiblingsTopValue', changes the notification list
   * top value to adjust its distance between components and avoid overlapping/overspacing.
   */
  onHiddenNotification(): void {
    this.toastNotificationService
      .newSiblingsTopValue
      .subscribe(notifications => {
        if (notifications) {
          const notification = notifications.filter(notification => notification.id == this.notification.id)[0];
          
          if (notification) this.notification.top = notification.top;
        }
      });
  }
  
  /**
   * Closes Notification
   *
   * state will be changed to false (referenced by the animation)
   *
   * Emits the component's id to hideNotification EventEmitter
   *
   * @param {number} id
   */
  closeNotification(id: number): void {
    this.state = !this.state;
    this.hideNotification.emit(id);
  }

}
