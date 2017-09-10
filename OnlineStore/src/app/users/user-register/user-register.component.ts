import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from '../models/user.model';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

    model: any = {};
    loading = false;

    constructor(private router: Router, private userService: UsersService, private authenticationService: AuthenticationService,
       public toastr: ToastsManager, public vcr: ViewContainerRef) { }

    register() {
        this.loading = true;
        this.userService.createUser(this.model.email, this.model.bulstat, this.model.password, this.model.confirmPassword, this.model.companyName)
            .subscribe(
                data => {
                    console.log('register OK');
                    this.toastr.success('Registration successful! You can now login!', 'SUCCESS!');
                      setTimeout((router: Router) => {
                        this.router.navigate(['/users/login']);
                      }, 2000);
                },
                error => {
                    console.log(error);
                    const errMsg = error.json().ModelState[''][0];
                    this.toastr.error(`${errMsg}`, 'ERROR!');
                    this.loading = false;
                }
            );
    }
}
