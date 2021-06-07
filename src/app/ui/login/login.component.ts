import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private functions: FunctionsService) { 
    
  }

  ngOnInit() {}

  login(){
    this.functions.loggedIn = true;
  }
}
