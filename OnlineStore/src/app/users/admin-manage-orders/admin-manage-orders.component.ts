import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { Order } from '../../models/order.model';
import { Response } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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

  constructor(private UsersService: UsersService, public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.statuses = [false, true];
  }

  public selectNewStatus(finished: boolean, id: number) {
    this.finished = finished;
    this.id = id;
    this.UsersService.changeOrderStatus(this.finished, this.id)
      .subscribe(
        (response: Response) => {
          this.response = response;
          this.toastr.success('Status changed!', 'SUCCESS!'
        );
        },
        (error: Error) => {
          this.toastr.error('Failed to change status!', 'ERROR!');
        }
    );
  }

  ngOnInit() {
    this.UsersService.maganeOrders()
      .subscribe(allOrders => {
        this.allOrders = allOrders;
      });
  }

}
