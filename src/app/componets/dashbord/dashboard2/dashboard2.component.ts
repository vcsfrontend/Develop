// import { Component,ViewChild } from '@angular/core';
// import { SharedModule } from '../../../../shared/common/sharedmodule';
// import { AngularEditorConfig,AngularEditorModule } from '@kolkov/angular-editor';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { FormsModule } from '@angular/forms';
// import { FilePondComponent, FilePondModule } from 'ngx-filepond';
// import * as FilePond from 'filepond';
// import flatpickr from 'flatpickr';
// import { FlatpickrModule,FlatpickrDefaults  } from 'angularx-flatpickr';
// @Component({
//   selector: 'app-create-project',
//   standalone: true,
//   imports: [SharedModule,NgSelectModule,AngularEditorModule,FormsModule,FlatpickrModule,FilePondModule],
//   templateUrl: './create-project.component.html',
//   providers: [FlatpickrDefaults],
//   styleUrl: './create-project.component.scss'
// })
// export class CreateProjectComponent {
//   selectedTags=['Angelina May'];
//   selectedTags1=['Marketing', 'Sales', 'Development', 'Design', 'Research'];

//   tags=[
//     {id:1,name:'Kiara advain'},
//     {id:2,name:'Hercules Jhon'},
//     {id:3,name:'Mayor Kim'},
//     {id:4,name:'Alexa Biss'},
//     {id:5,name:'Karley Dia'},
//     {id:6,name:'Kim Jong'},
//     {id:7,name:'Darren Sami'},
//     {id:8,name:'Elizabeth'},
//     {id:9,name:'Bear Gills'},
//     {id:10,name:'Alex Carey'},
    
//   ]

//   @ViewChild("myPond") myPond!: FilePondComponent;

// pondOptions: FilePond.FilePondOptions = {
//   allowMultiple: true,
//   labelIdle: "Drop files here to Upload...",
// };
// singlepondOptions: FilePond.FilePondOptions = {
//   allowMultiple: false,
//   labelIdle: "Drop files here to Upload...",
// };

// pondFiles: FilePond.FilePondOptions["files"] = [
 
// ];

// pondHandleInit() {
//   // console.log("FilePond has initialised", this.myPond);
// }

// pondHandleAddFile(event: any) {
//   // console.log("A file was added", event);
// }

// pondHandleActivateFile(event: any) {
//   // console.log("A file was activated", event);
// }
// htmlContent:string = '';

// config: AngularEditorConfig = {
//   editable: true,
//   spellcheck: true,
//   height: '10rem',
//   minHeight: '5rem',
//   placeholder: `  lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in 
//   Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.`,
//   translate: 'no',
//   defaultParagraphSeparator: 'p',
//   defaultFontName: 'Arial',
//   toolbarHiddenButtons: [
//     ['bold']
//     ],
//   customClasses: [
//     {
//       name: "quote",
//       class: "quote",
//     },
//     {
//       name: 'redText',
//       class: 'redText'
//     },
//     {
//       name: "titleText",
//       class: "titleText",
//       tag: "h1",
//     },
//   ]
// };


// flatpickrOptions: any = {
//   inline: true,
// };
// // flatpickrOptions: FlatpickrOptions;

// constructor() {}

// ngOnInit() {
//   this.flatpickrOptions = {
//     enableTime: true,
//     noCalendar: true,
//     dateFormat: 'H:i',
//   };

//   flatpickr('#inlinetime', this.flatpickrOptions);

//     this.flatpickrOptions = {
//       enableTime: true,
//       dateFormat: 'Y-m-d H:i', // Specify the format you want
//       defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
//     };

//     flatpickr('#pretime', this.flatpickrOptions);
// }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for making HTTP requests
import { FilePondOptions } from 'filepond';
import { SharedModule } from '../../../shared/common/sharedmodule' ;
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  standalone: true,
  imports:[SharedModule,ReactiveFormsModule,MatDatepickerModule,MatInputModule,MatNativeDateModule]
})
export class Dashboard2Component implements OnInit {
  createProjectForm!: FormGroup;
  pondOptions: FilePondOptions;

  constructor(private fb: FormBuilder, private http: HttpClient) { // Inject HttpClient
    // Initialize FilePond options if needed
    this.pondOptions = {
      allowMultiple: true,
      // other FilePond options here
    };
  }

  ngOnInit(): void {
    // Initialize the form with the necessary controls and validators
    this.createProjectForm = this.fb.group({
      projectName: ['', Validators.required],
      clientName: ['', Validators.required],
      businessCategory: ['', Validators.required],
      projectAddress: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      projectState: ['', Validators.required],
      projectEstimation: ['', [Validators.required, Validators.min(0)]], // Assuming estimation should be a positive number
      projectArea: ['', [Validators.required, Validators.min(0)]], // Assuming area should be a positive number
      projectStartDate: ['', Validators.required],
      projectEndDate: ['', Validators.required],
      action: ['', Validators.required],
      companyName: ['', Validators.required],
      attachments: [null] // Adjust based on your attachment handling
    });
  }

  onSubmit(): void {
    if (this.createProjectForm.valid) {
      const projectData = this.createProjectForm.value;
      this.http.post('https://adonai-vcs-fmbqfgbudgendtfu.israelcentral-01.azurewebsites.net/adonai/save_project_details', projectData).subscribe({
        next: (response) => {
          console.log('Project created successfully', response);
        },
        error: (error) => {
          console.error('Error creating project', error);
        },
        complete: () => {
          console.log('Project creation process completed.');
          this.resetForm(); // Optionally reset the form after submission
        },
      });
    } else {
      // Mark all controls as touched to show validation errors
      this.createProjectForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }

  // Optional: You can create a method to reset the form
  resetForm(): void {
    this.createProjectForm.reset();
  }
}

