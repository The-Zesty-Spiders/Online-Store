import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { ApiServices } from './../shared/services/api.services';
import { ChangeOrder } from './models/changeOrder.model';
import { ChangePassword } from './models/ChangePassword.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { User } from './models/user.model';

@Injectable()

export class UsersService {

  constructor(private apiServices: ApiServices) { }

  createUser(email: string, bulstat: string, password: string, confirmPassword: string, companyName: string): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const requestModel = new User(email, bulstat, password, confirmPassword, companyName);

    return this.apiServices.post('api/Account/Register', requestModel, header, false);
  }

  changePassword(oldPassword: string, newPassword: string, confirmPassword: string): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const requestModel = new ChangePassword(oldPassword, newPassword, confirmPassword);
    return this.apiServices.post('api/Account/ChangePassword', requestModel, header, true);
  }

  getUserOrders(): Observable<any> {
    return this.apiServices.get('api/OrderedItems/ShowMyOrders', null, true)
      .map(res => res.json());
  }

  getUserDetails(): Observable<any> {
    return this.apiServices.get('api/account/UserInfo', null, true)
      .map(res => res.json());
  }

  maganeOrders(): Observable<any> {
    return this.apiServices.get('api/Administration/ManageOrderedItems/all', null, true)
      .map(res => res.json());
  }

  changeOrderStatus(finished: boolean, id: number): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const requestModel = new ChangeOrder(id, finished);

    return this.apiServices.post('api/Administration/ManageOrderedItems/update', requestModel, header, true)
      .map(res => res.json());
  }
}
