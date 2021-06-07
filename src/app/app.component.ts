import { Component } from '@angular/core';
import { FunctionsService } from './services/functions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public functions: FunctionsService) {}
}
