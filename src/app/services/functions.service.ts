import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService implements OnInit {

  public loggedIn = false;
  private columnCount = 2;
  private orderType = 'list';

  constructor() { }

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

  ngOnInit(): void{

  }
}
