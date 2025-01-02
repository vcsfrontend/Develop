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
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule, CommonModule,
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
  proStatus: string = ''; stageLst: any;
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
    this.getProjectDetails(); this.getAllStages();
  }

  isDisabled(option: any): boolean {
    const selectedStatus = this.dynamicFields.find(field => field.value === this.proStatus);
    if (selectedStatus) {
      return option.percent === selectedStatus.percent;
    }
    return false;
  }

  updateDisabledFields() {
    let disable = true;
    this.dynamicFields = this.dynamicFields.map(field => {
      if (field.value === this.proStatus) {
        disable = false;
      }
      return { ...field, disabled: disable };
    });
  }

  dynamicFields: { value: string; percent: number; fieldNm: string; disabled?: boolean }[] = [];
  initializeDynamicFields() {
    // Loop through f1 to f30 and add only those with non-empty values to dynamicFields
    for (let i = 1; i <= 30; i++) {
      const fieldName = `f${i}`;
      const percentName = `f${i}Percent`;
      if (this.stageLst[fieldName]) {
        this.dynamicFields.push({
          value: this.stageLst[fieldName],
          percent: this.stageLst[percentName],
          fieldNm: fieldName
        });
      }
    }
    this.updateDisabledFields();
    this.onStageChange(this.proData.projStatus);

  }

  getAllStages(){
    let payload = {
      "email": JSON.parse(this.userData).email,
      "companyname": JSON.parse(this.userData).companyName,
      "companycode": JSON.parse(this.userData).companyCode,
      "type": JSON.parse(this.userData).type
    }
    this.switchService.getStages(payload).subscribe({ next: (res:any) => {
    if(res){
      this.stageLst = res;
      this.initializeDynamicFields();
      } else{
        this.toastr.error(res.message)
      }
    },
    error: (error) => {
      this.toastr.error(error.statusText);
    },
    })
  }

  getProjectDetails(){
    this.switchService.onProjectDtls(this.proId).subscribe({ next: (res:any) =>{
    if(res){    
      this.proData = res;
      this.proStatus = res?.projStatus;
    } else {
      this.toastr.error(res.message);
      }
    },
    error: (error) => {
      this.toastr.error(error.statusText);
    },
    })
  }
  selectedPercent:any;
  onStageChange(data:any){
    const selectedPlan = this.dynamicFields.find((item:any) => item.value === data);
    this.selectedPercent = selectedPlan ? selectedPlan.percent : null;
  }

  onSubmitTaskDetails(){
    if(this.heading == '' && this.description == ''){
      this.toastr.warning('please enter heading and description');
    } else if(this.heading == ''){
      this.toastr.warning('please enter heading');
    } else if(this.description == ''){
      this.toastr.warning('please enter description');
    } else {
      let payload = {
        "id": this.proData.id,
        "projectId": this.proData.projectId,
        "heading": this.heading,
        // "clientname": "string",
        "projectStatus": this.proStatus,
        "description": this.description,
        "updatedBy": JSON.parse(this.userData).username,
        "percentage": this.selectedPercent
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
