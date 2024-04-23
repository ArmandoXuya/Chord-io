import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalaArabePage } from './escala-arabe.page';

const routes: Routes = [
  {
    path: '',
    component: EscalaArabePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalaArabePageRoutingModule {}
