import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsconductorPage } from './mapsconductor.page';

const routes: Routes = [
  {
    path: '',
    component: MapsconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsconductorPageRoutingModule {}
