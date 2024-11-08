import { Component, TemplateRef, ViewChild, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalConfig,NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/models'
import { CommonModule, DatePipe } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FlatpickrModule, FlatpickrDefaults } from 'angularx-flatpickr';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { ShowCodeContentDirective } from '../../../shared/directives/show-code-content.directive';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatButtonModule } from '@angular/material/button'; 
import { SwitherService } from '../../../shared/services/swither.service';
@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule, CommonModule,  MatFormFieldModule, MatSelectModule, FlatpickrModule,
    AngularFirestoreModule,ToastrModule, SharedModule, ShowcodeCardComponent, MaterialModuleModule,
    OverlayscrollbarsModule, ShowCodeContentDirective, MatIconModule, NgbTooltipModule,
    NgbPopoverModule],
  providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }, 
    FlatpickrDefaults, DatePipe, NgbModalConfig, NgbModal],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.scss'
})
export class SuperadminComponent {
  displayedColumns: string[] = ['slNo', 'firstName', 'lastName', 'email', 'adonai', 'crm', 'action', 'view', 'edit' ];
  dataSource = new MatTableDataSource<any>(); 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;  // Access the ng-template
  private modalRef: any;
  userLst:any; userData: any;
  content3: any; content4: any; content5: any; content6: any; content7: any;
  firstNm: any; lastNm: any; companyNm: any; phoneNo: any; dob: any;
  adonaiData: any; crmData: any; 
  adonaiEmail: any; adonaiRoleId: any; isAdonai: any; adonaiActivitySts: any; 
  adonaiSubStartDate: any; adonaiSubEndDate: any; adonaiSubDate: any; adonaiRemarks: any; 
  crmEmail: any; crmRoleId: any; isCrm: any; crmStatus: any; crmSubStartDate: any; 
  crmSubEndDate: any; crmSubDate: any; crmRemarks: any; 
  isAdonaiView = false; isCrmView = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private viewContainerRef: ViewContainerRef,
    public switchService: SwitherService, private toastr: ToastrService, private dp: DatePipe) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  VerticalScrol(content3:any, element:any) {
		this.modalService.open(content3, { scrollable: true,centered: true });
    console.log('Data:', content3, element);
	}

  VerticallyScrol(content3:any) {
		this.modalService.open(content3, { scrollable: true,centered: true });
	}

  ngOnInit(){
    this.getUsers();
  }

  onRowButtonClick(rowData: any) {
    console.log('Selected Row Data:', rowData);
    this.firstNm = rowData.firstName
    this.lastNm = rowData.lastName
    this.companyNm = rowData.companyName
    this.phoneNo = rowData.phoneNumber
    this.dob = rowData.dob
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }  

  getSNo(index: number): number {
    if (this.paginator && this.paginator.pageIndex !== undefined && this.paginator.pageSize !== undefined) {
        return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
    }
    return index + 1; // Default return if paginator is not yet defined
  }
  
  // onClkRB(gI: number, crdtNteDtls: any) {
    // this.userLst.forEach((e:any) => { e.isChk = false}), this.lstGrid[gI].isChk = true;
    // this.crdtNteDtls = crdtNteDtls != '' ? crdtNteDtls: 0;
  // }
  
  getUsers(){
    this.switchService.getAllUsers().subscribe({ next: (res:any) => {
      if(res){
        this.userLst = res
        // this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.data = res;
        } else{
          this.toastr.error(res.message,'', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      }
    })
  }

  getAdonai(data: any, ctrl: string =''){
    ctrl == 'v' ? (this.isAdonaiView = true) : (this.isAdonaiView = false);
    this.switchService.onAdonaiView(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.adonaiData = res
        this.adonaiEmail = data.email; 
        this.adonaiRoleId = res.roleId; 
        // this.isAdonai = res.email; 
        this.adonaiActivitySts = res.activityStatus; 
        this.adonaiSubStartDate = this.dp.transform(res.subStartDate, 'yyyy-MM-dd'); 
        this.adonaiSubEndDate = res.subEndDate; 
        this.adonaiSubDate = res.subscriptionDate; 
        this.adonaiRemarks = res.remarks; 
      //   {
      //     "email": null,
      //     "roleId": 12,
      //     "activityStatus": true,
      //     "subscriptionDate": "",
      //     "subStartDate": "2024-10-16T13:58:55.506427433",
      //     "subEndDate": "",
      //     "remarks": null,
      //     "updatedBy": "",
      //     "updatedDate": ""
      // }
        } else{
          this.toastr.error(res.message);
          return;
        }
      }
    })
  }

  getCrm(data:any, ctrl:string = ''){
    ctrl == 'v' ? (this.isCrmView = true) : (this.isCrmView = false);
    this.switchService.onCrmView(data.email).subscribe({ next: (res:any) => {
      if(res){
        this.crmData = res,
        this.crmEmail = data.email; 
        this.crmRoleId = res.roleId; 
        this.isCrm = true; 
        this.crmStatus = res.crmActivityStatus; 
        this.crmSubStartDate = res.subStartDate; 
        this.crmSubEndDate = res.subEndDate; 
        this.crmSubDate = res.subDate; 
        this.crmRemarks = res.remarks; 
        // {
        //   "roleId": 0,
        //   "crmActivityStatus": true,
        //   "subDate": "",
        //   "subStartDate": "2024-10-16T13:58:58.969282899",
        //   "subEndDate": "",
        //   "updatedBy": "",
        //   "updatedDate": "",
        //   "remarks": null
        // }
        
        } else{
          this.toastr.error(res.message);
          return;
        }
      }
    })
  }

  updateAdonai(){
    // this.submitted = true; 
    let payload = {
        "email": this.adonaiEmail,
        "roleId": this.adonaiRoleId,
        "activityStatus": this.adonaiActivitySts,
        "subscriptionDate": this.dp.transform(this.adonaiSubDate, 'dd-MM-yyyy'),
        "subStartDate": this.dp.transform(this.adonaiSubStartDate, 'dd-MM-yyyy'),
        "subEndDate": this.dp.transform(this.adonaiSubEndDate, 'dd-MM-yyyy'),
        "remarks": this.adonaiRemarks,
        "updatedBy": ""
    };
    // payload.type = +payload.type, 
    // payload.dob = this.dp.transform(payload.dob, 'dd-MM-yyyy');
    // if (this.signupFrm.invalid) {
    //   this.toastr.error('Please fill mandatory fields');
    //   this.btnDisable = false;
    //     return;
    // }
    // else{
    console.log('pl-',payload);
    return;
      this.switchService.onAdonaiUpdate(payload).subscribe({ next: (res:any) => {
        if(res.status == true){
          this.toastr.success(res.message,'signup', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            // this.btnDisable = false;
            this.toastr.error(res.message,'signup', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    // }
  }

  openLg(content10:any) {
		this.modalService.open(content10, { size: 'lg' },);
	}

  openModal() {
    // Create an embedded view from the modal template
    this.modalRef = this.viewContainerRef.createEmbeddedView(this.modalTemplate);
  }

  closeModal() {
    // Destroy the modal view when closing
    if (this.modalRef) {
      this.modalRef.destroy();
      this.modalRef = null;
    }
  }
  
  
}