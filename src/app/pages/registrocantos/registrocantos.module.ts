import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrocantosPageRoutingModule } from './registrocantos-routing.module';

import { RegistrocantosPage } from './registrocantos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrocantosPageRoutingModule
  ],
  declarations: [RegistrocantosPage]
})
export class RegistrocantosPageModule {}
