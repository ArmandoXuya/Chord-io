import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalaArabePageRoutingModule } from './escala-arabe-routing.module';

import { EscalaArabePage } from './escala-arabe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalaArabePageRoutingModule
  ],
  declarations: [EscalaArabePage]
})
export class EscalaArabePageModule {}
