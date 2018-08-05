import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ToastNotification, ToastNotificationCategory, ToastNotificationService } from '../shared/toast-notification/index';


/**
 * A component that holds the notification form used to activate the toast notification.
 */
@Component({
  moduleId    : module.id,
  selector    : 'app-notification-form',
  templateUrl : 'notification-form.component.html',
  styleUrls   : ['notification-form.component.scss']
})
export class NotificationFormComponent implements OnInit {
  
  form: FormGroup;
  
  notificationCategory: typeof ToastNotificationCategory = ToastNotificationCategory;
  
  header   = new FormControl('', [ Validators.required, Validators.maxLength(25) ]);
  category = new FormControl(ToastNotificationCategory.info, [ Validators.nullValidator ]);
  body     = new FormControl('', [ Validators.required ]);
  
  columnNo: number;
  gutterSize: number;
  rowHeightRatio: string;
  
  constructor(private fb: FormBuilder,
              private toastNotificationService: ToastNotificationService) { }
  
  /**
   * Initializes Form Builder and HostListeners Resize Functionality
   */
  ngOnInit() {
    this.buildForm();
    this.onResize();
  }
  
  /**
   * Reactive Form Builder
   */
  buildForm(): void {
    this.form = this.fb.group({
      'header'    : this.header,
      'category'  : this.category,
      'body'      : this.body
    });
  }
  
  /**
   * Triggers when form is valid and submitted.
   *
   * @param {ToastNotification} body
   */
  onSubmit(body: ToastNotification): void {
    body.id = Math.floor(Math.random() * 100);
    this.toastNotificationService.show(body);
  }
  
  /**
   * Triggers when Screen is resized, it initializes the Mat Grid variables (columnNo, rowHeightRatio, gutterSize) to make
   * the category grid list responsive on 375px screen width.
   */
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth <= 375) this.initializeMatGrid(1, '6:1', 12);
    else this.initializeMatGrid(3, '2:1', 18);
  }
  
  /**
   * Initializes MatGrid values used for the responsiveness on Category Grid.
   *
   * @param {number} column
   * @param {string} row
   * @param {number} gutter
   */
  initializeMatGrid(column: number, row: string, gutter: number): void {
    this.columnNo       = column;
    this.rowHeightRatio = row;
    this.gutterSize     = gutter;
  }
  
  /**
   * Returns Error Message to show on form fields based on field errors.
   *
   * @param {FormControl} field
   * @param {string} name
   * @returns {string}
   */
  getErrorMessage(field: FormControl, name: string): string {
    if (field.hasError('maxlength')) console.log(field.errors.maxlength.requiredLength);
    
    const message = (field.hasError('required')) ? `${name} is required` :
                    (field.hasError('maxlength')) ?
                    `${name} is limited to ${field.errors.maxlength.requiredLength} characters only` : '';
    return message;
  }

}
