import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { NotificationFormModule } from './notification-form/notification-form.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NotificationFormModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
