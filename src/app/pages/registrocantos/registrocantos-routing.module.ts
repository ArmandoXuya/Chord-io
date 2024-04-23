import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrocantosPage } from './registrocantos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrocantosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrocantosPageRoutingModule {}
