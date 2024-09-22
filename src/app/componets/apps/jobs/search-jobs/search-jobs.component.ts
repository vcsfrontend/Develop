import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbCollapseModule,NgbDropdownModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-jobs',
  standalone: true,
  imports: [SharedModule,NgbCollapseModule,NgbDropdownModule,NgbTooltipModule,NouisliderModule,FormsModule],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {
  isCollapsed=true;
  isCollapsed1=true;
  public someRange: number[] = [0.00, 50000.00];
}
