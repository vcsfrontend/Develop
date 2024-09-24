import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwitherService } from '../../../../shared/services/swither.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../../shared/services/firebase.service';

@Component({
  selector: 'app-basic',
  standalone: true,
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
  // {
  //   "email": "string",
  //   "password": "string"
  // }
  confirmPassword:any = ''; newPassword:any = ''; email:any = '';
  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService, private router: Router){
    document.body.classList.add('authentication-background');
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

  onResetpPassword(){
    let payload = {
      email: this.email,
      password: (this.newPassword == this.confirmPassword) ? this.newPassword : ''
    };
    if (this.email == ''){
      this.toastr.warning('please enter email ','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    } else if(this.newPassword == ''){
      this.toastr.warning('please enter password ','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    } else if(this.confirmPassword == ''){
      this.toastr.warning('please enter confirmpassword ','reset', { timeOut: 3000, positionClass: 'toast-top-right'})
    } else if(this.newPassword != this.confirmPassword){
      this.toastr.warning('passwords not matched','reset', { timeOut: 3000,positionClass: 'toast-top-right' })
      this.newPassword = ''; this.confirmPassword = '';
      return;
    } else {
      this.switchService.onForgotPassword(payload).subscribe({
        next: (res:any) => {
          if(res.status == true){
            this.router.navigate(['/authentication/sign-in/basic']);
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
    
  }
}
