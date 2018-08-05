import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material';

import { ToastNotificationService } from './service/toast-notification.service';
import { NotificationComponent } from './notification/notification.component';
import { ToastNotificationComponent } from './toast-notification.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
