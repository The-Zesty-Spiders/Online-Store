import { RouterModule, Routes } from '@angular/router';

import { GlassComponent } from './glass/glass.component';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'bycar',
    component: GlassesListComponent,
  },
  {
    path:':id',
    component: GlassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlassesRoutingModule { }
