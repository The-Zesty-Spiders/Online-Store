import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { ApiServices } from './../shared/services/api.services';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { User } from './../models/user.model';
import { changeOrder } from '../models/changeOrder.model';

@Injectable()
export class UsersService {

  constructor(private apiServices: ApiServices) { }

  createUser(email: string, bulstat: string, password: string, confirmPassword: string, companyName: string): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const requestModel = new User(email, bulstat, password, confirmPassword, companyName);
    console.log(requestModel);
    return this.apiServices.post('api/Account/Register', requestModel, header, false);
  }

  getUserOrders(): Observable<any> {
    return this.apiServices.get('api/OrderedItems/ShowMyOrders', null, true);
  }

  getUserDetails(): Observable<any> {
    return this.apiServices.get('api/account/UserInfo', null, true);
  }

  maganeOrders(): Observable<any> {
    return this.apiServices.get('api/Administration/ManageOrderedItems/all', null, true);
  }

  changeOrderStatus(finished: boolean, id: number): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const requestModel = new changeOrder(id, finished);
    return this.apiServices.post('api/Administration/ManageOrderedItems/update', requestModel, header, true);
  }
}

