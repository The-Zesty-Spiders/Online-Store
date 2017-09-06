import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../shared/services/alert.service';
import { AuthenticationService } from './../..//shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model : any = {};
  loading = false;
  error = '';

  constructor( private router: Router, private authenticationService: AuthenticationService, private AlertService: AlertService) { }

  ngOnInit() {
      this.authenticationService.logout();
  }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(result => {
              if (result === true) {
                this.router.navigate(['/']);
                this.AlertService.success('You have logged in successfully!', true);
              } else {
                this.AlertService.error('Username or password is incorrect', true);
                this.loading = false;
              }
          });
  }
}
