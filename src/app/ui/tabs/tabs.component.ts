import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @ViewChild('myTabs', {read: IonTabs}) tabRef: IonTabs;
  constructor() { }

  ngOnInit() {
  }

  selectTab(tab: string){
    this.tabRef.select(tab);
  }

}
