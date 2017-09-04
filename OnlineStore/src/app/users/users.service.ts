import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthenticationService } from './../shared/services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Order } from './../models/order.model';
import { User } from './../models/user.model';
import {changeOrder} from '../models/changeOrder.model';

@Injectable()
export class UsersService {

  constructor( private http: Http, private authenticationService: AuthenticationService) { }

  create(user: User) {
    return this.http.post('http://gggonlineshop.apphb.com/api/Account/Register', user,
      this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        const headers = new Headers({ 'Access-Control-Allow-Origin': '*'});
        headers.append('Content-type', 'application/json');
        return new RequestOptions({ headers: headers });
    }
  }

  getUserOrders(): Observable<Order[]> {
    const headers = new Headers({ 'authorization': 'Bearer ' + this.authenticationService.token});
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.get('https://gggonlineshop.apphb.com/api/OrderedItems/ShowMyOrders', options)
        .map((response: Response) => response.json());
  }


  getUserDetails(): Observable<User> {
    const headers = new Headers({ 'authorization': 'Bearer ' + this.authenticationService.token});
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.get('https://gggonlineshop.apphb.com/api/account/UserInfo', options)
        .map((response: Response) => response.json());
  }

  maganeOrders(): Observable<Order[]> {
    const headers = new Headers({ 'authorization': 'Bearer ' + this.authenticationService.token});
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.get('https://gggonlineshop.apphb.com/api/Administration/ManageOrderedItems/all', options)
        .map((response: Response) => response.json());
  }


  changeOrderStatus(finished: boolean, id: number): Observable<changeOrder> {
    const headers = new Headers({ 'authorization': 'Bearer ' + this.authenticationService.token});
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http.post('https://gggonlineshop.apphb.com/api/Administration/ManageOrderedItems/update', { Id: id, Finished: finished}, options)
        .map((response: Response) => response.json());
  }
}

