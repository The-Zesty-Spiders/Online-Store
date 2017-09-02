import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { GlassResponse } from './models/GlassResponse.model';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {
  glass: GlassResponse;

  constructor(
     private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.apiService.getGlassById(params['id'])
        .subscribe(glass => this.glass = glass);
    });
  }

}
