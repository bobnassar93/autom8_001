import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService implements OnInit {

  public loggedIn = true;
  private columnCount = 2;
  private orderType = 'list';

  constructor() { }

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
}
