import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { NotificationComponent } from './notification/notification.component';

import { ToastNotification, ToastNotificationService } from './index';


/**
 * A component that holds and generates NotificationComponent.
 */
@Component({
  selector: 'app-toast-notification',
  template: `<div #container></div>`,
})
export class ToastNotificationComponent implements OnInit {
  
  @ViewChild('container', { read: ViewContainerRef}) container: ViewContainerRef;
  
  constructor(private toastNotificationService: ToastNotificationService,
              private resolver: ComponentFactoryResolver) { }
  
  /**
   * Initialize onNewNotification first when ToastNotificationComponent is loaded.
   */
  ngOnInit(): void {
    this.onNewNotification();
  }
  
  /**
   * Listens to any broadcast of 'newNotification' from ToastNotificationService
   *
   * If notification exists, then createNewNotificationComponent will be called to generate its component container
   *
   */
  onNewNotification(): void {
    this.toastNotificationService
      .newNotification
      .subscribe(notification => notification ? this.createNewNotificationComponent(notification) : null);
  }
  
  /**
   * Generates new NotificationComponent to be appended under ToastNotificationComponent - sending new data from
   * the ToastNotificationService 'newNotification' broadcast.
   *
   * @param {ToastNotification} notification
   */
  createNewNotificationComponent(notification: ToastNotification): void {
    const componentRef = this.resolver.resolveComponentFactory(NotificationComponent);
    const container    = this.container.createComponent(componentRef);
    const instance: NotificationComponent  = container.instance as NotificationComponent;
    
    instance.notification = {...notification};
    instance.state        = true;
    
    instance.hideNotification.subscribe(id => this.toastNotificationService.hide(id, this.container));
  }
 
}
