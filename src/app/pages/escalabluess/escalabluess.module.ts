import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalabluessPageRoutingModule } from './escalabluess-routing.module';

import { EscalabluessPage } from './escalabluess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalabluessPageRoutingModule
  ],
  declarations: [EscalabluessPage]
})
export class EscalabluessPageModule {}
