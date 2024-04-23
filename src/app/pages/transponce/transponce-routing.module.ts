import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransponcePage } from './transponce.page';

const routes: Routes = [
  {
    path: '',
    component: TransponcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransponcePageRoutingModule {}
