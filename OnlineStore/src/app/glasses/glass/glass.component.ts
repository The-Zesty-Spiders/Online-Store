import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { GlassResponse } from './models/glassResponse.model';
import { GlassesService } from '../glasses.service';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {
  glass: GlassResponse;

  constructor(
     private route: ActivatedRoute,
     private glassesService: GlassesService
  ) { }

  buyGlass() {
    // TODO
    let glassId: number;
    this.route.params.subscribe(params => {
      if (params['id']) {
        glassId = params['id'];
      }else {
        // TODO show error
      }
    });
    this.glassesService.buyGlass('userId: string', glassId);
    // get status code and if OK show successfull message
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.glassesService.getGlassById(params['id'])
        .subscribe(glass => this.glass = glass);
    });
  }
}
