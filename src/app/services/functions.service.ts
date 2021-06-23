import { Injectable, OnInit, } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TvRemoteComponent } from '../ui/popover/tv-remote/tv-remote.component';
import { All_Data } from './proxy.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService implements OnInit {

  isToggledAll = false;
  colors = [
    '#809bceff',
    '#55b493ff',
    '#ffaa89ff',
    '#95b8d1ff',
    '#55bcbbff',
    '#ff92d5ff',
    '#dd5e5eff',
    '#6e7582ff',
    '#e6913bff',
    '#6886c5ff',
    '#6e5773ff',
    '#745c97ff',
    '#e2afffff',
    '#a2d2ffff',
    '#ffafccff',
    '#0096c7ff',
    '#446583ff',
    '#9f6af8ff',
    '#86e8d2ff',
    '#6e5bd8ff',
  ];

  public itemClass = new All_Data();

  public items: any = [
    {
      name: 'Basement',
      outlets: [
        {
          iD: 7, toggleName: 'TV', backgroundColor: '#809bceff', icon: 'tv', isFavorite: false, isDimmer: false,
          remoteShortcuts: ['power-outline', 'volume-high-outline', 'volume-low-outline', 'volume-mute-outline']
        },
        { iD: 8, toggleName: 'Bedroom night', backgroundColor: '#55b493ff', isFavorite: false, isDimmer: false },
        { iD: 9, toggleName: 'Kitchen sink', backgroundColor: '#ffaa89ff', isFavorite: false, isDimmer: false },
        { iD: 10, toggleName: 'Saloon indirect', backgroundColor: '#95b8d1ff', isFavorite: false, isDimmer: false }
      ]
    },
    {
      name: 'Ground floor',
      outlets: [
        { iD: 1, toggleName: 'Bedroom night', backgroundColor: '#55bcbbff', isDimmer: true, dimmingValue: 40, isFavorite: false },
        { iD: 2, toggleName: 'Kitchen sink', backgroundColor: '#ff92d5ff', isFavorite: false, isDimmer: false },
        { iD: 3, toggleName: 'Saloon indirect', backgroundColor: '#dd5e5eff', isFavorite: false, isDimmer: false },
        { iD: 4, toggleName: 'Saloon mood', backgroundColor: '#6e7582ff', isFavorite: false, isDimmer: false },
        { iD: 5, toggleName: 'Entrance stairs', backgroundColor: '#d35d6eff', isFavorite: false, isDimmer: false },
        { iD: 6, toggleName: 'Stairs to second floor', backgroundColor: '#6e5773ff', isFavorite: false, isDimmer: false }
      ]
    },
    {
      name: 'First floor',
      outlets: [
        { iD: 11, toggleName: 'Saloon mood', backgroundColor: '#745c97ff', isFavorite: false, isDimmer: false },
        { iD: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773ff', isFavorite: false, isDimmer: false },
        { iD: 13, toggleName: 'Stairs to second floor', backgroundColor: '#6886c5ff', isFavorite: false, isDimmer: false },
        { iD: 14, toggleName: 'Bedroom night', backgroundColor: '#d35d6eff', isFavorite: false, isDimmer: false },
        { iD: 15, toggleName: 'Kitchen sink', backgroundColor: '#6e7582ff', isFavorite: false, isDimmer: false },
        { iD: 16, toggleName: 'Saloon indirect', backgroundColor: '#dd5e5eff', isFavorite: false, isDimmer: false }
      ]
    },
    {
      name: 'Second floor',
      outlets: [
        { iD: 17, toggleName: 'Saloon mood', backgroundColor: '#ff92d5ff', isFavorite: false, isDimmer: false },
        { iD: 18, toggleName: 'Entrance stairs', backgroundColor: '#55bcbbff', isFavorite: false, isDimmer: false },
        { iD: 19, toggleName: 'Stairs to second floor', backgroundColor: '#95b8d1ff', isFavorite: false, isDimmer: false },
        { iD: 20, toggleName: 'Bedroom night', backgroundColor: '#ffaa89ff', isFavorite: false, isDimmer: false },
        { iD: 21, toggleName: 'Kitchen sink', backgroundColor: '#55b493ff', isFavorite: false, isDimmer: false },
        { iD: 22, toggleName: 'Saloon indirect', backgroundColor: '#809bceff', isFavorite: false, isDimmer: false }
      ]
    },
    {
      name: 'Roof',
      outlets: [

        { iD: 23, toggleName: 'Saloon mood', backgroundColor: '#dd5e5eff', isFavorite: false, isDimmer: false },
        { iD: 24, toggleName: 'Entrance stairs', backgroundColor: '#6e7582ff', isFavorite: false, isDimmer: false },
        { iD: 25, toggleName: 'Stairs to second floor', backgroundColor: '#6886c5ff', isFavorite: false, isDimmer: false },
        { iD: 26, toggleName: 'Bedroom night', backgroundColor: '#55b493ff', isFavorite: false, isDimmer: false },
        { iD: 27, toggleName: 'Kitchen sink', backgroundColor: '#745c97ff', isFavorite: false, isDimmer: false },
        { iD: 28, toggleName: 'Saloon indirect', backgroundColor: '#ffaa89ff', isFavorite: false, isDimmer: false },
        { iD: 29, toggleName: 'Saloon mood', backgroundColor: '#d35d6eff', isFavorite: false, isDimmer: false },
        { iD: 30, toggleName: 'Entrance stairs', backgroundColor: '#6e5773ff', isFavorite: false, isDimmer: false },
        { iD: 31, toggleName: 'Stairs to second floor', backgroundColor: '#ffaa89ff', isFavorite: false, isDimmer: false },
        {
          iD: 32, toggleName: 'TV', backgroundColor: '#ffaa89ff', icon: 'tv', isFavorite: false,
          remoteShortcuts: ['power-outline', 'radio-button-off-outline', 'chevron-up-outline', 'chevron-down-outline'], isDimmer: false
        }
      ]
    }
  ];

  public favorites = [];
  public loggedIn = true;
  private columnCount = 2;
  private orderType = 'list';

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit(): void {
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
        return _item.iD === item.iD;
      });

      this.favorites.splice(itemIndex, 1);
    }
  }

  getRandomHex() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  toggleCollapsible(index) {
    this.items[index].open = !this.items[index].open;
  }

  getItem(index: string, id?: string) {
    if(id){
      return this.items[index].outlets[id];
    }else{
      return this.favorites[index];
    }
  }
}
