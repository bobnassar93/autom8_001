import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { FunctionsService } from 'src/app/services/functions.service';
import { OutletsModalPage } from '../../elements/outlets-modal/outlets-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component implements OnInit {

  constructor(public functions: FunctionsService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
    ) { }

  ngOnInit() {

  }

  editCurrentFavorites() {
    // this.showFavorites = false;
    // this.editingFavorites = true;

    // this.displayList = this.list;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: OutletsModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
