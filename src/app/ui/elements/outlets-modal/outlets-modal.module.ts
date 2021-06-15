import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutletsModalPageRoutingModule } from './outlets-modal-routing.module';

import { OutletsModalPage } from './outlets-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutletsModalPageRoutingModule
  ],
  declarations: [OutletsModalPage]
})
export class OutletsModalPageModule {}
