import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { BodyType } from './models/bodyType.model';
import { GlassesService } from '../../glasses/glasses.service';
import { Make } from './models/make.model';
import { Model } from './models/model.model';
import { SearchService } from '../search.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { GlassShortResponse } from '../../glasses/glass/models/glassShortResponse.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  public makes: Make[] = [];
  public models: Model[] = [];
  public bodyTypes: BodyType[] = [];
  public glasses: GlassShortResponse[] = [];

  makeId: number;
// TODO could be nulls (check form model null)
  modelId: number;
  bodyTypeId: number;

  constructor(
      private route: ActivatedRoute,
      private glassesService: GlassesService,
      private searchService: SearchService,
      public toastr: ToastsManager,
      public vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
      }

  selectMake(makeId: number) {
    this.makeId = makeId;
    this.modelId = null;
    this.bodyTypeId = null;
    this.models = [];
    this.bodyTypes = [];

    if (this.makeId !== 0) {
      this.getModels();
    }
  }

  selectModel(modelId: number) {
    this.modelId = modelId;
    this.bodyTypeId = null;
    this.bodyTypes = [];

    if (+this.makeId !== 0 && +this.modelId !== 0) {
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
    // console.log('makeId: ' + this.makeId);
    // console.log('modelId: ' + this.modelId);
    // console.log('bodyTypeId: ' + this.bodyTypeId);
    // console.log('this.makeId === 0 : ' + (+this.makeId === 0));
    // console.log('this.modelId == null : ' + (this.modelId == null));
    // console.log('this.bodyTypeId == 0 : ' + (this.bodyTypeId == 0));
    if (this.makeId == null || +this.makeId === 0) {
      this.toastr.info('Please select make', 'INFO:');
    }else if (this.models.length > 0 &&
      (this.modelId == null || +this.modelId === 0)) {
        this.toastr.info('Please select model', 'INFO');
    }else if (this.bodyTypes.length > 0 &&
      (this.bodyTypeId == null || +this.bodyTypeId === 0)) {
        this.toastr.info('Please select bodyType', 'INFO');
    } else {
      if (+this.modelId === 0) {
        this.modelId = null;
      }

      if (+this.bodyTypeId === 0) {
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
