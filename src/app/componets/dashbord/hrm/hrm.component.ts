//hrm
import { Component,OnInit,ElementRef,  ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule, NgbNavModule, NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { ToastrService } from 'ngx-toastr';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../shared/prismData/toasts';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';







@Component({
  selector: 'app-hrm',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule, CommonModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule , OverlayscrollbarsModule,NgbToastModule, ShowcodeCardComponent],
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults, SharedModule,NgbNavModule,NgbDropdownModule,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './hrm.component.html',
  styleUrl: './hrm.component.scss'
})
export class HrmComponent {
  @ViewChild('toastContainer') toastContainer!: ElementRef;
  prismCode = prismcodeData;
  separateDialCode = false;

	// SearchCountryField = SearchCountryField;
	// CountryISO = CountryISO;
  // PhoneNumberFormat = PhoneNumberFormat;
	// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
	// });

	// changePreferredCountries() {
	// 	this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	// }
  show0 = false;
  autohide = true;
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
    private modalService: NgbModal,
    private toastr: ToastrService) {}
  
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
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.myFileClick();
  //   this.detailsClick(); 
  // }

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
  toasts: { autohide: boolean }[] = [];
  toasts1: { autohide: boolean }[] = [];
  toasts2: { autohide: boolean }[] = [];
  toasts3: { autohide: boolean }[] = [];
  toasts4: { autohide: boolean }[] = [];
  toasts5: { autohide: boolean }[] = [];
  toasts6: { autohide: boolean }[] = [];
  toastsA: { autohide: boolean }[] = [];
  toastsB: { autohide: boolean }[] = [];
  toastsC: { autohide: boolean }[] = [];
  toastsD: { autohide: boolean }[] = [];
  toastsE: { autohide: boolean }[] = [];
  toastsF: { autohide: boolean }[] = [];
  toasts7: { autohide: boolean }[] = [];
  toasts8: { autohide: boolean }[] = [];
  toasts9: { autohide: boolean }[] = [];
  toasts10: { autohide: boolean }[] = [];
  toasts11: { autohide: boolean }[] = [];
  toasts12: { autohide: boolean }[] = [];
  toasts13: { autohide: boolean }[] = [];
  toasts14: { autohide: boolean }[] = [];
  toasts15: { autohide: boolean }[] = [];
//solid toast
SolidToastprimary() {
  const newToast = { autohide: true };
  this.toastsA.push(newToast);
}

SolidToastsecondary() {
  const newToast = { autohide: true };
  this.toastsB.push(newToast);
}
SolidToastwarning() {
  const newToast = { autohide: true };
  this.toastsC.push(newToast);
}
SolidToastinfo() {
  const newToast = { autohide: true };
  this.toastsD.push(newToast);
}
SolidToastsuccess() {
  const newToast = { autohide: true };
  this.toastsE.push(newToast);
}
SolidToastdanger() {
  const newToast = { autohide: true };
  this.toastsF.push(newToast);
}
hideSolidToastprimary(toastA: { autohide: boolean }) {
  this.toastsA = this.toastsA.filter((t) => t !== toastA);
}
hideSolidToastsecondary(toast: { autohide: boolean }) {
  this.toastsB = this.toasts2.filter((t) => t !== toast);
}
hideSolidToastwarning(toast: { autohide: boolean }) {
  this.toastsC = this.toasts3.filter((t) => t !== toast);
}
hideSolidToastinfo(toast: { autohide: boolean }) {
  this.toastsD = this.toasts4.filter((t) => t !== toast);
}
hideSolidToastsuccess(toast: { autohide: boolean }) {
  this.toastsE = this.toasts5.filter((t) => t !== toast);
}
hideSolidToastdanger(toast: { autohide: boolean }) {
  
  this.toastsF = this.toasts6.filter((t) => t !== toast);
  
}

    
  }
