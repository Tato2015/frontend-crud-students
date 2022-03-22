import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
