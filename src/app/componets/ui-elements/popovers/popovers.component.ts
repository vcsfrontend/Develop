import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../shared/prismData/popovers';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';

@Component({
  selector: 'app-popovers',
  standalone: true,
  imports: [SharedModule,NgbPopoverModule, ShowcodeCardComponent],
  templateUrl: './popovers.component.html',
  styleUrl: './popovers.component.scss'
})

export class PopoversComponent {
  prismCode = prismcodeData;

}
