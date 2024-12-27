import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule,NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { SwitherService } from '../../../shared/services/swither.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SharedModule, CommonModule, RouterModule ],
  providers: [{ provide: ToastrService, useClass: ToastrService }, DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  modal: any; proId: string = ''; projectCycleData: any; utcDate:any; istDate:string = '';
  VerticallyScrol(content1:any) {
		this.modalService.open(content1, {  scrollable: true,centered: true,size: 'lg' });
	}
  constructor( private modalService: NgbModal, private route:ActivatedRoute, 
    private switchService: SwitherService, private toastr: ToastrService, private dp: DatePipe){
    this.route.queryParams.subscribe(params => {
      this.proId = params['projectId'];
    });
  }

  ngOnInit(): void {
    if(this.proId){
      this.getProjectDetails();
    }
  }

  convertToIST(utcDateString: string): Date {
    const utcDate = new Date(utcDateString);
    const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds (5 hours 30 minutes)
    return new Date(utcDate.getTime() + istOffset);
  }

  getProjectDetails(){
    this.switchService.getTaskDtls(this.proId).subscribe({ next: (res:any) =>{
      if(res){    
        // this.projectCycleData = res;
        this.projectCycleData = res?.map((e:any) => ({
          ...e, updatedDateIST: this.convertToIST(e.updatedDate)
        }));
      } else {
        this.toastr.error(res.message);
        }
      },
      error: (error) => {
        this.toastr.error(error.statusText);
      },
      })
  }
  shareContent() {
    // Extract the content you want to share
    const popupContent = document.getElementById('popup-content')?.textContent || 'Default content';

    // Encode the content
    const encodedMessage = encodeURIComponent(popupContent);

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;

    // Open the URL
    window.open(whatsappUrl, '_blank');
  } 
}
