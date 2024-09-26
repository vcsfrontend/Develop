import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwitherService } from '../../../shared/services/swither.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../shared/services/firebase.service';

@Component({
  selector: 'app-adonai',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,
    // AngularFireModule,
    // AngularFireDatabaseModule,
    // AngularFirestoreModule,
    ToastrModule
],
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  templateUrl: './adonai.component.html',
  styleUrl: './adonai.component.scss'
})
export class AdonaiComponent {
 userData:any;
  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService, private router: Router){
  }

  ngOnInit(){
    this.onclkAdonai()
  }

  onclkAdonai(){
    this.userData = localStorage.getItem('userDetails')
    this.switchService.onAdonai(JSON.parse(this.userData).email).subscribe({
      next: (res:any) => {
        if(res.status == true){
          window.open('"https://www.coohom.com/api/saas/openapi/v2/redirect?url=https://www.coohom.com/pub/tool/yundesign/cloud?redirecturl=/pub/saas/apps/project/list&redirectbim=false&locale=en_US&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3VudHJ5IjoiVVMiLCJ0dSI6ZmFsc2UsImMiOjE3MjcyNDAwOTkzNjUsInV0YyI6MiwiYXZhdGFyIjoiaHR0cHM6Ly9xaHN0YXRpY3NzbC5rdWppYWxlLmNvbS9uZXd0LzMyL2ltYWdlL3BuZy8xNTQ1MTIwNTA3NDAxL0YzQzJBNEE0NzU4RjE3REM2QzJBMzU1NzZDOUI5N0Y2LnBuZyIsImxvY2FsZSI6ImVuX1VTIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sInNfaWQiOm51bGwsInZhbGlkYXRlZCI6ZmFsc2UsImFfaWQiOm51bGwsImlkIjoiM0ZPNEtQVjdHWDdUIiwiZXhwIjoxNzI3ODQ0ODk5LCJrX2lkIjoiM0ZPNEtQVjdHWDdUIiwicl9pZCI6IjNGTzRLMEw3QTM1MiIsImVtYWlsIjoidHZPWktXMnFsVV92Y3MuZnJvbmV0bmRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJza29ubGluZXRlc3QifQ.8xdYwXuxcFUo-KtO13WUd59l4zPfETXmSDUN-s6vNC4"', '_blank');
          // this.router.navigate(['/dashboard/adonai']);
          this.toastr.success(res.message,'Adonai', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }else{
          this.toastr.error(res.message,'adonai', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        }
      }
    })
  
  }
}
