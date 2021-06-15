import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FunctionsService } from 'src/app/services/functions.service';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss'],
})
export class Tab2Component implements OnInit {

  orderType: string;
  gridColCount: number;
  editingFavorites = false;
  showFavorites = false;
  header;

  constructor(public functions: FunctionsService, public popoverCtrl: PopoverController, public tabs: TabsComponent) {
    this.gridColCount = functions.getColumnCount();

    this.orderType = functions.getOrderType();
  }

  ngOnInit() {
    this.orderType = this.functions.getOrderType();

    if (this.orderType === 'list') {
      this.gridColCount = 1;
    } else {
      this.gridColCount = this.functions.getColumnCount();
    }

    this.reorderItems();

    this.header = document.querySelector('#_header') as HTMLIonHeaderElement;
  }
  counter() {
    return new Array(this.gridColCount);
  }
  toggleAll = (event) => {
    this.functions.isToggledAll = !this.functions.isToggledAll;
  };

  changeOrderType() {
    if (this.orderType === 'list') {
      this.orderType = 'grid';
    }
    else {
      this.orderType = 'list';
    }
    this.functions.setOrderType(this.orderType);
    this.reorderItems();
  }

  reorderItems = () => {
    if (this.orderType === 'grid') {
      this.gridColCount = this.functions.getColumnCount();
    } else {
      this.gridColCount = 1;
    }
  };

  ionViewWillEnter() {
    this.orderType = this.functions.getOrderType();
    this.reorderItems();
  }

  toggleFavorites() {
    if (this.functions.favorites.length === 0) {
      this.editingFavorites = true;
    }
    else {
      // if (!this.showFavorites) {
      //   this.editingFavorites = false;
      //   this.showFavorites = true;

      //   this.displayList = this.functions.favorites;
      // } else {
      //   this.showFavorites = false;

      //   this.displayList = this.list;
      // }
      this.tabs.selectTab('tab1');
    }
  }

  saveFavorites() {
    if (this.functions.favorites.length === 0) {
      this.editingFavorites = false;
      this.showFavorites = false;
    } else {
      //this.displayList = this.functions.favorites;
      this.editingFavorites = false;
      //this.showFavorites = true;

      this.tabs.selectTab('tab1');

    }
  }

  pressedMe(ev: Event) {
    ev.preventDefault();
    console.log('Pressed me');
  }

  //logScrollStart(ionContent: HTMLIonContentElement) {
  // const scroll = fromEvent(ionContent, 'ionScroll');
  // const result = scroll.pipe(throttleTime(150));
  // result.subscribe((x: CustomEvent) => {
  //   const header = document.querySelector('#_header') as HTMLIonHeaderElement;
  //   if (Math.sign(x.detail.deltaY) === 1) {
  //     header.style.top = '-200px';
  //   } else if (Math.sign(x.detail.deltaY) === -1) {
  //     header.style.top = '0';
  //   }
  // });
  //}

  scrollStarted(ev, element) {
    // const header = document.querySelector('#_header') as HTMLIonHeaderElement;
    // if (Math.sign(ev.detail.deltaY) === 1) {
    //   element.el.style.top = '-200px';
    // } else if (Math.sign(ev.detail.deltaY) === -1) {
    //   element.el.style.top = '0';
    // }
  }

  ionScrolling(ev) {
    if (ev.detail.scrollTop > 500) {
      document.querySelector('ion-fab').style.display = 'block';
      document.querySelector('ion-fab').style.opacity = '1';
    } else if (ev.detail.scrollTop === 0) {
      document.querySelector('ion-fab').style.opacity = '0';
      document.querySelector('ion-fab').style.display = 'none';
    }

    if (Math.sign(ev.detail.deltaY) === 1) {
      this.header.style.top = `-${this.header.clientHeight}px`;
    } else if (Math.sign(ev.detail.deltaY) === -1) {
      this.header.style.top = '0';
    }
  }

  getContent() {
    return document.querySelector('ion-content');
  }

  scrollToTop() {
    this.getContent().scrollToTop(500);
  }
}
