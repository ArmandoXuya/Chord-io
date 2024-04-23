import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransponcePageRoutingModule } from './transponce-routing.module';

import { TransponcePage } from './transponce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransponcePageRoutingModule
  ],
  declarations: [TransponcePage]
})
export class TransponcePageModule {}
