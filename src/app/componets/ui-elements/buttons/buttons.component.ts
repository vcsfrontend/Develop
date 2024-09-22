import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import * as PrismCode from '../../../shared/prismData/buttons';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  prsimCodeData: any = PrismCode;
}
