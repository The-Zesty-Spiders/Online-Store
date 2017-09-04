import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../shared/services/alert.service';
import { Router } from '@angular/router';
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

    constructor(private router: Router, private userService: UsersService, private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}
