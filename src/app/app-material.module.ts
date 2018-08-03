import { NgModule } from '@angular/core';

import { MatInputModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatGridListModule } from '@angular/material';


@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }
