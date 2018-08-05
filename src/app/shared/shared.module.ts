import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { ToastNotificationModule } from './toast-notification/toast-notification.module';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    Angular2FontawesomeModule,
    ToastNotificationModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    Angular2FontawesomeModule,
    ToastNotificationModule
  ],
  declarations: []
})
export class SharedModule { }
