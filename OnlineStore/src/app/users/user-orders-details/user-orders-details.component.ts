import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../shared/services/authentication.service';
import {Order} from '../../models/order.model';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-orders-details.component',
  templateUrl: './user-orders-details.component.html',
  styleUrls: ['./user-orders-details.component.css'],
})
export class UserOrdersDetailsComponent implements OnInit {
  public currentUser;
  public orders: Order[];

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {

    this.userService.getUserOrders()
      .subscribe(orders =>
        this.orders = orders
      );
  }
}
