import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwitherService } from '../../../../shared/services/swither.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../../shared/services/firebase.service';
@Component({
  selector: 'app-basic',
  standalone: true,
  // imports: [RouterModule],
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,
    // AngularFireModule,
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    ToastrModule
],
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
  crm = false;
  adonai = false;
  adoanAiRole :any;
  crmRole :any;

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
  onSignup(){
    let payload = this.signupFrm.getRawValue();
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
