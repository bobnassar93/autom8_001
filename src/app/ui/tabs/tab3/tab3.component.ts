import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component implements OnInit {
  gridCount = 2;
  color = '';
    constructor(public functions: FunctionsService) {
    }
    ngOnInit(){

    }
    saveSettings() {
      this.functions.setColumnCount(this.gridCount);
    }

    addOne() {
      if (this.gridCount < 6){
        this.gridCount += 1;
      }
    }

    substractOne() {
      if (this.gridCount > 1){
        this.gridCount -= 1;
      }
    }

    setDefaultLayout(event) {
      this.functions.setOrderType(event.target.value);
    }
  }
