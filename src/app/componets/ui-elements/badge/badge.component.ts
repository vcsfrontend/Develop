import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import * as PrismCode from '../../../shared/prismData/badge';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  prsimCodeData: any = PrismCode;
}
