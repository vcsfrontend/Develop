import { Component,Input } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbNavModule,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navs-tabs',
  standalone: true,
  imports: [SharedModule,NgbNavModule,NgbDropdownModule],
  templateUrl: './navs-tabs.component.html',
  styleUrl: './navs-tabs.component.scss'
})
export class NavsTabsComponent {
  
  active5='Home';
  active6='Services'
}
