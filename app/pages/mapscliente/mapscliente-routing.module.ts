import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsclientePage } from './mapscliente.page';

const routes: Routes = [
  {
    path: '',
    component: MapsclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsclientePageRoutingModule {}
