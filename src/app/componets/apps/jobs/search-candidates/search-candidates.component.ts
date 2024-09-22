import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';

import { NgbCollapseModule, NgbDropdownModule ,NgbTooltipModule  } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-search-candidates',
  standalone: true,
  imports: [SharedModule, NgbCollapseModule, NgbDropdownModule, NgbTooltipModule, NouisliderModule, FormsModule, NgSelectModule],
  templateUrl: './search-candidates.component.html',
  styleUrl: './search-candidates.component.scss'
})
export class SearchCandidatesComponent {
  isCollapsed=true;
  isCollapsed1=true;
  public someRange: number[] = [0.00, 50000.00];
 
}
