import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { GlassResponse } from './GlassResponse.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL = 'http://gggonlineshop.apphb.com/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

    getGlassById(id: number) {
      // const headers = new Headers({'Content-type': 'text/plain'});
      // headers.append('Access-Control-Allow-Origin', '*');

      // const options = new RequestOptions({headers: headers});

      const url = `${BASE_URL}api/Products/GetById/${id}`;
      const response = this.http.get(url).map(res => res.json());
      return response;
    }
}
