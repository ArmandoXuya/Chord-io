import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalamayorPageRoutingModule } from './escalamayor-routing.module';

import { EscalamayorPage } from './escalamayor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalamayorPageRoutingModule
  ],
  declarations: [EscalamayorPage]
})
export class EscalamayorPageModule {}
