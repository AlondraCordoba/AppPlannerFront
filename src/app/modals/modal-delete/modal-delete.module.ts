import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDeletePageRoutingModule } from './modal-delete-routing.module';

import { ModalDeletePage } from './modal-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDeletePageRoutingModule
  ],
  declarations: [ModalDeletePage]
})
export class ModalDeletePageModule {}
