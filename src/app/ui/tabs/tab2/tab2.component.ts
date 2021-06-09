import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FunctionsService } from 'src/app/services/functions.service';
import { TvRemoteComponent } from '../../popover/tv-remote/tv-remote.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss'],
})
export class Tab2Component implements OnInit {

  orderType: string;
  display_list = [];
  grid_col_count: number;
  isToggledAll = false;
  editingFavorites = false;
  favorites = [];
  showFavorites = false;

  list = [
    { ID: 1, toggleName: 'Bedroom night', backgroundColor: '#809bceff', isDimmer: true, dimmingValue: 40, isFavorite: false },
    { ID: 2, toggleName: 'Kitchen sink', backgroundColor: '#55b493ff', isFavorite: false },
    { ID: 3, toggleName: 'Saloon indirect', backgroundColor: '#ffde65ff', isFavorite: false },
    { ID: 4, toggleName: 'Saloon mood', backgroundColor: '#95b8d1ff', isFavorite: false },
    { ID: 5, toggleName: 'Entrance stairs', backgroundColor: '#09ece5ff', isFavorite: false },
    { ID: 6, toggleName: 'Stairs to second floor', backgroundColor: '#eac4d5ff', isFavorite: false },
    { ID: 7, toggleName: 'TV', backgroundColor: '#DD5E5E', icon: 'tv-outline', isFavorite: false, remoteShortcuts: ['power-outline', 'volume-high-outline', 'volume-low-outline', 'volume-mute-outline'] },
    { ID: 8, toggleName: 'Bedroom night', backgroundColor: '#6e7582', isFavorite: false },
    { ID: 9, toggleName: 'Kitchen sink', backgroundColor: '#d35d6e', isFavorite: false },
    { ID: 10, toggleName: 'Saloon indirect', backgroundColor: '#383e56', isFavorite: false },
    { ID: 11, toggleName: 'Saloon mood', backgroundColor: '#6886c5', isFavorite: false },
    { ID: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773', isFavorite: false },
    { ID: 13, toggleName: 'Stairs to second floor', backgroundColor: '#745c97', isFavorite: false },
    { ID: 14, toggleName: 'TV', backgroundColor: '#4baea0', icon: 'tv-outline', isFavorite: false, remoteShortcuts: ['power-outline', 'radio-button-off-outline', 'chevron-up-outline', 'chevron-down-outline'] }
  ];

  constructor(public functions: FunctionsService, public popoverCtrl: PopoverController) {
    this.grid_col_count = functions.getColumnCount();

    this.orderType = functions.getOrderType();


  }

  ngOnInit() {
    this.orderType = this.functions.getOrderType();

    if (this.orderType === 'list') {
      this.grid_col_count = 1;
    } else {
      this.grid_col_count = this.functions.getColumnCount();
    }

    this.reorderItems();

    this.display_list = this.list;
  }
  counter() {
    return new Array(this.grid_col_count);
  }
  toggleAll = (event) => {
    this.isToggledAll = !this.isToggledAll;
  }

  toggleLight = (item, toggle?): void => {
  }

  manualToggle = (event, toggle?) => {
    if (this.orderType === 'list') {
      toggle.el.checked = !toggle.el.checked;
    }
    else {
      if (event.target.tagName === 'DIV')
        event.target.classList.toggle('light-active');
      else
        event.target.parentElement.classList.toggle('light-active');
    }
  }

  changeOrderType() {
    if (this.orderType === 'list')
      this.orderType = 'grid';
    else
      this.orderType = 'list';

    this.functions.setOrderType(this.orderType);
    this.reorderItems();
  }

  reorderItems = () => {
    if (this.orderType === 'grid') {
      this.grid_col_count = this.functions.getColumnCount();
    } else {
      this.grid_col_count = 1;
    }
  }

  ionViewWillEnter() {
    this.orderType = this.functions.getOrderType();
    this.reorderItems();
  }

  changeDimmingValue(event, toggle?) {
    let opacity = event.target.value / 100;

    if (toggle.el.checked) {
      toggle.el.style = `--handle-box-shadow: 0 0 10px 0 rgba(233, 181, 39, ${opacity}); box-shadow: 0 0 10px 10px rgba(233, 181, 39, ${opacity});`;
    } else {
      toggle.el.style = `--handle-box-shadow: 0 0 10px 0 rgba(233, 181, 39, ${opacity});
    box-shadow: 0 0 10px 10px rgba(233, 181, 39, ${opacity}); ${opacity > 0 ? `--handle-background-checked: rgba(255, 255, 255, ${opacity})` : ''}`;
    }

    if (opacity === 0)
      toggle.el.checked = false;
    else
      toggle.el.checked = true;
  }

  toggleFavorites() {
    if (this.favorites.length === 0) {
      this.editingFavorites = !this.editingFavorites;
      this.showFavorites = false;
    }
    else {
      if (!this.showFavorites) {
        this.editingFavorites = false;
        this.showFavorites = true;

        this.display_list = this.favorites;
      } else {
        this.showFavorites = false;

        this.display_list = this.list;
      }
    }
  }

  editCurrentFavorites() {
    this.showFavorites = false;
    this.editingFavorites = true;

    this.display_list = this.list;
  }

  saveFavorites() {
    if (this.favorites.length === 0) {
      this.editingFavorites = false;
      this.showFavorites = false;
    } else {
      this.display_list = this.favorites;
      this.editingFavorites = false;
      this.showFavorites = true;
    }
  }

  addToFavoritesList(item, event) {
    if (event.target.checked) {
      item.isFavorite = true;
      this.favorites.push(item);
    } else {
      let itemIndex = this.favorites.findIndex((_item) => {
        item.isFavorite = false;
        return _item.ID === item.ID;
      });

      this.favorites.splice(itemIndex, 1);
    }
  }

  async remoteButtonPressed(ev: any, ID: number) {
    const popover = await this.popoverCtrl.create({
      component: TvRemoteComponent,
      event: ev,
      cssClass: "remote-ion-popover",
      translucent: true,
      componentProps: {
        "ID": ID
      }
    });

    await popover.present();
  }
}
