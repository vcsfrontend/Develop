import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwitherService } from '../../../../shared/services/swither.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../../shared/services/firebase.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Tools } from '../../../../shared/common/Enums/Tools';
@Component({
  selector: 'app-basic',
  standalone: true,
  // imports: [RouterModule],
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,ToastrModule,MatFormFieldModule, MatSelectModule],
    // AngularFireModule,
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  crm = false;
  adonai = false;
  adoanAiRole :any;
  crmRole :any;
  toolsList = [Tools.Adonai,Tools.Crm]

  signupFrm: FormGroup = this.fb.group({ 
    type : '',
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
    tools : new FormControl('')
    //"toolId": 0,
    //"roleId": 0,
  })
  
  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService){
    document.body.classList.add('authentication-background');
  }

  ngOnInit(){
    
  }
  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');    
  }
  // ngAfterViewChecked() {
  //   console.log("60",this.signupFrm.get('tools'))
  // }
  onSignup(){
    const crm = this.signupFrm.get('tools')?.value.includes('crm');
    const adonai = this.signupFrm.get('tools')?.value.includes('adonai');
    let payload = this.signupFrm.getRawValue();
    payload.type = +payload.type,
    payload.crm = crm,
    payload.adonai = adonai,
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
    console.log("51",tool,this.adonai,this.crm);
  }
}
