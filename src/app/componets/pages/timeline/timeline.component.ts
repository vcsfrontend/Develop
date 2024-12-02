import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule,NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { SwitherService } from '../../../shared/services/swither.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  modal: any; proId: string = ''; projectCycleData: any;
  VerticallyScrol(content1:any) {
		this.modalService.open(content1, {  scrollable: true,centered: true,size: 'lg' });
	}
  constructor( private modalService: NgbModal, private route:ActivatedRoute, 
    private switchService: SwitherService, private toastr: ToastrService){
    this.route.queryParams.subscribe(params => {
      this.proId = params['projectId'];
      console.log('prodetails - ',this.proId);
    });
  }

  ngOnInit(): void {
    if(this.proId){
      this.getProjectDetails();
    }
  }

  getProjectDetails(){
    this.switchService.getTaskDtls(this.proId).subscribe({ next: (res:any) =>{
      if(res){    
        this.projectCycleData = res;
        console.log('response -', res);
      } else {
        this.toastr.error(res.message);
        }
      },
      error: (error) => {
        this.toastr.error(error.statusText);
      },
      })
  }
    
}
