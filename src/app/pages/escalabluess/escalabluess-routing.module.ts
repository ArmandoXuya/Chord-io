import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalabluessPage } from './escalabluess.page';

const routes: Routes = [
  {
    path: '',
    component: EscalabluessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalabluessPageRoutingModule {}
