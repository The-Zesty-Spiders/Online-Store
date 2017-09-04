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

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.glassesService.getGlassById(params['id'])
        .subscribe(glass => this.glass = glass);
    });
  }
}
