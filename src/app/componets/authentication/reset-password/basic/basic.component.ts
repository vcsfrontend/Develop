import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwitherService } from '../../../../shared/services/swither.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../../shared/services/firebase.service';
import { CommonModule } from '@angular/common';
import { BaseComponent } from '../../../../shared/base/base.component';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,
    // AngularFireModule,
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    ToastrModule, CommonModule
],

    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent extends BaseComponent implements OnInit {
  // {
  //   "email": "string",
  //   "password": "string"
  // }
  confirmPassword:any = ''; newPassword:any = ''; email:any = ''; submt = true; submitted = false; 
  isEmailDisable = false; isOtpDisable = false; isBtndisable = true; isEmail = true;
  // otp: any = '';
  otpArray = Array(6).fill(null);
  otp: string[] = Array(this.otpArray.length).fill('');
  isOtpValid = true;
  errorMessage = ''; // Holds error messages
  resetFrm: FormGroup = this.fb.group({ 
    // email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, this.passwordValidator]],
    // cnfmPasswrd: ['', [Validators.required, this.passwordValidator]],
  })
  

  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService, private router: Router){
    // document.body.classList.add('authentication-background');
    super();
  }

  ngOnInit(){

  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');    
  }
  showPassword = false;
  showPassword1 = false;
  showPassword2 = false;
  toggleClass = "off-line";
  toggleClass1 = "off-line";
  toggleClass2 = "off-line";
  createpassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }

  get f() {
    return this.resetFrm.controls;
  }

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
  preventCopyPaste(event: ClipboardEvent): void {
    event.preventDefault();
    // alert('Copy, paste, and cut actions are disabled for security reasons.');
    // this.toastr.error('Copy, paste, and cut actions are disabled for security reasons.','signup', {
    //   timeOut: 3000, positionClass: 'toast-top-right' });
  }
  createpassword1() {
    this.showPassword1 = !this.showPassword1;
    if (this.toggleClass1 === "off-line") {
      this.toggleClass1 = "line";
    } else {
      this.toggleClass1 = "off-line";
    }
  }
  createpassword2() {
    this.showPassword2 = !this.showPassword2;
    if (this.toggleClass2 === "off-line") {
      this.toggleClass2 = "line";
    } else {
      this.toggleClass2 = "off-line";
    }
  }

  onEmail(){
    if (this.email == ''){
      this.toastr.warning('please enter email ','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    } 
    // else if(this.otp == '') {
    //   this.toastr.warning('please enter OTP','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    // }
    // else if(this.verify == '') {
    //   this.toastr.warning('please enter OTP','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    // }
    else {
    this.switchService.getValidEmail(this.email).subscribe({
      next: (res:any) => {
        if(res.status == true){
          // this.router.navigate(['/authentication/sign-in/basic']);
          
          this.toastr.success(res.message,'reset password', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          }),
          this.onMailCheck();
        } else {
          this.toastr.error(res.message,'reset password', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            });
          }
        },
        error: (error) => {
          this.toastr.error(error.statusText);
        },
      })
    }
  }

  onMailCheck(){
    if(this.email == ''){
      this.toastr.warning('Please enter email','', {
      timeOut: 3000, positionClass: 'toast-top-right'});
    } else {
      this.switchService.onMailValidReset(this.email).subscribe({ next: (res:any) => {
        if(res.status == true){
          this.isEmail = false; 
          this.toastr.success(res.message,'', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            this.toastr.error(res.message,'', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        },
        error: (error) => {
          this.toastr.error(error.statusText);
        },
      })
    }
  }

  

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


  onOtpCheck(){
    const enteredOtp = this.otp.join('');

    // Check if OTP length is less than 6
    if (enteredOtp.length < 6) {
      this.isOtpValid = false;
      this.errorMessage = 'Please enter the complete OTP.';
      this.toastr.warning('Please enter the complete OTP','', {
        timeOut: 3000, positionClass: 'toast-top-right'});
      return;
    }
    // if(this.otp == ''){
    //   this.toastr.warning('Please enter OTP','', {
    //   timeOut: 3000, positionClass: 'toast-top-right'});
    // } 
    else {
      this.switchService.onOtpSignup(this.email, enteredOtp).subscribe({ next: (res:any) => {
        if(res.status == true){
          this.isOtpDisable = true, this.isBtndisable = false, this.submt = false;
          this.toastr.success(res.message,'reset', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            // this.errorMessage = 'Invalid OTP. Please try again.';
            this.toastr.error(res.message,'reset', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    }
  }

  onResetpPassword(){
    this.submitted = true;
    // let payload = {
    //   email: this.email,
    //   password: (this.newPassword == this.confirmPassword) ? this.newPassword : ''
    // };
    let payload = this.resetFrm.getRawValue();
    payload.email = this.email; 
    
    if (this.resetFrm.invalid) {
      this.toastr.error('Please fill mandatory fields','signup', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
      // this.btnDisable = false;
        return;
    }
    else if(this.newPassword == ''){
      this.toastr.warning('please enter password ','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    } else if(this.confirmPassword == ''){
      this.toastr.warning('please enter confirmpassword ','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    } else if(this.newPassword != this.confirmPassword){
      this.toastr.warning('passwords not matched','reset', { timeOut: 3000,positionClass: 'toast-top-right' })
      // this.newPassword = ''; 
      this.confirmPassword = '';
      return;
    } else {
      let payload = {
          email: this.email,
          password: (this.newPassword == this.confirmPassword) ? this.newPassword : ''
        };
      // payload.password =  (this.newPassword == this.confirmPassword) ? this.newPassword : '', delete payload.cnfmPasswrd;
      this.switchService.onForgotPassword(payload).subscribe({
        next: (res:any) => {
          if(res.status == true){
            this.router.navigate(['/auth/login']);
            this.toastr.success(res.message,'reset password', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }else{
            this.toastr.error(res.message,'reset password', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        }
      })
    }
    
  }
}
