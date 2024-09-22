import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as PrismCode from '../../../shared/prismData/dropdowns';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [SharedModule,NgbModule,ShowcodeCardComponent],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss'
})
export class DropdownsComponent {
  prsimCodeData: any = PrismCode;
}
