import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassComponent } from './glass/glass.component';

const routes: Routes = [
  {
    path: 'bycar',
    component: GlassesListComponent,
  },
  {
    path: ':id',
    component: GlassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlassesRoutingModule { }
