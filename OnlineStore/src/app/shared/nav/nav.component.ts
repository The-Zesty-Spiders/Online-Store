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

  constructor(public authenticationService: AuthenticationService,
              public toastr: ToastsManager,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  logout() {
    this.authenticationService.logout();
    this.toastr.success('Logout successfull!', 'SUCCESS!');
  }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isLoggedIn;
    this.isAdminLoggedIn = this.authenticationService.isAdminLoggedIn;
  }
}
