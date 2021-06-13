import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletsModalPage } from './outlets-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OutletsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletsModalPageRoutingModule {}
