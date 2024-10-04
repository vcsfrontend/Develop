import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../app/shared/common/sharedmodule';
import { NgbDropdownModule, NgbNavModule, NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recce',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule, CommonModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule],
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
  constructor(// config: NgbModalConfig,
    private modalService: NgbModal) {}
  
  open(content:any) {
    this.modalService.open(content,{ centered: true });
  }

  openModal(content:any) {
    this.modalService.open(content, { size: 'lg' }); // 'lg' for large modal
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
}