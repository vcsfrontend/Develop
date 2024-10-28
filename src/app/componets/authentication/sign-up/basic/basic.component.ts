import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Component, input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwitherService } from '../../../../shared/services/swither.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../../shared/services/firebase.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Tools } from '../../../../shared/common/Enums/Tools';
import { CommonModule, DatePipe } from '@angular/common';
import flatpickr from 'flatpickr';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { ShowCodeContentDirective } from '../../../../shared/directives/show-code-content.directive';
import { BaseComponent } from '../../../../shared/base/base.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { Title } from 'chart.js';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { NgbDropdownModule, NgbNavModule, NgbModal, NgbModalConfig, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,ToastrModule, MatIconModule,
    MatFormFieldModule, MatSelectModule, CommonModule, FlatpickrModule, OverlayscrollbarsModule, ShowCodeContentDirective],
    // AngularFireModule,  AngularFireDatabaseModule, AngularFirestoreModule,
  providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService },FlatpickrDefaults, DatePipe],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent extends BaseComponent implements OnInit {
  crm = false; submitted =false; cnfmPaswrd: any = ''; paswrd:any = ''; mailId:any = '';
  adonai = false; btnDisable = false; todayDt = new Date(); isBtnDsbl = false;
  adoanAiRole :any; isEmailDisabled = false; isOtpDisabled = false; isCompany : string = 'col-xl-6';
  crmRole :any; isShowUsers = false;
  toolsList = [Tools.Adonai,Tools.Crm]

  icons = [
    { value: 'Individual', icon: 'home', name: 'Home' },
    { value: 'Enterprise', icon: 'settings', name: 'Settings' },
  ];

  signupFrm: FormGroup = this.fb.group({ 
    type : ['', Validators.required],
    companyName : ['', Validators.required],
    noOfUsers: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required,  Validators.email]],
    country: ['', Validators.required],
    dob: [new Date()],
    crm:false,
    adonai:false,
    phoneNumber: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, this.passwordValidator]],
    tools : [[],Validators.required]
    //"toolId": 0,
    //"roleId": 0,
  })
  
  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService, private router: Router, private dp: DatePipe, private modalService: NgbModal ){
    super();
    // document.body.classList.add('authentication-background');
  }
  
  ngOnInit(){
  }
  ngOnDestroy(): void {
   
    // document.body.classList.remove('authentication-background');   
  }
  title = "intlInputNew" ;
  get f() {
    return this.signupFrm.controls;
  }
  
  // ngAfterViewChecked() {
  //   console.log("60",this.signupFrm.get('tools'))
  // }
  passwordValidator(control: any) {
    const value = control.value;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasMinLength = value.length >= 8;
    const valid = hasUpperCase && hasLowerCase && hasSpecialCharacter && hasNumber && hasMinLength;
    return valid ? null : { invalidPassword: true };
  }

  noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isWhitespace = (control.value || '').includes(' ');
      return isWhitespace ? { whitespace: true } : null;
    };
  }

  preventCopyPaste(event: ClipboardEvent): void {
    event.preventDefault();
    // alert('Copy, paste, and cut actions are disabled for security reasons.');
    // this.toastr.error('Copy, paste, and cut actions are disabled for security reasons.','signup', {
    //   timeOut: 3000, positionClass: 'toast-top-right' });
  }

  onSignup(){
    this.submitted = true; 
    const crm = this.signupFrm.get('tools')?.value.includes('CRM');
    const adonai = this.signupFrm.get('tools')?.value.includes('Adonai');
    let payload = this.signupFrm.getRawValue();
    payload.type = +payload.type,
    payload.crm = crm,
    payload.adonai = adonai,
    payload.phoneNumber = +payload.phoneNumber, delete payload.tools,
    payload.dob = this.dp.transform(payload.dob, 'dd-MM-yyyy')
    if (this.signupFrm.invalid) {
      this.toastr.error('Please fill mandatory fields','signup', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      this.btnDisable = false;
        return;
    }
    else if(this.paswrd != this.cnfmPaswrd){
      this.toastr.error('password and confirm password not matched','signup', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      return;
    }
    else{
      this.btnDisable = true;
      this.switchService.signupApi(payload).subscribe({ next: (res:any) => {
        if(res.status == true){
          this.toastr.success(res.message,'signup', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          this.router.navigate(['auth/login'])
          } else {
            this.btnDisable = false;
            this.toastr.error(res.message,'signup', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    }
  }

  onMailCheck(){
    if(this.mailId == ''){
      this.toastr.warning('Please Enter email','signup', {
        timeOut: 3000, positionClass: 'toast-top-right' });
    } else {
      this.switchService.onMailValidSignup(this.mailId).subscribe({ next: (res:any) => {
        if(res.status == true){
          this.isEmailDisabled = true,
          this.signupFrm.get('email')?.disable();
          this.toastr.success(res.message,'signup', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            this.toastr.error(res.message,'signup', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    }
  }

  onOtpCheck(){
    // this.isOtpDisabled = true;
    // this.btnDisable = false;
    // if(this.otp == ''){
    //   this.toastr.warning('Please Enter OTP','signup', {
    //     timeOut: 3000, positionClass: 'toast-top-right' });
    // } 
    const enteredOtp = this.otp.join('');

    // Check if OTP length is less than 6
    if (enteredOtp.length < 6) {
      this.isOtpValid = false;
      this.errorMessage = 'Please enter the complete OTP.';
      return;
    }
    else {
      this.switchService.onOtpSignup(this.mailId, enteredOtp).subscribe({ next: (res:any) => {
        if(res.status == true){
        this.btnDisable = false, this.isOtpDisabled = true, 
        this.isBtnDsbl = true;
          this.toastr.success(res.message,'signup', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            this.toastr.error(res.message,'signup', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    }
  }

  onDropdownChange() {
    const cmpnyFieldControl = this.signupFrm.get('companyName');
    const userFieldControl = this.signupFrm.get('noOfUsers');

    if (this.signupFrm.get('type')?.value === '2') {
      cmpnyFieldControl?.setValidators([Validators.required]),
      userFieldControl?.setValidators([Validators.required]),
      this.isCompany = 'col-xl-4',
      this.isShowUsers = true;
    } else {
      cmpnyFieldControl?.clearValidators(),
      userFieldControl?.clearValidators(),
      this.signupFrm?.get('noOfUsers')?.setValue(''),
      this.isCompany = 'col-xl-6';
      this.isShowUsers = false;
    }

    cmpnyFieldControl?.updateValueAndValidity(); 
    userFieldControl?.updateValueAndValidity();
     // This updates the validation status of the control
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
  otpArray = Array(6).fill(null);
  otp: string[] = Array(this.otpArray.length).fill('');
  isOtpValid = true;
  errorMessage = ''; 
  onInputChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    this.otp[index] = input.value;

    if (input.value && index < this.otpArray.length - 1) {
      (document.querySelectorAll('.otp-container input')[index + 1] as HTMLInputElement)?.focus();
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && index > 0 && !this.otp[index]) {
      (document.querySelectorAll('.otp-container input')[index - 1] as HTMLInputElement)?.focus();
    }
  }
  open(content: any) {
    this.modalService.open(content, {
      backdrop: 'static', // Disable close on clicking outside
      keyboard: false , centered: true 
    });
  }
  
}