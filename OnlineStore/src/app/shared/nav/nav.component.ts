import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  public isLoggedIn: boolean;
  public isAdminLoggedIn: boolean;

  constructor(private AuthenticationService: AuthenticationService) { }
  logout() {
    this.AuthenticationService.logout();
  }
  ngOnInit() {
    this.isLoggedIn = this.AuthenticationService.isLoggedIn;
    this.isAdminLoggedIn = this.AuthenticationService.isAdminLoggedIn;
  }
}
