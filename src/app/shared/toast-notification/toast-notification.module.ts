import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material';

import { ToastNotificationService } from './service/toast-notification.service';
import { NotificationComponent } from './notification/notification.component';
import { ToastNotificationComponent } from './toast-notification.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    NotificationComponent,
    ToastNotificationComponent
  ],
  providers: [ ToastNotificationService ],
  exports: [
    ToastNotificationComponent,
    NotificationComponent
  ],
  entryComponents: [
    ToastNotificationComponent,
    NotificationComponent
  ]
})
export class ToastNotificationModule { }
