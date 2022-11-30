import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsconductorPageRoutingModule } from './mapsconductor-routing.module';

import { MapsconductorPage } from './mapsconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsconductorPageRoutingModule
  ],
  declarations: [MapsconductorPage]
})
export class MapsconductorPageModule {}
