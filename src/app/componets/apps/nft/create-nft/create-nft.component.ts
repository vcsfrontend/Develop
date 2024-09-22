import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  selector: 'app-create-nft',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FilePondModule],
  templateUrl: './create-nft.component.html',
  styleUrl: './create-nft.component.scss'
})
export class CreateNftComponent {
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
    // console.log("FilePond has initialised", this.myPond);
  }
  
  pondHandleAddFile(event: any) {
    // console.log("A file was added", event);
  }
  
  pondHandleActivateFile(event: any) {
    // console.log("A file was activated", event);
  }
}
