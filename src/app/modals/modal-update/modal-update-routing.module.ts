import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalUpdatePage } from './modal-update.page';

const routes: Routes = [
  {
    path: '',
    component: ModalUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalUpdatePageRoutingModule {}
