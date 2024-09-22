import { Component,ViewChild} from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import {
  NgbDropdownModule,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [SharedModule, FilePondModule,NgbDropdownModule, NgSelectModule,FormsModule,FlatpickrModule, OverlayscrollbarsModule],
  templateUrl: './kanban-board.component.html',
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  styleUrl: './kanban-board.component.scss',
})
export class KanbanBoardComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {

  }

  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openTask(content1: any) {
    this.modalService.open(content1, { centered: true });
  }
  // selectedDate: Date | null = null; 
  flatpickrOptions: any = {
    inline: true,
   
  };
  // flatpickrOptions: FlatpickrOptions;

  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#targetDate', this.flatpickrOptions)
  }
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
  
  ];
  
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
