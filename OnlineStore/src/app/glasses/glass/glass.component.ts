import {ActivatedRoute, Params, Router} from '@angular/router';
import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { AuthenticationService } from '../../shared/services/authentication.service';
import { GlassResponse } from './models/glassResponse.model';
import { GlassesService } from '../glasses.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
     private authenticationService: AuthenticationService,
     public toastr: ToastsManager,
     public vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  public buyGlass() {
    let glassId: number;
    this.route.params.subscribe(params => {
      if (params['id']) {
        glassId = params['id'];
      }else {
        this.toastr.error('No glassId', 'ERROR');
      }
    });

    this.glassesService.buyGlass(glassId)
        .subscribe(result => {
          console.log(result);
          if (result.Description) {
            this.toastr.success(`You have bought product (${result.Description})`, 'SUCCESS');
            setTimeout((router: Router) => {
              this.router.navigate(['/search']);
            }, 5000);
          } else {
            this.toastr.error('Error while buying product. Please try again', 'ERROR');
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
