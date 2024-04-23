import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestclavePageRoutingModule } from './restclave-routing.module';

import { RestclavePage } from './restclave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestclavePageRoutingModule
  ],
  declarations: [RestclavePage]
})
export class RestclavePageModule {}
