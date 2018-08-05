import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';


import { ToastNotification, ToastNotificationCategory, ToastNotificationService } from '../index';


@Component({
  moduleId    : module.id,
  selector    : 'app-notification',
  templateUrl : 'notification.component.html',
  styleUrls   : ['notification.component.scss'],
  animations  : [
    trigger('toast', [
      state('false', style({ 'opacity': 0 })),
      state('true', style({ 'opacity': 1 })),
      transition('* => *', animate('0.2s ease-in-out'))
    ])
  ]
})
export class NotificationComponent implements OnChanges {
  
  @Input() notification: ToastNotification;
  @Output() hideNotification: EventEmitter<number> = new EventEmitter<number>(null);
  
  state: boolean = false;
  notificationCategory: string;
  
  category: typeof ToastNotificationCategory = ToastNotificationCategory;
  
  constructor(private toastNotificationService: ToastNotificationService) { }
  
  ngOnChanges(): void {
    if (this.notification) {
      this.updateStateValue();
      this.notificationCategory = this.category[this.notification.category];
    }
  }
  
  closeNotification(id: number): void {
    this.updateStateValue();
    this.hideNotification.emit(id);
  }
  
  updateStateValue(): void {
    this.state = !this.state;
  }

}
