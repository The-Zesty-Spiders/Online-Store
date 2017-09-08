import { Component, Input } from '@angular/core';
import { GlassShortResponse } from '../glass/models/glassShortResponse.model';

@Component({
  selector: 'app-glasses-list',
  templateUrl: './glasses-list.component.html',
  styleUrls: ['./glasses-list.component.css']
})
export class GlassesListComponent {
  @Input() public glassesList: GlassShortResponse[];
}
