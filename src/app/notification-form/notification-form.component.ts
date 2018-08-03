import { Component, OnInit } from '@angular/core';


@Component({
  moduleId    : module.id,
  selector    : 'app-notification-form',
  templateUrl : 'notification-form.component.html',
  styleUrls   : ['notification-form.component.scss']
})
export class NotificationFormComponent implements OnInit {

  columnNo: number;
  gutterSize: number;
  rowHeightRatio: string;
  
  constructor() { }

  ngOnInit() {
    this.onResize();
  }
  
  onResize(): void {
    if (window.innerWidth <= 375) this.initializeMatGrid(1, '6:1', 12);
    else this.initializeMatGrid(3, '2:1', 18);
  }
  
  initializeMatGrid(column: number, row: string, gutter: number): void {
    this.columnNo = column;
    this.rowHeightRatio = row;
    this.gutterSize = gutter;
  }

}
