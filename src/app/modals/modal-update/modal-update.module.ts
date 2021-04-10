import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalUpdatePageRoutingModule } from './modal-update-routing.module';

import { ModalUpdatePage } from './modal-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalUpdatePageRoutingModule
  ],
  declarations: [ModalUpdatePage]
})
export class ModalUpdatePageModule {}
