import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

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

  // list = [
  //   { ID: 1, toggleName: 'Bedroom night', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(195,65,42,1) 0%, rgba(199,78,56,1) 41%, rgba(189,46,21,1) 93%)', isDimmer: true, dimmingValue: 40, isFavorite: false },
  //   // { toggleName: '', backgroundColor: 'transparent url(/assets/imgs/2.jpg) 0 0 / cover no-repeat' },
  //   // { toggleName: '', backgroundColor: 'transparent url(/assets/imgs/1.jpg) 0 0 / cover no-repeat' },
  //   // { toggleName: '', backgroundColor: 'transparent url(/assets/imgs/3.jpg) 0 0 / cover no-repeat', isDimmer: true },
  //   { ID: 2, toggleName: 'Kitchen sink', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(211,166,68,1) 0%, rgba(195,134,0,1) 100%, rgba(255,255,255,1) 100%, rgba(195,134,0,1) 100%)', isFavorite: false },
  //   { ID: 3, toggleName: 'Saloon indirect', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(96,197,50,1) 0%, rgba(126,208,89,1) 50%, rgba(74,189,21,1) 100%)', isFavorite: false },
  //   { ID: 4, toggleName: 'Saloon mood', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(152,226,217,1) 0%, rgba(49,197,178,1) 0%, rgba(21,189,167,1) 100%)', isFavorite: false },
  //   { ID: 5, toggleName: 'Entrance stairs', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(108,132,213,1) 0%, rgba(57,90,199,1) 0%, rgba(21,60,189,1) 100%)', isFavorite: false },
  //   { ID: 6, toggleName: 'Stairs to second floor', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(163,87,207,1) 0%, rgba(136,37,193,1) 50%, rgba(127,21,189,1) 100%)', isFavorite: false },
  //   { ID: 7, toggleName: 'TV', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(206,82,92,1) 0%, rgba(190,25,38,1) 30%, rgba(189,21,35,1) 100%)', icon: 'tv-outline', isFavorite: false, remoteShortcuts: ['power-outline', 'volume-high-outline', 'volume-low-outline', 'volume-mute-outline'] },
  //   { ID: 8, toggleName: 'Bedroom night', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(195,65,42,1) 0%, rgba(199,78,56,1) 41%, rgba(189,46,21,1) 93%)', isFavorite: false },
  //   { ID: 9, toggleName: 'Kitchen sink', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(211,166,68,1) 0%, rgba(195,134,0,1) 100%, rgba(255,255,255,1) 100%, rgba(195,134,0,1) 100%)', isFavorite: false },
  //   { ID: 10, toggleName: 'Saloon indirect', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(96,197,50,1) 0%, rgba(126,208,89,1) 50%, rgba(74,189,21,1) 100%)', isFavorite: false },
  //   { ID: 11, toggleName: 'Saloon mood', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(152,226,217,1) 0%, rgba(49,197,178,1) 0%, rgba(21,189,167,1) 100%)', isFavorite: false },
  //   { ID: 12, toggleName: 'Entrance stairs', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(108,132,213,1) 0%, rgba(57,90,199,1) 0%, rgba(21,60,189,1) 100%)', isFavorite: false },
  //   { ID: 13, toggleName: 'Stairs to second floor', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(163,87,207,1) 0%, rgba(136,37,193,1) 50%, rgba(127,21,189,1) 100%)', isFavorite: false },
  //   { ID: 14, toggleName: 'TV', backgroundColor: '-webkit-linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(206,82,92,1) 0%, rgba(190,25,38,1) 30%, rgba(189,21,35,1) 100%)', icon: 'tv-outline', isFavorite: false, remoteShortcuts: ['power-outline', 'radio-button-off-outline', 'chevron-up-outline', 'chevron-down-outline' ] }
  // ];


  list = [
    { ID: 1, toggleName: 'Bedroom night', backgroundColor: '#be8abf', isDimmer: true, dimmingValue: 40, isFavorite: false },
    // { toggleName: '', backgroundColor: 'transparent url(/assets/imgs/2.jpg) 0 0 / cover no-repeat' },
    // { toggleName: '', backgroundColor: 'transparent url(/assets/imgs/1.jpg) 0 0 / cover no-repeat' },
    // { toggleName: '', backgroundColor: 'transparent url(/assets/imgs/3.jpg) 0 0 / cover no-repeat', isDimmer: true },
    { ID: 2, toggleName: 'Kitchen sink', backgroundColor: '#f39189', isFavorite: false },
    { ID: 3, toggleName: 'Saloon indirect', backgroundColor: '#ff7171', isFavorite: false },
    { ID: 4, toggleName: 'Saloon mood', backgroundColor: '#709fb0', isFavorite: false },
    { ID: 5, toggleName: 'Entrance stairs', backgroundColor: '#a0c1b8', isFavorite: false },
    { ID: 6, toggleName: 'Stairs to second floor', backgroundColor: '#f4ebc1', isFavorite: false },
    { ID: 7, toggleName: 'TV', backgroundColor: '#046582', icon: 'tv-outline', isFavorite: false, remoteShortcuts: ['power-outline', 'volume-high-outline', 'volume-low-outline', 'volume-mute-outline'] },
    { ID: 8, toggleName: 'Bedroom night', backgroundColor: '#6e7582', isFavorite: false },
    { ID: 9, toggleName: 'Kitchen sink', backgroundColor: '#d35d6e', isFavorite: false },
    { ID: 10, toggleName: 'Saloon indirect', backgroundColor: '#383e56', isFavorite: false },
    { ID: 11, toggleName: 'Saloon mood', backgroundColor: '#6886c5', isFavorite: false },
    { ID: 12, toggleName: 'Entrance stairs', backgroundColor: '#6e5773', isFavorite: false },
    { ID: 13, toggleName: 'Stairs to second floor', backgroundColor: '#745c97', isFavorite: false },
    { ID: 14, toggleName: 'TV', backgroundColor: '#4baea0', icon: 'tv-outline', isFavorite: false, remoteShortcuts: ['power-outline', 'radio-button-off-outline', 'chevron-up-outline', 'chevron-down-outline' ] }
  ];
  constructor(private functions: FunctionsService) {
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

    if (this.orderType === 'list') {
      // const toggles = document.getElementsByName('outputToggle');

      // toggles.forEach((element: HTMLIonToggleElement) => {
      //   if (event.target.checked)
      //     element.checked = true;
      //   else
      //     element.checked = false;
      // });
    }
    else {
      // const col_divs = document.getElementsByName('outputToggleDiv');

      // col_divs.forEach(element => {
      //   if (event.target.checked)
      //     element.classList.add('light-active');
      //   else
      //     element.classList.remove('light-active');
      // });
    }
  }

  toggleLight = (item, toggle?): void => {
    // console.log(item);
  }

  manualToggle = (event, toggle?) => {
    if (this.orderType === 'list') {
      //item.checked = !item.checked;
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

  remoteButtonPressed(){
    console.log('remote button pressed');
  }

}

