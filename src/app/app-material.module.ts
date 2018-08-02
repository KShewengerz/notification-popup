import { NgModule } from '@angular/core';

import { MatInputModule, MatToolbarModule, MatIconModule } from '@angular/material';


@NgModule({
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
