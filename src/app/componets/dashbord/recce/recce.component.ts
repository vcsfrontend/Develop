import { Component,HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../app/shared/common/sharedmodule';
import { NgbDropdownModule, NgbNavModule, NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-recce',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule, CommonModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule , OverlayscrollbarsModule],
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults, SharedModule,NgbNavModule,NgbDropdownModule],
  templateUrl: './recce.component.html',
  styleUrl: './recce.component.scss'
})
export class RecceComponent {

  activeTab: string = 'tab1';
  tab1Checked: boolean = false;
  tab2Checked: boolean = false;
  tab3Checked: boolean = false;

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  fileName: string | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = null; // Reset if no file selected
    }
  }

  modal: any; active5='Home';
  active6='Home'
  active7='Home1'
  constructor(// config: NgbModalConfig,
    private modalService: NgbModal) {}
  
  
    
  open(content:any) {
    this.modalService.open(content,{ centered: true });
  }

  openModal(content:any) {
    this.modalService.open(content, { size: 'lg' }); // 'lg' for large modal
  }

  // openModal1(content:any){
  //   this.modalService.open(content, { size: 'xl' }); // 'lg' for large modal
  // }
  
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
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.myFileClick();
    this.detailsClick(); 
  }

  myFileClick() {
    const fileManagerFolders = document.querySelector('.file-manager-folders');
    const fileManagerNavigation = document.querySelector('.file-manager-navigation');

    if (window.innerWidth <= 992) {
      if (fileManagerFolders) {
        fileManagerFolders.classList.add('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.add('close');
      }
    } else {
      if (fileManagerFolders) {
        fileManagerFolders.classList.remove('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.remove('close');
      }
    }
  }
  detailsClick() {
    const selectedFileDetails = document.querySelector('.selected-file-details');

    if (window.innerWidth <= 1180 && selectedFileDetails) {
      selectedFileDetails.classList.add('open');
    } else {
      // Close the details when the window width is greater than 992
      if (selectedFileDetails) {
        selectedFileDetails.classList.remove('open');
      }
  }
  }

  
}