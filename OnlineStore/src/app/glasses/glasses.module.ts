import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassesRoutingModule } from './glasses-routing.module';
import { GlassComponent } from './glass/glass.component';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassesService } from './glasses.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GlassesRoutingModule,
    SharedModule
  ],
  declarations: [GlassComponent, GlassesListComponent],
  providers: [GlassesService]
})
export class GlassesModule { }
