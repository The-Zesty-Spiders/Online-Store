import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../shared/services/alert.service';
import {AuthenticationService} from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from './../users.service';

@Component({
//   moduleId: module.id,
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

    model: any = {};
    loading = false;

    constructor(private router: Router, private userService: UsersService, private authenticationService: AuthenticationService, private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.createUser(this.model.email, this.model.bulstat, this.model.password, this.model.confirmPassword, this.model.companyName)
            .subscribe(
                data => {
                    console.log('register OK');
                    this.router.navigate(['/']);
                    this.alertService.success('Registration successful! You can now login!', true);
                },
                error => {
                    console.log('register NOK');
                    console.log('error' + error.json().data);
                    this.alertService.error(error, true);
                    this.loading = false;
                }
            );
    }
}
