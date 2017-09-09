import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from '../models/user.model';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-user-details.component',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public details: User;

  model: any = {};
  loading = false;
  constructor(private router: Router,
              private userService: UsersService,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef) { }

  changePassword() {
    this.loading = true;

    this.userService.changePassword(this.model.oldPassword, this.model.newPassword, this.model.confirmPassword)
      .subscribe(
          data => {
              this.toastr.success('Password changed successfully!', 'SUCCESS!');
              this.loading = false;
              this.router.navigate(['/']);
          },
          error => {
              const errMsg = error.json().ModelState[''][0];
              this.loading = false;
              this.toastr.error(`${errMsg}`, 'ERROR!');
          }
      );
  }
  ngOnInit() {
    this.userService.getUserDetails()
      .subscribe(details => {
        this.details = details;
      });
  }
}
