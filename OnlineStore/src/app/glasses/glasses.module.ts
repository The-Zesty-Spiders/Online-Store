import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassesRoutingModule } from './glasses-routing.module';
import { GlassComponent } from './glass/glass.component';
import { GlassesListComponent } from './glasses-list/glasses-list.component';

@NgModule({
  imports: [
    CommonModule,
    GlassesRoutingModule
  ],
  declarations: [GlassComponent, GlassesListComponent]
})
export class GlassesModule { }
