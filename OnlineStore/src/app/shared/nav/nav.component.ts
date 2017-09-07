import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { AuthenticationService } from './../services/authentication.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  public isLoggedIn: boolean;
  public isAdminLoggedIn: boolean;

  constructor(private AuthenticationService: AuthenticationService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }
  logout() {
    // console.log('clicked');s
    this.AuthenticationService.logout();
    this.toastr.success('Logout successfull!', 'SUCCESS!');
  }
  ngOnInit() {
    this.isLoggedIn = this.AuthenticationService.isLoggedIn;
    this.isAdminLoggedIn = this.AuthenticationService.isAdminLoggedIn;
  }
}
