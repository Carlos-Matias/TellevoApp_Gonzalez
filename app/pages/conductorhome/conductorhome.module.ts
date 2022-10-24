import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorhomePageRoutingModule } from './conductorhome-routing.module';

import { ConductorhomePage } from './conductorhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorhomePageRoutingModule
  ],
  declarations: [ConductorhomePage]
})
export class ConductorhomePageModule {}
