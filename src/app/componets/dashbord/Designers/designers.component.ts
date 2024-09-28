import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule,NgbNavModule,NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-designers',
  standalone: true,
  imports: [SharedModule, NgSelectModule, NgbModule,
    NgbNavModule,NgbDropdownModule,FlatpickrModule,FormsModule,ReactiveFormsModule],
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  templateUrl: './designers.component.html',
  styleUrl: './designers.component.scss'
})
export class DesignersComponent {


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
}

