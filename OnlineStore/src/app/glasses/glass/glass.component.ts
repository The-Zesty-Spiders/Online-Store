import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GlassResponse } from './models/glassResponse.model';
import { GlassesService } from '../glasses.service';
import { AlertService } from '../../shared/services/alert.service';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {
  glass: GlassResponse;

  constructor(
     private route: ActivatedRoute,
     private glassesService: GlassesService,
     private router: Router,
     private alertService: AlertService,
     private authenticationService: AuthenticationService
  ) { }

  public buyGlass() {
    let glassId: number;
    this.route.params.subscribe(params => {
      if (params['id']) {
        glassId = params['id'];
      }else {
        this.alertService.error('no glassId', false);
      }
    });

    this.glassesService.buyGlass(glassId)
        .subscribe(result => {
          console.log(result);
          if (result.Description) {
            this.router.navigate(['/search']);
            this.alertService.success(`You have bought product (${result.Description})`, false);
          } else {
            this.alertService.error('Error while buying product. Please try again', false);
          }
        });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.glassesService.getGlassById(params['id'])
        .subscribe(glass => this.glass = glass);
    });
  }
}
