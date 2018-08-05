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
  
  @HostBinding('style.top.px')
  top: number = 0;
  
  state: boolean = false;
  notificationCategory: string;
  
  category: typeof ToastNotificationCategory = ToastNotificationCategory;
  
  constructor(private toastNotificationService: ToastNotificationService) { }
  
  ngOnInit(): void {
    if (this.notification) this.notificationCategory = this.category[this.notification.category];
  }
  
  closeNotification(id: number): any {
    this.state = !this.state;
    this.hideNotification.emit(id);
  }

}
