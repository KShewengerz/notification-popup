import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { NotificationFormComponent } from './notification-form.component';


/**
 * A module that holds Notification Form Component used to input fields and trigger toast notification.
 */
@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ NotificationFormComponent ],
  exports: [ NotificationFormComponent ]
})
export class NotificationFormModule { }
