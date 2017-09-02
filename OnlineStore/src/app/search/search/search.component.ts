import { Component, OnInit } from '@angular/core';
import { Make } from './models/make.model';
import { Model } from './models/model.model';
import { ApiService } from '../../shared/services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { BodyType } from './models/bodyType.model';
import { GlassShortResponse } from './models/glassShortResponse.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  makes: Make[];
  models: Model[];
  bodyTypes: BodyType[];
  glasses: GlassShortResponse[];

  makeId: number;
// TODO could be nulls
  modelId: number;
  bodyTypeId: number;

  constructor(
      private route: ActivatedRoute,
      private apiService: ApiService
  ) { }

  selectMake(makeId: number) {
    this.makeId = makeId;
    this.modelId = null;
    this.bodyTypeId = null;

    this.getModels();
    console.log('models: ' +  this.models);
    console.log('makeId: ' +  this.makeId);

    // TODO check
    if (this.models == null) {
      this.getBodyTypes();
      console.log('here');
      if (this.bodyTypes == null) {
        this.getGlasses();
        console.log('here2');
      }
    }
  }

  selectModel(modelId: number) {
    this.modelId = modelId;
    this.bodyTypeId = null;

    this.getBodyTypes();

    if (this.bodyTypes == null) {
      this.getGlasses();
    }
  }

  selectBodyType(bodyTypeId: number) {
    this.bodyTypeId = bodyTypeId;

    this.getGlasses();
  }

  getMakes() {
    this.apiService.getMakes()
      .subscribe(makes => this.makes = makes);
  }

  getModels() {
    this.apiService.getModelsByMakeId(this.makeId)
      .subscribe(models => this.models = models);
    console.log('models0: ' + this.models);
  }

  getBodyTypes() {
    this.apiService.getBodyTypesByMakeAndModelIds(this.makeId, this.modelId)
    .subscribe(bodyTypes => this.bodyTypes = bodyTypes);
  }

  getGlasses() {
    this.apiService.getGlassesByVehicleInfo(this.makeId, this.modelId, this.bodyTypeId)
    .subscribe(glasses => this.glasses = glasses);
  }

  ngOnInit() {
    this.getMakes();
  }
}
