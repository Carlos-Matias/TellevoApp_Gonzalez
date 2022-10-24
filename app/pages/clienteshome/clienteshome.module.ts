import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteshomePageRoutingModule } from './clienteshome-routing.module';

import { ClienteshomePage } from './clienteshome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteshomePageRoutingModule
  ],
  declarations: [ClienteshomePage]
})
export class ClienteshomePageModule {}
