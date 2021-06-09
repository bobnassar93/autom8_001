import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-remote',
  templateUrl: './tv-remote.component.html',
  styleUrls: ['./tv-remote.component.scss'],
})
export class TvRemoteComponent implements OnInit {

  @Input() ID!: number;

  constructor() { }

  ngOnInit() {}

}
