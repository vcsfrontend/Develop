import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbAccordionConfig,NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/accordion'
@Component({
  selector: 'app-accordions-collapse',
  standalone: true,
  imports: [SharedModule,NgbAccordionModule,NgbCollapseModule, ShowcodeCardComponent],
  templateUrl: './accordions-collapse.component.html',
  styleUrl: './accordions-collapse.component.scss'
})
export class AccordionsCollapseComponent {
  prismCode = prismCodeData;
  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;

}
isCollapsed = true;
isCollapsed1 = true;
isCollapsed2 = true;
}
