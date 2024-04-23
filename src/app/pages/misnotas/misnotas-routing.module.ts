import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisnotasPage } from './misnotas.page';

const routes: Routes = [
  {
    path: '',
    component: MisnotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisnotasPageRoutingModule {}
