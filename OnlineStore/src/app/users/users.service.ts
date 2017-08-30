import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthenticationService } from './../shared/services/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { User } from './../models/user';

@Injectable()
export class UsersService {

  constructor( private http: Http, private authenticationService: AuthenticationService) { }

  getOrders(): Observable<User[]> {
      // add authorization header with jwt token
      const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
      const options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('http://localhost:60918/api/OrderedItems/ShowMyOrders', options)
          .map((response: Response) => response.json());
  }

}
