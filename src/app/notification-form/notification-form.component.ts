import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Notification, NotificationCategory } from '../shared/toast-notification/index';


@Component({
  moduleId    : module.id,
  selector    : 'app-notification-form',
  templateUrl : 'notification-form.component.html',
  styleUrls   : ['notification-form.component.scss']
})
export class NotificationFormComponent implements OnInit {
  
  form: FormGroup;
  
  notificationCategory: typeof NotificationCategory = NotificationCategory;
  
  header   = new FormControl('', [ Validators.required ]);
  category = new FormControl(NotificationCategory.Info, [ Validators.nullValidator ]);
  body     = new FormControl('', [ Validators.required ]);
  
  columnNo: number;
  gutterSize: number;
  rowHeightRatio: string;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.onResize();
  }
  
  buildForm(): void {
    this.form = this.fb.group({
      'header'    : this.header,
      'category'  : this.category,
      'body'      : this.body
    });
  }
  
  onSubmit(body: Notification): void {
    console.log(body);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth <= 375) this.initializeMatGrid(1, '6:1', 12);
    else this.initializeMatGrid(3, '2:1', 18);
  }
  
  initializeMatGrid(column: number, row: string, gutter: number): void {
    this.columnNo       = column;
    this.rowHeightRatio = row;
    this.gutterSize     = gutter;
  }

}
