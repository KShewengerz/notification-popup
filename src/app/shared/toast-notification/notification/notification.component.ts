import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


import { ToastNotification, ToastNotificationCategory, ToastNotificationService } from '../index';


@Component({
  moduleId    : module.id,
  selector    : 'app-notification',
  templateUrl : 'notification.component.html',
  styleUrls   : ['notification.component.scss'],
  animations  : [
    trigger('toast', [
      state('void', style({ 'opacity': 0 })),
      state('true', style({ 'opacity': 1 })),
      transition('void <=> *', animate('0.2s ease-in-out'))
    ])
  ]
})
export class NotificationComponent implements OnInit {
  
  @Input() notification: ToastNotification = null;
  @Output() hideNotification: EventEmitter<number> = new EventEmitter<number>(null);
  
  state: boolean = false;
  notificationCategory: string;
  
  category: typeof ToastNotificationCategory = ToastNotificationCategory;
  
  constructor(private toastNotificationService: ToastNotificationService) { }
  
  ngOnInit(): void {
    this.onHiddenNotification();
    
    if (this.notification) this.notificationCategory = this.category[this.notification.category];
  }
  
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
  
  closeNotification(id: number): any {
    this.state = !this.state;
    this.hideNotification.emit(id);
  }

}
