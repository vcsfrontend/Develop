import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbCollapseModule,NgbDropdownModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-search-company',
  standalone: true,
  imports: [SharedModule, NgbCollapseModule,NgbDropdownModule,NgbTooltipModule,NgSelectModule],
  templateUrl: './search-company.component.html',
  styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {
  isCollapsed=true;
  isCollapsed1=true;
}
