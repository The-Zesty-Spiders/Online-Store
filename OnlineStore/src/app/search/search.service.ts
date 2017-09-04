import { Injectable } from '@angular/core';
import { ApiServices } from '../shared/services/api.services';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/http';
import { BodyTypeRequest } from './search/models/bodyTypeRequest.model';

@Injectable()
export class SearchService {
  constructor(private apiServices: ApiServices) {}

  public getMakes(): Observable<any> {
    return this.apiServices.get('api/Makes');
  }

  public getModelsByMakeId(makeId: number): Observable<any> {
    return this.apiServices.get('api/Models/GetByMakeId', makeId);
  }

  public getBodyTypesByMakeAndModelIds(makeId: number, modelId: number): Observable<any> {
    const header = { 'Content-Type': 'application/json' };
    const requestModel = new BodyTypeRequest(makeId, modelId);
    return this.apiServices.post('api/BodyTypes/GetByMakeAndModelIds', requestModel, header);
  }
}
