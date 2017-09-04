import { Component, OnInit } from '@angular/core';

import { AlertService } from './../../shared/services/alert.service';
import { Order } from '../../models/order.model';
import { Response } from '@angular/http';
import { UsersService } from './../users.service';
import { changeOrder } from '../../models/changeOrder.model';

@Component({
  selector: 'app-admin-manage-orders',
  templateUrl: './admin-manage-orders.component.html',
  styleUrls: ['./admin-manage-orders.component.css']
})
export class AdminManageOrdersComponent implements OnInit {

  public order: changeOrder;
  public id: number;
  public finished: boolean;
  public allOrders: Order[];
  public statuses: boolean[];
  public response: any;

  constructor(private UsersService: UsersService, private AlertService: AlertService) {
    this.statuses = [false, true];
  }

  selectNewStatus(finished: boolean, id: number) {
    this.finished = finished;
    this.id = id;
    this.UsersService.changeOrderStatus(this.finished, this.id)
      .subscribe(response => {
        console.log(response);
        this.response = response;
        this.AlertService.success(this.response, true);
      });
  }

  ngOnInit() {
    this.UsersService.maganeOrders()
      .subscribe(allOrders => {
        // console.log(allOrders);
        this.allOrders = allOrders;
      });
  }

}
