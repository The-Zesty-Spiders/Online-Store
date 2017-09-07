import { Component, OnInit } from '@angular/core';
import { Make } from './models/make.model';
import { Model } from './models/model.model';
import { Params, ActivatedRoute } from '@angular/router';
import { BodyType } from './models/bodyType.model';
import { GlassShortResponse } from './models/glassShortResponse.model';
import { GlassesService } from '../../glasses/glasses.service';
import { SearchService } from '../search.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public makes: Make[] = [];
  public models: Model[] = [];
  public bodyTypes: BodyType[] = [];
  public glasses: GlassShortResponse[] [];

  makeId: number;
// TODO could be nulls (check form model null)
  modelId: number;
  bodyTypeId: number;

  constructor(
      private route: ActivatedRoute,
      private glassesService: GlassesService,
      private searchService: SearchService,
      private alertService: AlertService,
  ) { }

  selectMake(makeId: number) {
    this.makeId = makeId;
    this.modelId = null;
    this.bodyTypeId = null;
    this.models = [];
    this.bodyTypes = [];

    if (this.makeId !== -1) {
      this.getModels();
    }
  }

  selectModel(modelId: number) {
    this.modelId = modelId;
    this.bodyTypeId = null;
    this.bodyTypes = [];

    if (this.makeId != -1 && this.modelId != -1) {
      this.getBodyTypes();
    }
  }

  selectBodyType(bodyTypeId: number) {
    this.bodyTypeId = bodyTypeId;
  }

  getMakes() {
    this.searchService.getMakes()
      .subscribe(makes => this.makes = makes);
  }

  getModels() {
    this.searchService.getModelsByMakeId(this.makeId)
      .subscribe(data => this.models = data);
  }

  getBodyTypes() {
    this.searchService.getBodyTypesByMakeAndModelIds(this.makeId, this.modelId)
    .subscribe(bodyTypes => this.bodyTypes = bodyTypes);
  }

  getGlasses() {
    if (this.makeId == null || this.makeId == -1) {
      this.alertService.error('Please select make');
    }else if (this.models.length > 0 &&
      (this.modelId == null || this.modelId == -1)) {
        this.alertService.error('Please select model');
    }else if (this.bodyTypes.length > 0 &&
      (this.bodyTypeId == null || this.bodyTypeId == -1)) {
        this.alertService.error('Please select bodyType');
    } else {
      if (this.modelId == -1) {
        this.modelId = null;
      }

      if (this.bodyTypeId == -1) {
        this.bodyTypeId = null;
      }

      this.glassesService.getGlassesByVehicleInfo(this.makeId, this.modelId, this.bodyTypeId)
      .subscribe(glasses => this.glasses = glasses);
    }
  }

  ngOnInit() {
    this.getMakes();
  }
}
