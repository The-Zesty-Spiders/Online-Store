import { Injectable } from '@angular/core';
import { ApiServices } from '../shared/services/api.services';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/http';
import { GlassRequest } from './glass/models/glassRequest.model';
import { AuthenticationService } from '../shared/services/authentication.service';

@Injectable()
export class GlassesService {
  constructor(private apiServices: ApiServices, private authenticationService: AuthenticationService) {}

  public getGlassById(id: number): Observable<any> {
      return this.apiServices.get('api/Products/GetById', id);
  }

  public getGlassesByVehicleInfo(makeId: number, modelId: number, bodyTypeId: number): Observable<any> {
      const header = { 'Content-Type': 'application/json' };

      const requestModel = new GlassRequest(makeId, modelId, bodyTypeId);
      return this.apiServices.post('api/Products/GetByVehicleInfo', requestModel, header);
  }

  public buyGlass(userId: string, glassId: number) {
    const header = { 'Content-Type': 'application/json' };
    // TODO authorization
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });

    return this.apiServices.post(`api/OrderedItems/order/${glassId}`, null, header);
  }
}

