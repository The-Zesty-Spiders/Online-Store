import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'http://gggonlineshop.apphb.com/';

@Injectable()
export class ApiServices {

  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  public get(url: string, id?: number, auth?: boolean): Observable<any> {
    let requestUrl = `${BASE_URL}/${url}`;
    if (id != null) {
      requestUrl += `/${id}`;
    }

    if (auth === true) {
      const header = new Headers({ 'authorization': 'Bearer ' + this.authenticationService.token});
      const options = new RequestOptions({headers: header});

      return this.http.get(requestUrl, options);
    }
    return this.http.get(requestUrl);
  }

  public post(url: string, requestModel, header, auth?: boolean): Observable<any> {
    const requestUrl = `${BASE_URL}${url}`;
    const headers = new Headers(header);

    if (auth === true) {
      headers.append('authorization', 'Bearer ' + this.authenticationService.token);
    }

    const options = new RequestOptions({headers: headers});

    return this.http.post(requestUrl, JSON.stringify(requestModel), options);
  }
}
