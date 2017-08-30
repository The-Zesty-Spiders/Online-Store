import {Component, Input, OnInit} from '@angular/core';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isLoggedIn: boolean;
  constructor(private AuthenticationService: AuthenticationService) {
    // this.isLoggedIn = this.AuthenticationService.isLoggedIn;
  }
  logout() {
    // console.log('LOG OUT CLICKED');
    this.AuthenticationService.logout();
  }
  ngOnInit() {
    this.isLoggedIn = this.AuthenticationService.isLoggedIn;
  }

}
