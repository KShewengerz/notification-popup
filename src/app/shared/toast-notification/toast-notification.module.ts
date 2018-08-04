import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material';

import { ToastNotificationService } from './service/toast-notification.service';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [ NotificationComponent ],
  providers: [ ToastNotificationService ],
  exports: [ NotificationComponent ],
  entryComponents: [ NotificationComponent ]
})
export class ToastNotificationModule { }
