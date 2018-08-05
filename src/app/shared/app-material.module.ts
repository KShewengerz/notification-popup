import { NgModule } from '@angular/core';

import { MatInputModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatGridListModule } from '@angular/material';


/**
 * A module that imports some of the Angular Material Features/Components needed for the application.
 */
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
