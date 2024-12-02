import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule,NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  modal: any;
  VerticallyScrol(content1:any) {
		this.modalService.open(content1, {  scrollable: true,centered: true,size: 'lg' });
	}
  constructor( private modalService: NgbModal,){}
    
}
