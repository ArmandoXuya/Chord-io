import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisnotasPageRoutingModule } from './misnotas-routing.module';

import { MisnotasPage } from './misnotas.page';
import { Filter1Pipe } from 'src/app/pipes/filter1.pipe';
import { Filter2Pipe } from 'src/app/pipes/filter2.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisnotasPageRoutingModule,
  ],
  declarations: [MisnotasPage, Filter1Pipe, 
    Filter2Pipe,]
})
export class MisnotasPageModule {}
