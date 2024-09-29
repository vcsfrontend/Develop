import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../app/shared/common/sharedmodule';
import { NgbDropdownModule,NgbNavModule,NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recce',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule],
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults, SharedModule,NgbNavModule,NgbDropdownModule],
  templateUrl: './recce.component.html',
  styleUrl: './recce.component.scss'
})
export class RecceComponent {
  modal: any; active5='Home';
  active6='Services'
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
}

