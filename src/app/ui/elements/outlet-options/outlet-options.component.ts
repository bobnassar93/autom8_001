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
  constructor(public functions: FunctionsService, public router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.queryParamMap.get('id');
    const index = this.router.snapshot.queryParamMap.get('index');

    this.item = this.functions.getItem(index, id);
  }

  previewColor(color, el) {
    el.style = `background: ${color}`;
  }
}
