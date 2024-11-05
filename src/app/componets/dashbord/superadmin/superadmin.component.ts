import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalConfig,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models'
@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [SharedModule,NgbTooltipModule,NgbPopoverModule, ShowcodeCardComponent],
  providers: [NgbModalConfig, NgbModal],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss'
})
export class SuperadminComponent {

  content3: any;
  content4: any;
  content5: any;
  content6: any;
  content7: any;

  constructor(config: NgbModalConfig, private modalService: NgbModal,) {
  }
  VerticallyScrol(content3:any) {
		this.modalService.open(content3, {  scrollable: true,centered: true });
	}
  
  
}