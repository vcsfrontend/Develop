import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/inputs'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FirebaseService } from '../../../shared/services/firebase.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,ToastrModule, SharedModule, ShowcodeCardComponent
],
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      users: this.fb.array([this.createUser()])
    });
  }

  createUser(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  addUser(): void {
    this.users.push(this.createUser());
    console.log(this.createUser)
  }

  removeUser(index: number): void {
    this.users.removeAt(index);
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Submitted Users:', this.userForm.value.users);
      // Here you can handle the submission, e.g., send to an API
    }
  }
}
