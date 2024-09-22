import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import * as PrismCode from '../../../shared/prismData/buttongroup';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent,NgbDropdownModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {
  prsimCodeData: any = PrismCode;
}
