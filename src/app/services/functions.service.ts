import { Injectable, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TvRemoteComponent } from '../ui/popover/tv-remote/tv-remote.component';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService implements OnInit {

  isToggledAll = false;
  public outlets = [
    { iD: 1, toggleName: 'Bedroom night', backgroundColor: '#809bceff', isDimmer: true, dimmingValue: 40, isFavorite: false },
    { iD: 2, toggleName: 'Kitchen sink', backgroundColor: '#55b493ff', isFavorite: false },
    { iD: 3, toggleName: 'Saloon indirect', backgroundColor: '#ffde65ff', isFavorite: false },
    { iD: 4, toggleName: 'Saloon mood', backgroundColor: '#95b8d1ff', isFavorite: false },
    { iD: 5, toggleName: 'Entrance stairs', backgroundColor: '#09ece5ff', isFavorite: false },
    { iD: 6, toggleName: 'Stairs to second floor', backgroundColor: '#eac4d5ff', isFavorite: false },
    {
      iD: 7, toggleName: 'TV', backgroundColor: '#DD5E5E', icon: 'tv-outline', isFavorite: false,
      remoteShortcuts: ['power-outline', 'volume-high-outline', 'volume-low-outline', 'volume-mute-outline']
    },
    { iD: 8, toggleName: 'Bedroom night', backgroundColor: '#6e7582', isFavorite: false },
    { iD: 9, toggleName: 'Kitchen sink', backgroundColor: '#d35d6e', isFavorite: false },
    { iD: 10, toggleName: 'Saloon indirect', backgroundColor: '#383e56', isFavorite: false },
    { iD: 11, toggleName: 'Saloon mood', backgroundColor: '#6886c5', isFavorite: false },
    { iD: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773', isFavorite: false },
    { iD: 13, toggleName: 'Stairs to second floor', backgroundColor: '#745c97', isFavorite: false },
    { iD: 8, toggleName: 'Bedroom night', backgroundColor: '#6e7582', isFavorite: false },
    { iD: 9, toggleName: 'Kitchen sink', backgroundColor: '#d35d6e', isFavorite: false },
    { iD: 10, toggleName: 'Saloon indirect', backgroundColor: '#383e56', isFavorite: false },
    { iD: 11, toggleName: 'Saloon mood', backgroundColor: '#6886c5', isFavorite: false },
    { iD: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773', isFavorite: false },
    { iD: 13, toggleName: 'Stairs to second floor', backgroundColor: '#745c97', isFavorite: false },
    { iD: 8, toggleName: 'Bedroom night', backgroundColor: '#6e7582', isFavorite: false },
    { iD: 9, toggleName: 'Kitchen sink', backgroundColor: '#d35d6e', isFavorite: false },
    { iD: 10, toggleName: 'Saloon indirect', backgroundColor: '#383e56', isFavorite: false },
    { iD: 11, toggleName: 'Saloon mood', backgroundColor: '#6886c5', isFavorite: false },
    { iD: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773', isFavorite: false },
    { iD: 13, toggleName: 'Stairs to second floor', backgroundColor: '#745c97', isFavorite: false },
    { iD: 8, toggleName: 'Bedroom night', backgroundColor: '#6e7582', isFavorite: false },
    { iD: 9, toggleName: 'Kitchen sink', backgroundColor: '#d35d6e', isFavorite: false },
    { iD: 10, toggleName: 'Saloon indirect', backgroundColor: '#383e56', isFavorite: false },
    { iD: 11, toggleName: 'Saloon mood', backgroundColor: '#6886c5', isFavorite: false },
    { iD: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773', isFavorite: false },
    { iD: 13, toggleName: 'Stairs to second floor', backgroundColor: '#745c97', isFavorite: false },
    {
      iD: 14, toggleName: 'TV', backgroundColor: '#4baea0', icon: 'tv-outline', isFavorite: false,
      remoteShortcuts: ['power-outline', 'radio-button-off-outline', 'chevron-up-outline', 'chevron-down-outline']
    }
  ];;
  public favorites = [];
  public loggedIn = true;
  private columnCount = 2;
  private orderType = 'list';

  constructor(public popoverCtrl: PopoverController) { }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void{
  }

  getColumnCount() {
    return this.columnCount;
  }

  setColumnCount(colCount: number) {
    this.columnCount = colCount;
  }

  getOrderType() {
    return this.orderType;
  }

  setOrderType(orderType: string) {
    this.orderType = orderType;
  }

  manualToggle = (event, toggle?) => {
    if (this.orderType === 'list') {
      toggle.el.checked = !toggle.el.checked;
    }
    else {
      if (event.target.tagName === 'DIV') {
        event.target.classList.toggle('light-active');
      }
      else {
        event.target.parentElement.classList.toggle('light-active');
      }
    }
  };

  toggleLight = (item, toggle?): void => {
    console.log(item, toggle);
  };

  changeDimmingValue(event, toggle?) {
    const opacity = event.target.value / 100;

    if (toggle.el.checked) {
      toggle.el.style = `--handle-box-shadow: 0 0 10px 0 rgba(233, 181, 39, ${opacity});
      box-shadow: 0 0 10px 10px rgba(233, 181, 39, ${opacity});`;
    } else {
      toggle.el.style = `--handle-box-shadow: 0 0 10px 0 rgba(233, 181, 39, ${opacity});
    box-shadow: 0 0 10px 10px rgba(233, 181, 39, ${opacity});
    ${opacity > 0 ? `--handle-background-checked: rgba(255, 255, 255, ${opacity})` : ''}`;
    }

    if (opacity === 0) {
      toggle.el.checked = false;
    }
    else {
      toggle.el.checked = true;
    }
  }

  async remoteButtonPressed(ev: any, iD: number) {
    const popover = await this.popoverCtrl.create({
      component: TvRemoteComponent,
      event: ev,
      cssClass: 'remote-ion-popover',
      translucent: true,
      animated: false,
      componentProps: {
        iD
      }
    });

    await popover.present();
  }

  addToFavoritesList(item, event) {
    if (event.target.checked) {
      item.isFavorite = true;
      this.favorites.push(item);
    } else {
      const itemIndex = this.favorites.findIndex((_item) => {
        item.isFavorite = false;
        return _item.ID === item.ID;
      });

      this.favorites.splice(itemIndex, 1);
    }
  }
}
