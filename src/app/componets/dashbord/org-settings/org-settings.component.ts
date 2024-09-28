import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { SwitherService } from '../../../shared/services/swither.service';

@Component({
  selector: 'app-org-settings',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule, CommonModule,
    AngularFirestoreModule,ToastrModule, SharedModule, ShowcodeCardComponent],
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './org-settings.component.html',
  styleUrl: './org-settings.component.scss'
})
export class OrgSettingsComponent {
  isAddEdt = false; aeTyp='a'; playersList: any; editData: any; winLossCount: any;
  adonai= false; crm = false; userLst:any;
  userForm!: FormGroup;
  adoanAiRole :any;
  crmRole :any;


  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService) { }

    ngOnInit(){
      this.formInit(); this.getUsers();
    }

    formInit(){
      this.userForm = this.fb.group({
        type : 2,
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        dob: "",
        crm:false,
        adonai:false,
        phoneNumber: '',
        username: "",
        password: "",
      })
    }
    getUsers(){
      this.switchService.getAllUsers().subscribe({
        next: (res:any) => {
          if(res){
            this.userLst = res
            console.log('userdata-', this.userLst);
          } else{
            this.toastr.error(res.message,'signup', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        }
      })
    }

    onSubmit(){
      let payload = this.userForm.getRawValue();
      payload.type = +payload.type,
      payload.crm = this.crm,
      payload.adonai = this.adonai,
      payload.phoneNumber = +payload.phoneNumber,
      console.log('payload -', payload);
      this.switchService.signupApi(payload).subscribe({
        next: (res:any) => {
          if(res.status == true){
            this.toastr.success(res.message,'signup', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }else{
            this.toastr.error(res.message,'signup', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        }
      })
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
