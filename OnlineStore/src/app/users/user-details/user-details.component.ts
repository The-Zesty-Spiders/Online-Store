import { Component, OnInit } from '@angular/core';

import { UsersService } from './../users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details.component',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public details: User;
  constructor(private UsersService: UsersService) { }

  ngOnInit() {
    this.UsersService.getUserDetails()
      .subscribe(details => {
        this.details = details;
      });
  }
}
