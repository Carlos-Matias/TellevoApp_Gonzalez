import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteshomePage } from './clienteshome.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteshomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteshomePageRoutingModule {}
