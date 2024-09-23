import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../shared/services/auth.service';
import { FirebaseService } from '../../../../shared/services/firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppStateService } from '../../../../shared/services/app-state.service';
'../../shared/services/app-state.service';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,ToastrModule
],
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {
email = ''; password = '';
errorMessage = ''; // validation _error handle
_error: { name: string; message: string } = { name: '', message: '' }; 
public loginForm!: FormGroup;
  constructor(@Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
  private sanitizer: DomSanitizer,
   public authservice: AuthService,
   private router: Router,
   private formBuilder: FormBuilder,
   private renderer: Renderer2,
   private firebaseService: FirebaseService,
   private toastr: ToastrService ,
   private appStateService: AppStateService,
 ){
    document.body.classList.add('authentication-background');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // username: ['spruko@admin.com', [Validators.required, Validators.email]],
      // password: ['sprukoadmin', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  
  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');    
  }
  showPassword = false;
  toggleClass = "off-line";
  createpassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login() {
    // this.disabled = "btn-loading"
    this.clearErrorMessage();
      this.authservice.login(this.email, this.password).subscribe({
        next: (res:any) => {
          // Redirect on successful login
        if (res.status == true) {
          this.router.navigate(['/dashboard/sales']);
          this.toastr.success('login successful','VCS', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
  
  
        },
        error: () => {
          this.toastr.error('Invalid username or password. Please try again','VCS', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        
        }
      });
  }

  Submit() {
    if(this.loginForm.controls['email'].value == ''){
      this.errorMessage = 'please enter email id';
      this.toastr.warning(`Please enter username`, 'udon',{
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    }else if(this.loginForm.controls['password'].value == ''){
      this.toastr.warning(`Please enter password`);
    }
    else if (
      this.loginForm.controls['email'].value != '' &&
      this.loginForm.controls['password'].value != ''
    ) {
      this.login();
    }
  
  }


}
