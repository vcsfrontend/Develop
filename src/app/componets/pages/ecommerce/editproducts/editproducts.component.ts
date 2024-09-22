import { Component,OnInit,ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import Choices, {Options } from 'choices.js';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import { FormsModule,FormGroup ,FormControl, ReactiveFormsModule} from '@angular/forms';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FilePondModule } from 'ngx-filepond';
import jsonDoc from '../../../../shared/data/editor';
import { FilePondComponent } from 'ngx-filepond';
import { FilePondOptions } from 'filepond';
@Component({
  selector: 'app-editproducts',
  standalone: true,
  imports: [SharedModule,NgxEditorModule,FilePondModule,FormsModule,FlatpickrModule,ReactiveFormsModule],
  templateUrl: './editproducts.component.html',
  providers:[ FlatpickrDefaults],
  styleUrl: './editproducts.component.scss'
})
export class EditproductsComponent implements OnInit{
   public secondElement!:Choices;
   public genderElement!:Choices;
   public sizeElement!:Choices;
   public brandElement!:Choices;
   public colorElement!:Choices;
   public tagsElement!:Choices;
   public availabilityElement!:Choices;
   public statusElement!:Choices;
  constructor() {
    // Initialize with a default value if needed
    this.secondElement = {} as Choices;

  }

  ngOnInit(): void {
    const element = document.getElementById('product-category-add') as HTMLSelectElement;
    const element1 = document.getElementById('product-gender-add') as HTMLSelectElement;
    const element2 = document.getElementById('product-size-add') as HTMLSelectElement;
    const element3 = document.getElementById('product-brand-add') as HTMLSelectElement;
    const element4 = document.getElementById('product-color-add') as HTMLSelectElement;
    const element5 = document.getElementById('product-tags') as HTMLSelectElement;
    const element6 = document.getElementById('product-availability') as HTMLSelectElement;
    const element7 = document.getElementById('product-status-add') as HTMLSelectElement;
  
    this.secondElement = new Choices(element, {
      allowHTML: true,
      // allowSearch: true,
    } as Partial<Options>);
    this.genderElement = new Choices(element1, {
      allowHTML: true,
      // allowSearch: true,
    } as Partial<Options>);
    this.sizeElement = new Choices(element2, {
      allowHTML: true,
      // allowSearch: true,
    } as Partial<Options>);
    this.brandElement = new Choices(element3, {
      allowHTML: true,
      // allowSearch: true,
    } as Partial<Options>);
    this.colorElement = new Choices(element4, {
      allowHTML: true,
      removeItemButton: true,
    } as Partial<Options>);

    this.tagsElement = new Choices(element5,
      {
          allowHTML: true,
          removeItemButton: true,
      })
    this.availabilityElement = new Choices(element6,
        {
            allowHTML: true,

        }); 
    this.statusElement = new Choices(element7,
          {
              allowHTML: true,
  
          }); 
    this.editor = new Editor();
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
  
    };
   
   

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#publish-date', this.flatpickrOptions);
}
editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  flatpickrOptions: any = {
    inline: true,
  };

  @ViewChild('.product-Images') myPond!: EditproductsComponent
  @ViewChild('.product-documents') image!: EditproductsComponent
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
