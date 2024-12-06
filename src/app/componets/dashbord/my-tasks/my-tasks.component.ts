import { Component,ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../app/shared/common/sharedmodule';
import { NgbDropdownModule,NgbNavModule,NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { ActivatedRoute } from '@angular/router';
import { SwitherService } from '../../../shared/services/swither.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule,FilePondModule,RouterModule ,],
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.scss'
})
export class MyTasksComponent {
  @ViewChild("myPond") myPond!: FilePondComponent;
  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  pondFiles: FilePond.FilePondOptions["files"] = [
    {
      source: "assets/photo.jpeg",
      options: {
        type: "local",
      },
    },
  ];

  modal: any; proId:any; proData:any; userData:any; description: string = ''; heading: string = '';
  proStatus: string = '';
  constructor(private modalService: NgbModal, private route:ActivatedRoute, private toastr: ToastrService,
    private switchService: SwitherService, private router:Router) {
    this.route.queryParams.subscribe(params => {
      this.proId = params['projectId'];
      // console.log('prodetails - ',this.proId);
    });
    this.userData = localStorage.getItem('userDetails');
  }

  ngOnInit(): void {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
    flatpickr('#addignedDate', this.flatpickrOptions);
    this.getProjectDetails();
  }

  getProjectDetails(){
    this.switchService.onProjectDtls(this.proId).subscribe({ next: (res:any) =>{
      if(res){    
        this.proData = res;
        this.proStatus = res?.projStatus
        console.log('proData -', this.proData);
      } else {
        this.toastr.error(res.message);
        }
      },
      error: (error) => {
        this.toastr.error(error.statusText);
      },
      })
  }

  onSubmitTaskDetails(){
    let payload = {
      "id": 0,
      "projectId": this.proData.projectId,
      "heading": this.heading,
      // "clientname": "string",
      "projectStatus": this.proData.projStatus,
      "description": this.description,
      "updatedBy": JSON.parse(this.userData).username,
    }
    this.switchService.onAddTaskDtls(payload).subscribe({ next: (res:any) =>{
    if(res.status == true){
      this.toastr.success(res.message);
      this.router.navigate(['/dashboard/projects']);
      return;
      } else {
        this.toastr.error(res.message);
        }
      },
      error: (error) => {
        this.toastr.error(error.statusText);
      },
    })
  }

  open(content:any) {
    this.modalService.open(content,{ centered: true });
  }
  
  flatpickrOptions: any = {
    inline: true
  };
  
  pondHandleInit() {
    // console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log("A file was added", event);
  }
  pondHandleActivateFile(event: any) {
    // console.log("A file was activated", event);
  }
}
