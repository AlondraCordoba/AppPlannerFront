import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListonComponent } from './liston/liston.component';



@NgModule({
  declarations: [ListonComponent],
  imports: [
    CommonModule
  ],
  exports:[ListonComponent]
})
export class ComponentsModule { }
