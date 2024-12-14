import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { SwitherService } from '../../../shared/services/swither.service';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA1, PeriodicElement } from '../../tables/ang-material/data';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Tools } from '../../../shared/common/Enums/Tools';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
@Component({
  selector: 'app-org-settings',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule, CommonModule,  MatFormFieldModule, MatSelectModule,
    AngularFirestoreModule,ToastrModule, SharedModule, ShowcodeCardComponent, MaterialModuleModule],
    // imports: [SharedModule,NgbTableComponent,AddRowComponent,DeleteRowsComponent,
    //   AddrowtableComponent,ScrollTableComponent,SelectionTableComponent,MaterialModuleModule],
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './org-settings.component.html',
  styleUrl: './org-settings.component.scss'
})
export class OrgSettingsComponent {
  displayedColumns: string[] = ['slNo', 'firstName', 'lastName', 'email', 'dateOfBirth'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isAddEdt = false; aeTyp='a'; playersList: any; editData: any; 
  adonai= false; crm = false; userLst:any; 
  submitted = false; userData: any;
  userForm!: FormGroup; cnfmPaswrd: any = ''; paswrd:any = '';
  adoanAiRole :any;
  crmRole :any; toolsList = [Tools.Adonai,Tools.Crm]

  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService) {  this.userData = localStorage.getItem('userDetails') }

    ngOnInit(){
      this.formInit(); this.getUsers();
      
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }    

    get f() {
      return this.userForm.controls;
    }

    formInit(){
      this.userForm = this.fb.group({
        type : [2],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        country: [''],
        dob: [''],
        crm:false,
        adonai:false,
        phoneNumber: [''],
        username: ['', Validators.required],
        password: ['', Validators.required],
        tools : new FormControl('')
      })
    }

    getSNo(index: number): number {
      return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
    }
    
    getUsers(){
      // this.switchService.getAllUsers().subscribe({ next: (res:any) => {
      //   this.switchService.cmpnyUsers(JSON.parse(this.userData).companyName).subscribe({ next: (res:any) => {
      //   if(res){
      //     this.userLst = res
      //     // this.dataSource = new MatTableDataSource<any>(res);
      //     this.dataSource.data = res;
      //     } else{
      //       this.toastr.error(res.message,'signup', {
      //         timeOut: 3000,
      //         positionClass: 'toast-top-right',
      //       });
      //     }
      //   }
      // })
    }

    onSubmit(){
      this.submitted = true;
      let payload = this.userForm.getRawValue();
      const crm = this.userForm.get('tools')?.value.includes('crm');
    const adonai = this.userForm.get('tools')?.value.includes('adonai');
      payload.type = +payload.type,
      payload.crm = crm,
    payload.adonai = adonai, delete payload.tools,
      payload.phoneNumber = +payload.phoneNumber;
      if(this.userForm.invalid){
        return;
      } else if(this.paswrd != this.cnfmPaswrd){
        this.toastr.error('password and confirm password not matched','signup', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        return;
      } else {
        this.switchService.signupApi(payload).subscribe({next: (res:any) => {
          if(res.status == true){
            this.isAddEdt=!this.isAddEdt;
            this.toastr.success(res.message,'signup', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
            } else {
              this.toastr.error(res.message,'signup', {
                timeOut: 3000,
                positionClass: 'toast-top-right',
              });
            }
          }
        })
      }
    }

    showPassword = false;
    showPassword1 = false;
    toggleClass = "off-line";
    toggleClass1 = "off-line";
    createpassword() {
      this.showPassword = !this.showPassword;
      if (this.toggleClass === "off-line") {
        this.toggleClass = "line";
      } else {
        this.toggleClass = "off-line";
      }
    }
    createpassword1() {
      this.showPassword1 = !this.showPassword1;
      if (this.toggleClass1 === "off-line") {
        this.toggleClass1 = "line";
      } else {
        this.toggleClass1 = "off-line";
      }
    }

    toolId(tool:string) {
      // console.log("51",tool,this.adonai,this.crm);
    }

  // get rows(): FormArray {
  //   return this.userForm.get('rows') as FormArray;
  // }

  // addRow() {
  //   const rowGroup = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     age: ['', [Validators.required, Validators.min(1)]],
  //   });
  //   this.rows.push(rowGroup);
  // }

  // removeRow(index: number) {
  //   this.rows.removeAt(index);
  // }

  onRst(){
    this.formInit()
  }

}
