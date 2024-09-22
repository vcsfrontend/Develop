import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismcodeData from '../../../shared/prismData/tooltips';
@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [SharedModule,NgbTooltipModule, ShowcodeCardComponent],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.scss'
})
export class TooltipsComponent {
  prismCode = prismcodeData;

}
