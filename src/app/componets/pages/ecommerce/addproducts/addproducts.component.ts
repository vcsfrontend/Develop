import { Component,ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';

import Choices, {Options } from 'choices.js';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormGroup,FormsModule } from '@angular/forms';
import { FilePondOptions } from 'filepond';
import { FilePondModule } from 'ngx-filepond';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';



@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [SharedModule, FlatpickrModule, NgSelectModule, FilePondModule, FormsModule, AngularEditorModule],
  templateUrl: './addproducts.component.html',
  providers:[  FlatpickrDefaults],
  styleUrl: './addproducts.component.scss'
})
export class AddproductsComponent {
  public tagsElement!:Choices;
  public type: string = 'component';
  public disabled: boolean = false;
//select 1
selectedSimpleItem ='select' ;
simpleItems:any= [];
//select 2
selectedSimpleItem1 ='select' ;
simpleItems1:any= [];
//select 3
selectedSimpleItem2 ='select' ;
simpleItems2:any= [];
//select 4
selectedSimpleItem3 ='select' ;
simpleItems3:any= [];
//select 5
selectedSimpleItem4 =['select'] ;
simpleItems4:any= [];
//select 6
selectedSimpleItem5 ='select' ;
simpleItems5:any= [];
//select 7
selectedSimpleItem6 ='select' ;
simpleItems6:any= [];


ngOnInit() {
  const element = document.getElementById('product-tags') as HTMLSelectElement;
  this.simpleItems= ['Small','Medium','Extra Large','Large'];
  this.simpleItems1= ['Armani','Lacoste','Arrrabi','Mufti'];
  this.simpleItems2 = ['Jewellery','Ethnic & Festive','Grooming','Accesories','Footwear','Category','Clothing',];
  this.simpleItems3= ['Male','All','Female','Others'];
  this.simpleItems4= ['White','Red','Pink','Yellow','Orange','Green'];
  this.simpleItems5= ['Publish','Scheduled'];
  this.simpleItems6= ['In Stock','Out Of Stock'];
  this.flatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',

  };
  this.tagsElement = new Choices(element,
    {
        allowHTML: true,
        removeItemButton: true,
    })
  myGroup: FormGroup;

  
  flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#pretime', this.flatpickrOptions);
}
htmlContent = '';

editorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: '15rem',
  minHeight: '5rem',
  placeholder: 'Enter text here...',
  translate: 'no',
  defaultParagraphSeparator: 'p',
  defaultFontName: 'Arial',
  toolbarHiddenButtons: [
    ['bold']
    ],
  customClasses: [
    {
      name: "quote",
      class: "quote",
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: "titleText",
      class: "titleText",
      tag: "h1",
    },
  ]
};






flatpickrOptions: any = {
  inline: true,
};
@ViewChild('.product-Images') myPond!: AddproductsComponent
@ViewChild('.product-documents') image!: AddproductsComponent
pondOptions: FilePondOptions = {
  allowMultiple: true,
  labelIdle: 'Drop files here...'   
}

pondFiles: FilePondOptions["files"] = [
  // {
  //   source: 'assets/photo.jpeg',
  //   options: {
  //     type: 'local'
  //   }
  // }
]

pondHandleInit() {
  // console.log('FilePond has initialised', this.myPond);
}
pondHandleInit1() {
  // console.log('FilePond has initialised', this.image);
}
pondHandleAddFile(event: any) {
  // console.log('A file was added', event);
}

pondHandleActivateFile(event: any) {
  // console.log('A file was activated', event)
}
}
