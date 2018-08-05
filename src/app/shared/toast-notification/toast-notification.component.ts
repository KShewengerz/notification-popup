import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { NotificationComponent } from './notification/notification.component';

import { ToastNotification, ToastNotificationService } from './index';


@Component({
  selector: 'app-toast-notification',
  template: `<div #container></div>`,
})
export class ToastNotificationComponent implements OnInit {
  
  @ViewChild('container', { read: ViewContainerRef}) container: ViewContainerRef;
  
  top: number = 0;
  
  constructor(private toastNotificationService: ToastNotificationService,
              private resolver: ComponentFactoryResolver) { }
  
  ngOnInit(): void {
    this.onNewNotification();
  }
  
  onNewNotification(): void {
    this.toastNotificationService
    .newNotification
    .subscribe(notification => notification ? this.createNewNotificationComponent(notification) : null);
  }
  
  createNewNotificationComponent(notification: ToastNotification): void {
    const componentRef = this.resolver.resolveComponentFactory(NotificationComponent);
    const container    = this.container.createComponent(componentRef);
    const instance: NotificationComponent  = container.instance as NotificationComponent;
    
    instance.notification = {...notification};
    instance.state        = true;
    instance.top          = this.incrementTopValue();
    
    instance.hideNotification.subscribe(id => this.toastNotificationService.hide(id, this.container));
  }
  
  incrementTopValue(): number {
    this.top += this.top == 0 ? 25 : 70;
    return this.top;
  }
}
