import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalamenorPage } from './escalamenor.page';

const routes: Routes = [
  {
    path: '',
    component: EscalamenorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalamenorPageRoutingModule {}
