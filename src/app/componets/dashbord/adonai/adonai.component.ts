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
      //this.switchService.onAdonai('vcs.fronetnd@gmail.com').subscribe({
      next: (res:any) => {
        // if(res.status == true){
          window.open(res.newDesign, '_blank');
          // this.router.navigate(['/dashboard/adonai']);
          this.toastr.success(res.message,'Adonai', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
        // }else{
        //   this.toastr.error(res.message,'adonai', {
        //     timeOut: 3000,
        //     positionClass: 'toast-top-right',
        //   });
        // }
      }
    })
  
  }
}
