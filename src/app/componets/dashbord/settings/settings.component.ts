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
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule ,AngularFireModule,
    AngularFireDatabaseModule, CommonModule,
    AngularFirestoreModule,ToastrModule, SharedModule, ShowcodeCardComponent
],
  
    providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }],
  
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  userForm: FormGroup; adonai= false; crm = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      type: 2,
      companyName: "",
      // vcsUsersList:

      users: this.fb.array([this.createUser()])
    });
  }

  createUser(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      userName: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], 
      phoneNo:[''],
      country: [''],
      crm: this.crm,
      adonai: this.adonai
    });
  }

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  addUser(): void {
    this.users.push(this.createUser());
  }

  removeUser(index: number): void {
    this.users.removeAt(index);
  }

  onSubmit(): void {
    let payload = this.userForm.getRawValue();
    // if (this.userForm.valid) {
      payload.vcsUsersList = this.userForm.value.users
      // console.log('Submitted Users:', this.userForm.value.users);
      // console.log('pl-',payload)
      // Here you can handle the submission, e.g., send to an API
    // }
  }
  
}
