import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { NotificationFormComponent } from './notification-form.component';


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
