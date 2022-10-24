import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorhomePage } from './conductorhome.page';

const routes: Routes = [
  {
    path: '',
    component: ConductorhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConductorhomePageRoutingModule {}
