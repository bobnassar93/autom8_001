import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-outlet-options',
  templateUrl: './outlet-options.component.html',
  styleUrls: ['./outlet-options.component.scss'],
})
export class OutletOptionsComponent implements OnInit {

  item;
  index;
  id;
  constructor(public functions: FunctionsService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.router.snapshot.queryParamMap.get('id');
    this.index = this.router.snapshot.queryParamMap.get('index');
    this.item = this.functions.getItem(this.index, this.id);
  }

  previewColor(color, el) {
    el.style = `background: ${color}`;

    this.functions.items[this.index].outlets[this.id].backgroundColor = color;
  }

  editOutlet(){
    console.log('saved');
  }
}
