import { Component, HostListener, OnInit,Renderer2,ElementRef,ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig,NgbDropdownModule, NgbModule, NgbOffcanvas  } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { FormsModule,FormGroup ,FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/editor';
import { NgSelectModule } from '@ng-select/ng-select';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
@Component({
  selector: 'app-mailapp',
  standalone: true,
  imports: [SharedModule,NgSelectModule,NgbDropdownModule,ReactiveFormsModule,FormsModule,NgxEditorModule,NgbModule, OverlayscrollbarsModule],
  templateUrl: './mailapp.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrl: './mailapp.component.scss'
})
export class MailappComponent implements OnInit{
  @ViewChild('totalMailsElement', { static: false }) totalMailsElement!: ElementRef 
  @ViewChild('mailNavigation', { static: false }) mailNavigationElement!: ElementRef 
  constructor(config: NgbModalConfig, private modalService: NgbModal,private offcanvasService:NgbOffcanvas,private renderer: Renderer2) {
   
  }
  open(content: any) {
    this.modalService.open(content,{ size: 'lg' });
  }
  openOffcanvas(content1:any){
    this.offcanvasService.open(content1, { position: 'end' , scroll: true,panelClass:"mail-info-offcanvas" });

  }
  ngOnInit(): void {
    this.editor = new Editor();
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
  Selection = [
    { value: 1, label: 'jay@gmail.com' },
    { value: 2, label: 'kia@gmail.com' },
    { value: 3, label: 'don@gmail.com' },
    { value: 4, label: 'kimo@gmail.com' },
  
];

  selectedAccounts = [];

  compareAccounts = (item:any, selected:any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };

  i: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustLayout();
  }
  adjustLayout(): void {
    if (this.totalMailsElement && this.mailNavigationElement) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
  
      if (window.innerWidth > 1399) {
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      } else if (window.innerWidth < 1399 && !this.i) {
        this.renderer.addClass(totalMailsNativeElement, 'd-none');
      } else {
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      }
  
      if (window.innerWidth > 991) {
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
        this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
      } else {
        if (totalMailsNativeElement.style.display == 'block' && !this.i) {
          mailNavigationNativeElement.style.display = 'none';
        }
  
        if (window.innerWidth < 992) {
          this.renderer.setStyle(totalMailsNativeElement, 'display', 'none');
        }
      }
  
      this.onMailTypeClick();
  
      if (window.screen.width < 992) {
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
        this.renderer.addClass(totalMailsNativeElement, 'd-none');
        this.i = true;
      }
  
      this.onTotalMailsCloseClick();
  
      if (window.screen.width <= 991) {
        this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'none');
        this.i = true;
      }
    }
  }
  
  onMailTypeClick(): void {
    if (window.innerWidth <= 991) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
      this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
      this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      this.renderer.setStyle(mailNavigationNativeElement, 'display', 'none');
      this.i = true;
    }
  }
  
  onTotalMailsCloseClick(): void {
    if (window.innerWidth < 991) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
      this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
      this.renderer.addClass(totalMailsNativeElement, 'd-none');
      this.i = true;
    }
  }
 
}