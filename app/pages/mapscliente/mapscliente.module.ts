import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsclientePageRoutingModule } from './mapscliente-routing.module';

import { MapsclientePage } from './mapscliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsclientePageRoutingModule
  ],
  declarations: [MapsclientePage]
})
export class MapsclientePageModule {}
