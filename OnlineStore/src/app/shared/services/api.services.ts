import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'http://gggonlineshop.apphb.com/';

@Injectable()
export class ApiServices {

  constructor(private http: Http) {}

  public get(url: string, id?: number): Observable<any> {
    let requestUrl = `${BASE_URL}/${url}`;
    if (id != null) {
      requestUrl += `/${id}`;
    }

    return this.http.get(requestUrl).map(res => res.json());
  }

  public post(url: string, requestModel, header): Observable<any> {
    let requestUrl = `${BASE_URL}${url}`;

    let options = new RequestOptions({headers: header});
    return this.http.post(requestUrl, JSON.stringify(requestModel), options)
                      .map(res => res.json());
  }
}
