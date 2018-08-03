import { NgModule } from '@angular/core';

import { MatInputModule, MatToolbarModule, MatIconModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
