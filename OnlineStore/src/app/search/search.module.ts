import { ApiServices } from './../shared/services/api.services';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule { }
