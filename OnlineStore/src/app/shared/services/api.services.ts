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
    let response = this.http.post(requestUrl, JSON.stringify(requestModel), options)
                      .map(res => res.json());

    return response;
  }

  // getMakes(): Observable<any> {
  //   let url = `${BASE_URL}api/Makes`;
  //   return this.http.get(url).map(res => res.json());
  // }

  // getModelsByMakeId(makeId: number): Observable<any> {
  //   let url = `${BASE_URL}api/Models/GetByMakeId/${makeId}`;
  //   return this.http.get(url).map(res => res.json());
  // }

  // getBodyTypesByMakeAndModelIds(makeId: number, modelId: number): Observable<any> {
  //   const options = new RequestOptions({headers: HEADER});

  //   const requestModel = new BodyTypeRequest(makeId, modelId);
  //   const url = `${BASE_URL}api/BodyTypes/GetByMakeAndModelIds`;
  //   const response = this.http.post(url, JSON.stringify(requestModel), options).map(res => res.json());

  //   return response;
  // }
}
