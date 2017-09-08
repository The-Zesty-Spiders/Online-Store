import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from './search.service';
import { SharedModule } from '../shared/shared.module';
import { GlassesModule } from '../glasses/glasses.module';

@NgModule({
  imports: [
    CommonModule,
    GlassesModule,
    SearchRoutingModule,
    SharedModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
