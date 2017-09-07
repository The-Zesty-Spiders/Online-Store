import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { AuthenticationService } from './../..//shared/services/authentication.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor( private router: Router, private authenticationService: AuthenticationService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn) {
      this.authenticationService.logout();
    }
  }
  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
            (response: Response) => {
              this.toastr.success('Login successfull!', 'SUCCESS!');
              setTimeout((router: Router) => {
                this.router.navigate(['/']);
              }, 2000);
            },
            (error: Error) => {
              this.loading = false;
              this.toastr.error('Invalid username or password!', 'ERROR!');
            }
        );
  }
}
