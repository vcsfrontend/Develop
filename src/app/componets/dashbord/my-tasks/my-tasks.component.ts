import { Component,ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../app/shared/common/sharedmodule';
import { NgbDropdownModule,NgbNavModule,NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule,FilePondModule],
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

  modal: any;
    constructor(// config: NgbModalConfig,
      private modalService: NgbModal) {}

    open(content:any) {
      this.modalService.open(content,{ centered: true });
    }
    
    flatpickrOptions: any = {
      inline: true
    };

    ngOnInit(): void {
      this.flatpickrOptions = {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
      };
      flatpickr('#addignedDate', this.flatpickrOptions);
  }
  
  pondHandleInit() {
    console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log("A file was added", event);
  }
  pondHandleActivateFile(event: any) {
    console.log("A file was activated", event);
  }
}
