import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-outlets-modal',
  templateUrl: './outlets-modal.page.html',
  styleUrls: ['./outlets-modal.page.scss'],
})
export class OutletsModalPage implements OnInit {

  constructor(public modalController: ModalController, public functions: FunctionsService) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
