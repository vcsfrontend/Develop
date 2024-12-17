import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, FormArray, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModal, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { SwitherService } from '../../../shared/services/swither.service';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA1, PeriodicElement } from '../../tables/ang-material/data';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Tools } from '../../../shared/common/Enums/Tools';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
import { BaseComponent } from '../../../shared/base/base.component';
import { MatIconModule } from '@angular/material/icon';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { ShowCodeContentDirective } from '../../../shared/directives/show-code-content.directive';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule,NgbModule,FormsModule,ReactiveFormsModule, AngularFireModule,
    AngularFireDatabaseModule, CommonModule,  MatFormFieldModule, MatSelectModule, FlatpickrModule,
    AngularFirestoreModule, ToastrModule, SharedModule, ShowcodeCardComponent, MaterialModuleModule,
    OverlayscrollbarsModule, ShowCodeContentDirective, MatIconModule],
  providers: [FirebaseService,{ provide: ToastrService, useClass: ToastrService }, FlatpickrDefaults, DatePipe],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent extends BaseComponent implements OnInit{
  displayedColumns: string[] = ['slNo', 'firstName', 'lastName', 'email', 'dateOfBirth'];
  dataSource = new MatTableDataSource<any>(); mailId:any = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  isAddEdt = false; aeTyp='a'; playersList: any; editData: any; 
  adonai= false; crm = false; userLst:any; 
  submitted = false; userData: any;
  // userForm!: FormGroup;
   cnfmPaswrd: any = ''; paswrd:any = '';
  adoanAiRole :any; todayDt = new Date(); 
  crmRole :any; toolsList = [Tools.Adonai];
  passwordStrengthMessage: string = '';
  passwordStrengthColor: string = ''; // Control message color
  confirmPasswordStrengthMessage: string = '';
  confirmPasswordStrengthColor: string = '';
  isPasswordValid: boolean = false; isPasswrd:boolean = false; isPassValid:boolean = false; 
  isCnfmPwd:boolean = false;btnDisable:boolean = false; isBtnDsbl:boolean = false; isResend:boolean = false;
  isEmailDisabled = false; isOtpDisabled = false; isCompany : string = 'col-xl-6';
  isShowUsers = false; pload:any[] = [];isOkBtn = false; showCity:boolean = true;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;  // Access the ng-template
  private modalRef: any; noUsers:any=''; users:any = ''; city:any = ''; selectedCountry:any = 'India'; 
  stageLst:any; showStages: boolean = false;
  userForm: FormGroup = this.fb.group({
    type : [2],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    country: ['India'],
    dob: [new Date().toISOString().split('T')[0], Validators.required],
    crm:false,
    adonai:false,
    phoneNumber: ['', Validators.required],
    username: [''],
    password: ['', [Validators.required, this.passwordValidator]],
    confirmPassword: ['', Validators.required],
    tools : [[],Validators.required],
    userFlag: ['settings'], 
    updatedBy: [localStorage.getItem('username')],
    companyCode: [''], 
    city: ['', Validators.required]
  })
  productForm: FormGroup;
  newItem: string = '';
  items: { label: string; checked: boolean }[] = [];

  addMoreVisible: boolean = false; // Flag to toggle visibility

  toggleAddMore() {
    this.addMoreVisible = !this.addMoreVisible; // Toggle visibility
  }

  addItem() {
    const itemExists = this.planDetails.some(
      (plan) => plan.name.toLowerCase() === this.newItem.trim().toLowerCase()
    );
    if (this.newItem.trim() && !itemExists) {
      this.planDetails.push({
        name: this.newItem.trim(),
        checked: false,
        isDefault: false,
      });
      this.newItem = '';
    } else if (itemExists) {
      alert('This item already exists!');
    }
  }
  
  deleteItem(index: number) {
    this.planDetails.splice(index, 1);
  }

  saveData:any;
  

  planDetails = [
    { name: 'WALL AND DEMOLITION PLAN', checked: false, isDefault: true },
    { name: 'PROPOSED FURNITURE PLAN', checked: false, isDefault: true },
    { name: 'FLOORING PLAN', checked: false, isDefault: true },
    { name: 'ELECTRICAL PLAN', checked: false, isDefault: true },
    { name: 'MOODBOARD AND RENDERS', checked: false, isDefault: true },
    { name: 'SWITCH BOARD ELEVATIONS + LEGEND', checked: false, isDefault: true },
    { name: 'FURNITURE DETAILS', checked: false, isDefault: true },
    { name: 'REALISTIC 3D RENDERS', checked: false, isDefault: true },
    { name: 'MATERIAL LIST', checked: false, isDefault: true },
    { name: 'SECTION WALL ELEVATIONS', checked: false, isDefault: true },
    { name: 'RCP - REFLECTED CEILING PLAN', checked: false, isDefault: true },
    { name: 'BOQ-BILL OF QUANTITY ESTIMATE', checked: false, isDefault: true },
  ];
  
  constructor(public fb: FormBuilder, public switchService: SwitherService, 
    private toastr: ToastrService,private router: Router, private dp: DatePipe,
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal,  private viewContainerRef: ViewContainerRef ){
      super();
      this.userData = localStorage.getItem('userDetails');
      this.formInit();
      this.productForm = this.fb.group({  
        name: '',  
        quantities: this.fb.array([]) ,  
      });  
  }
  
  onCheckboxChange() {
    const selectedPlans = this.planDetails.filter((plan) => plan.checked);
    
    // Update f1 to f30 fields dynamically based on selected items
    selectedPlans.forEach((plan, index) => {
      if (index < 30) {
        this.saveData[`f${index + 1}`] = plan.name;
      }
    });
    for (let i = selectedPlans.length; i < 30; i++) {
      this.saveData[`f${i + 1}`] = '';
    }
  }

  ngOnInit(){
    this.formInit(); this.getUsers(); this.getAllStages();
    this.saveData = {
      id: 0,
      companyName: JSON.parse(this.userData).companyName,
      companyCode: JSON.parse(this.userData).companyCode,
      email: JSON.parse(this.userData).email,
      f1: "",
      f1Percent: 0,
      f2: "",
      f2Percent: 0,
      f3: "",
      f3Percent: 0,
      f4: "",
      f4Percent: 0,
      f5: "",
      f5Percent: 0,
      f6: "",
      f6Percent: 0,
      f7: "",
      f7Percent: 0,
      f8: "",
      f8Percent: 0,
      f9: "",
      f9Percent: 0,
      f10: "",
      f10Percent: 0,
      f11: "",
      f11Percent: 0,
      f12: "",
      f12Percent: 0,
      f13: "",
      f13Percent: 0,
      f14: "",
      f14Percent: 0,
      f15: "",
      f15Percent: 0,
      f16: "",
      f16Percent: 0,
      f17: "",
      f17Percent: 0,
      f18: "",
      f18Percent: 0,
      f19: "",
      f19Percent: 0,
      f20: "",
      f20Percent: 0,
      f21: "",
      f21Percent: 0,
      f22: "",
      f22Percent: 0,
      f23: "",
      f23Percent: 0,
      f24: "",
      f24Percent: 0,
      f25: "",
      f25Percent: 0,
      f26: "",
      f26Percent: 0,
      f27: "",
      f27Percent: 0,
      f28: "",
      f28Percent: 0,
      f29: "",
      f29Percent: 0,
      f30: "",
      f30Percent: 0,
      updatedBy: JSON.parse(this.userData).username,
      updatedTime: "",
      stageActivity: "YES",
      type: JSON.parse(this.userData).type
    };
    
    // setTimeout(() => {
      
    // }, 500);
    this.userForm?.get('password')?.valueChanges.subscribe((value) => {
      this.checkPasswordStrength(value);
    });
    this.userForm?.get('confirmPassword')?.valueChanges.subscribe((value) => {
      this.checkPasswordMatch(value);
    });

    this.onTodayDt();
    this.onMinDate(); 
  }
  dynamicFields: { value: string; percent: number }[] = [];
  initializeDynamicFields() {
    // Loop through f1 to f30 and add only those with non-empty values to dynamicFields
    for (let i = 1; i <= 30; i++) {
      const fieldName = `f${i}`;
      const percentName = `f${i}Percent`;

      if (this.stageLst[fieldName]) {
        this.dynamicFields.push({
          value: this.stageLst[fieldName],
          percent: this.stageLst[percentName],
        });
      }
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }    

  get f() {
    return this.userForm.controls;
  }

  preventCopyPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }

  formInit(){
    // this.userForm = this.fb.group({
      // type : [2],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // country: ['', Validators.required],
      // dob: [new Date().toISOString().split('T')[0], Validators.required],
      // crm:false,
      // adonai:false,
      // phoneNumber: ['', Validators.required],
      // username: [''],
      // password: ['', [Validators.required, this.passwordValidator]],
      // confirmPassword: ['', Validators.required],
      // tools : [[],Validators.required],
    // })
  }

  // getSNo(index: number): number {
  //   return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
  // }

  getSNo(index: number): number {
    if (this.paginator && this.paginator.pageIndex !== undefined && this.paginator.pageSize !== undefined) {
        return this.paginator.pageIndex * this.paginator.pageSize + index + 1;
    }
    return index + 1; // Default return if paginator is not yet defined
  }

  saveInitialStage(){
    this.switchService.stageSave(this.saveData).subscribe({ next: (res:any) => {
    if(res){
      this.toastr.success('Stages saved successfully');
      this.offcanvasService.dismiss();
      this.getAllStages();
      } else{
        this.toastr.error(res.message)
      }
    },
    error: (error) => {
      this.toastr.error(error.statusText);
      },
    })
  }

  getAllStages(){
    let payload = {
      "email": JSON.parse(this.userData).email,
      "companyname": JSON.parse(this.userData).companyName,
      "companycode": JSON.parse(this.userData).companyCode,
      "type": JSON.parse(this.userData).type
    }
    this.switchService.getStages(payload).subscribe({ next: (res:any) => {
    if(res){
      this.stageLst = res;
      this.initializeDynamicFields();
      this.dynamicFields.length !=0 ? this.showStages = true : this.isShowUsers = false;
      } else{
        this.toastr.error(res.message)
      }
    },
    error: (error) => {
      this.toastr.error(error.statusText);
    },
    })
  }

  saveLastStages() {
    // Update payload based on dynamicFields
    this.dynamicFields.forEach((field, index) => {
      this.stageLst[`f${index + 1}`] = field.value;
      this.stageLst[`f${index + 1}Percent`] = field.percent;
    });

    // Clear remaining unused fields in the payload
    for (let i = this.dynamicFields.length + 1; i <= 30; i++) {
      this.stageLst[`f${i}`] = '';
      this.stageLst[`f${i}Percent`] = 0;
    }
    this.switchService.stageSave(this.stageLst).subscribe({ next: (res:any) => {
      if(res){
        this.toastr.success('Stages saved successfully');
        // this.getAllStages();
        } else{
          this.toastr.error(res.message)
        }
      },
      error: (error) => {
        this.toastr.error(error.statusText);
      },
    })
  }

  onDeleteStages(){
    let payload = {
      "email": JSON.parse(this.userData).email,
      "companyname": JSON.parse(this.userData).companyName,
      "companycode": JSON.parse(this.userData).companyCode,
      "type": JSON.parse(this.userData).type
    }
    this.switchService.deleteStage(payload).subscribe({ next: (res:any) => {
    if(res.status == true){
      this.toastr.success('stage removed successfully')
      // this.stageLst = [];
      // this.getAllStages();
      this.showStages = false;
      } else{
        this.toastr.error(res.message)
      }
    },
    error: (error) => {
      this.toastr.error(error.statusText);
    },
    })
  }
  
  getUsers(){
    // this.switchService.getAllUsers().subscribe({ next: (res:any) => {
      let cn = JSON.parse(this.userData).companyName;
      let cc = JSON.parse(this.userData).companyCode ;
      this.switchService.cmpnyUsers(cn, cc).subscribe({ next: (res:any) => {
      if(res){
        this.userLst = res
        // this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.data = res;
        } else{
          this.toastr.error(res.message,'signup', {
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

  checkPasswordStrength(password: string): void {
    this.cnfmPaswrd = '', this.confirmPasswordStrengthMessage = '', this.isCnfmPwd = false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const lengthCriteria = password.length >= 8;

    // Calculate strength score
    let strength = 0;
    if (hasUpperCase) strength++;
    if (hasLowerCase) strength++;
    if (hasNumber) strength++;
    if (hasSpecialChar) strength++;
    if (lengthCriteria) strength++;
    if(strength == 0){
      this.passwordStrengthMessage = '';
      this.isPasswordValid = false;
    }

    // Determine message and color based on strength score
    if (strength == 0 && this.submitted == true) {
      this.passwordStrengthMessage = '';
      this.isPasswordValid = false;
    }
    else if (strength <= 2 && strength > 0) {
      this.passwordStrengthMessage = 'Password is Weak';
      this.passwordStrengthColor = 'red';
      this.isPasswordValid = false; this.isPasswrd = true; this.isPassValid = true;
    } else if (strength === 3 || strength === 4) {
      this.passwordStrengthMessage = 'Password is Medium';
      this.passwordStrengthColor = 'orange';
      this.isPasswordValid = false; this.isPasswrd = true; this.isPassValid = true;
    } else if (strength === 5) {
      this.passwordStrengthMessage = 'Password is Good';
      this.passwordStrengthColor = 'green';
      this.isPasswordValid = true; 
    }
  }

  checkPasswordMatch(password: string): void {
    if(this.paswrd != ''){
      // this.toastr.warning("please enter password first")
    // } else {
      if(this.paswrd != password && password != ''){
        this.isCnfmPwd = false;
        this.confirmPasswordStrengthMessage = 'Passwords not matched';
        this.confirmPasswordStrengthColor = 'red'
      } else if(this.paswrd == password){
        this.isCnfmPwd = true;
        this.confirmPasswordStrengthColor = 'green'
        this.confirmPasswordStrengthMessage = 'Passwords matched';
      } else if(password == ''){
        this.confirmPasswordStrengthMessage = '';
      }
    }
  }

  // onSubmit(){
  //   this.submitted = true, this.isPasswrd = true, this.isPassValid = false;
  //   let payload = this.userForm.getRawValue();
  //   const crm = this.userForm.get('tools')?.value.includes('crm');
  //   const adonai = this.userForm.get('tools')?.value.includes('adonai');
  //   payload.type = +payload.type,
  //   payload.crm = crm,
  //   payload.adonai = adonai, delete payload.tools, delete payload.confirmPassword
  //   payload.phoneNumber = +payload.phoneNumber;
  //   if(this.userForm.invalid){
  //     return;
  //   } else if(this.paswrd != this.cnfmPaswrd){
  //     this.toastr.error('password and confirm password not matched','signup', {
  //       timeOut: 3000,
  //       positionClass: 'toast-top-right',
  //     });
  //     return;
  //   } else {
  //     this.switchService.signupApi(payload).subscribe({next: (res:any) => {
  //       if(res.status == true){
  //         this.isAddEdt=!this.isAddEdt;
  //         this.toastr.success(res.message,'signup', {
  //           timeOut: 3000,
  //           positionClass: 'toast-top-right',
  //         });
  //         } else {
  //           this.toastr.error(res.message,'signup', {
  //             timeOut: 3000,
  //             positionClass: 'toast-top-right',
  //           });
  //         }
  //       }
  //     })
  //   }
  // }

  onCountryChange(data:any) {
    data == 'India' ? (this.showCity = true) : (this.showCity = false , this.city = '');
    this.userForm.patchValue({ country: data});
    const cityFieldControl = this.userForm.get('city');
    if (data == 'India') {
      cityFieldControl?.setValidators([Validators.required])
    } else {
      cityFieldControl?.clearValidators()
    }
    cityFieldControl?.updateValueAndValidity(); 
  }

  onSubmit(){
    this.submitted = true; this.isPasswrd = true; this.isPassValid = false;
    const crm = this.userForm.get('tools')?.value.includes('CRM');
    const adonai = this.userForm.get('tools')?.value.includes('Adonai');
    let payload = this.userForm.getRawValue();
    payload.username = payload.firstName + ' ' + payload.lastName,
    payload.type = 2,
    payload.crm = crm,
    payload.adonai = adonai,
    payload.companyCode = JSON.parse(this.userData).companyCode,
    payload.phoneNumber = +payload.phoneNumber, delete payload.tools, delete payload.confirmPassword,
    payload.dob = this.dp.transform(payload.dob, 'dd-MM-yyyy'),
    payload.companyName = JSON.parse(this.userData).companyName,
    this.pload = payload
    if (this.userForm.invalid) {
      this.toastr.error('Please fill mandatory fields');
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
      this.onMailCheck();
      // this.switchService.signupApi(payload).subscribe({ next: (res:any) => {
      //   if(res.status == true){
      //     this.toastr.success(res.message,'signup', {
      //       timeOut: 3000, positionClass: 'toast-top-right' });
      //     this.router.navigate(['auth/login'])
      //     } else {
      //       this.btnDisable = false;
      //       this.toastr.error(res.message,'signup', {
      //         timeOut: 3000, positionClass: 'toast-top-right' });
      //     }
      //   }
      // })
    }
  }

  onSignupApi(){
    this.switchService.signupApi(this.pload).subscribe({ next: (res:any) => {
      if(res.status == true){
        this.closeModal(), 
        this.toastr.success(res.message);
        } else {
          this.btnDisable = false;
          this.toastr.error(res.message);
        }
      }
    })
  }

  onMailCheck(){
    if(this.mailId == ''){
      this.toastr.warning('Please Enter email','signup', {
        timeOut: 3000, positionClass: 'toast-top-right' });
    } else {
      this.switchService.onMailValidSignup(this.mailId).subscribe({ next: (res:any) => {
        if(res.status == true){
          if(this.isResend == false){
            this.openModal();
          } 
          this.btnDisable = true,
          this.userForm.get('email')?.disable();
          this.toastr.success(res.message,'signup', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            this.btnDisable = false;
            this.toastr.error(res.message,'signup', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    }
  }

  onClickButton() {
      this.openModal();  // Open the modal on successful response
        
  }

  openModal() {
    // Create an embedded view from the modal template
    this.modalRef = this.viewContainerRef.createEmbeddedView(this.modalTemplate);
  }

  closeModal() {
    // Destroy the modal view when closing
    if (this.modalRef) {
      this.modalRef.destroy();
      this.modalRef = null;
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
        // this.btnDisable = false, this.isOtpDisabled = true, 
        this.isOkBtn = true; 
        this.onSignupApi();
          this.toastr.success(res.message,'signup', {
            timeOut: 3000, positionClass: 'toast-top-right' });
          } else {
            this.isOkBtn = false;
            this.toastr.error(res.message,'signup', {
              timeOut: 3000, positionClass: 'toast-top-right' });
          }
        }
      })
    }
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

  open() {
    this.modalService.open( {
      backdrop: 'static', // Disable close on clicking outside
      keyboard: false , centered: true 
    });
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

  onRst(){
    this.formInit(); this.getUsers(); this.submitted = false;
    this.userForm.patchValue({ 
      type : [2],
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      dob: new Date().toISOString().split('T')[0],
      phoneNumber: '',
      username: '',
      password: '',
      confirmPassword: '',
      tools : [],
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  quantities() : FormArray {  
    return this.productForm.get("quantities") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
      price: '',  
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  } 
  openRight(content: any) {
    this.offcanvasService.open(content, { position: 'end' });
  } 
     
  selectedOption: string = '';
  
}