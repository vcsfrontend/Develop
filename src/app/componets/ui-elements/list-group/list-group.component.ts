import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/prismData/listgroup';
// import * as PrismCode from '../../../shared/prismData/dropdowns';

@Component({
  selector: 'app-list-group',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss'
})
export class ListGroupComponent {
  prsimCodeData: any = PrismCode;
  

}
