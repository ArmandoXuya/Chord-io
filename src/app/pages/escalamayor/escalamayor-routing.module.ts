import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalamayorPage } from './escalamayor.page';

const routes: Routes = [
  {
    path: '',
    component: EscalamayorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalamayorPageRoutingModule {}
