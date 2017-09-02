import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BodyTypeRequest } from './bodyTypeRequest.model';
import { GlassRequest } from "./glassRequest.model";

const BASE_URL = 'http://gggonlineshop.apphb.com/';
const HEADER = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  getGlassById(id: number) {
    const url = `${BASE_URL}api/Products/GetById/${id}`;
    const response = this.http.get(url).map(res => res.json());

    return response;
  }

  getMakes() {
    const url = `${BASE_URL}api/Makes`;
    const response = this.http.get(url).map(res => res.json());

    return response;
  }

  getModelsByMakeId(makeId: number) {
    const url = `${BASE_URL}api/Models/GetByMakeId/${makeId}`;
    const response = this.http.get(url).map(res => res.json());

    return response;
  }

  getBodyTypesByMakeAndModelIds(makeId: number, modelId: number) {
    const options = new RequestOptions({headers: HEADER});

    const requestModel = new BodyTypeRequest(makeId, modelId);
    const url = `${BASE_URL}api/BodyTypes/GetByMakeAndModelIds`;
    const response = this.http.post(url, JSON.stringify(requestModel), options).map(res => res.json());

    return response;
  }

  getGlassesByVehicleInfo(makeId: number, modelId: number, bodyTypeId: number) {
    const options = new RequestOptions({headers: HEADER});

    const requestModel = new GlassRequest(makeId, modelId, bodyTypeId);
    const url = `${BASE_URL}api/Products/GetByVehicleInfo`;
    const response = this.http.post(url, JSON.stringify(requestModel), options).map(res => res.json());

    return response;
  }
}
