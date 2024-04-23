import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalamenorPageRoutingModule } from './escalamenor-routing.module';

import { EscalamenorPage } from './escalamenor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalamenorPageRoutingModule
  ],
  declarations: [EscalamenorPage]
})
export class EscalamenorPageModule {}
