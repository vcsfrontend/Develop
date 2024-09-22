import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbAlert, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as PrismCode from '../../../shared/prismData/alert';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
interface Alert {
  type: string;
  message: string;
  icon?: string;
  image?: string;
  class?: string;
  message1?: string;
  message2?: string;
  message3?: string;
  class1?: string;
  class3?: string;
}

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [
    SharedModule,
    NgbAlert,
    FormsModule,
    NgbModule,
    ShowcodeCardComponent,
  ],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss',
})
export class AlertsComponent {
  prsimCodeData: any = PrismCode;

  livealerts: any;
  i!: any;
  alerts: any[] = [
    {
      type: 'outline-success',
      message: 'A simple outline primary alert—check it out!',
    },
    {
      type: 'outline-info',
      message: 'A simple outline info alert—check it out! ',
    },
    {
      type: 'outline-warning',
      message: 'A simple outline warning alert—check it out!',
    },
    {
      type: 'outline-danger',
      message: 'A simple outline danger alert—check it out!',
    },
    {
      type: 'outline-primary',
      message: 'A simple outline primary alert—check it out!',
    },
    {
      type: 'outline-secondary',
      message: 'A simple outline secondary alert—check it out!',
    },
    {
      type: 'outline-light',
      message: 'A simple outline light alert—check it out!',
    },
    {
      type: 'outline-dark',
      message: 'A simple outline dark alert—check it out!',
    },
  ];
  solidshadowalerts: Alert[] = [
    {
      type: 'solid-success',
      message: 'A simple solid success alert with small shadow—check it out!',
    },
    {
      type: 'solid-info',
      message: 'A simple solid info alert with small shadow—check it out!',
    },
    {
      type: 'solid-warning',
      message: 'A simple solid warning alert with small shadow—check it out!',
    },
    {
      type: 'solid-danger',
      message: 'A simple solid danger alert with small shadow—check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert with small shadow—check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert with small shadow—check it out!',
    },
    {
      type: 'solid-light',
      message: 'A simple solid light alert with small shadow—check it out!',
    },
    {
      type: 'solid-dark',
      message: 'A simple solid dark alert with small shadow—check it out!',
    },
  ];
  solidcoloralerts: Alert[] = [
    {
      type: 'solid-success',
      message: 'A simple solid success alert—check it out!',
    },
    {
      type: 'solid-info',
      message: 'A simple solid info alert—check it out!',
    },
    {
      type: 'solid-warning',
      message: 'A simple solid warningalert—check it out!',
    },
    {
      type: 'solid-danger',
      message: 'A simple solid danger alert—check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid primary alert—check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid secondary alert—check it out!',
    },
    {
      type: 'solid-light',
      message: 'A simple solid light alert—check it out!',
    },
    {
      type: 'solid-dark',
      message: 'A simple solid dark alert—check it out!',
    },
  ];
  roundsolidalerts: Alert[] = [
    {
      type: 'solid-success',
      message: 'A simple solid rounded success alert—check it out!',
    },
    {
      type: 'solid-info',
      message: 'A simple solid rounded info alert—check it out!!',
    },
    {
      type: 'solid-warning',
      message: 'A simple solid rounded warning alert—check it out!',
    },
    {
      type: 'solid-danger',
      message: 'A simple solid rounded danger alert—check it out!',
    },
    {
      type: 'solid-primary',
      message: 'A simple solid rounded primary alert—check it out!',
    },
    {
      type: 'solid-secondary',
      message: 'A simple solid rounded secondary alert—check it out!',
    },
    {
      type: 'solid-light',
      message: 'A simple solid rounded light alert—check it out!',
    },
    {
      type: 'solid-dark',
      message: 'A simple solid rounded dark alert—check it out!',
    },
  ];
  roundoutlinealerts: Alert[] = [
    {
      type: 'outline-success',
      message: 'A simple outline rounded success alert—check it out!',
    },
    {
      type: 'outline-info',
      message: 'A simple outline rounded info alert—check it out!!',
    },
    {
      type: 'outline-warning',
      message: 'A simple outline rounded warning alert—check it out!',
    },
    {
      type: 'outline-danger',
      message: 'A simple outline rounded danger alert—check it out!',
    },
    {
      type: 'outline-primary',
      message: 'A simple outline rounded primary alert—check it out!',
    },
    {
      type: 'outline-secondary',
      message: 'A simple outline rounded secondary alert—check it out!',
    },
    {
      type: 'outline-light',
      message: 'A simple outline rounded light alert—check it out!',
    },
    {
      type: 'outline-dark',
      message: 'A simple outline rounded dark alert—check it out!',
    },
  ];
  rounddefaultalerts: Alert[] = [
    {
      type: 'success',
      message: 'A simple rounded defult success alert—check it out!',
    },
    {
      type: 'info',
      message: 'A simple  rounded info alert—check it out!!',
    },
    {
      type: 'warning',
      message: 'A simple  rounded warning alert—check it out!',
    },
    {
      type: 'danger',
      message: 'A simple  rounded danger alert—check it out!',
    },
    {
      type: 'primary',
      message: 'A simple  rounded primary alert—check it out!',
    },
    {
      type: 'secondary',
      message: 'A simple  rounded secondary alert—check it out!',
    },
    {
      type: 'light',
      message: 'A simple  rounded light alert—check it out!',
    },
    {
      type: 'dark',
      message: 'A simple  rounded dark alert—check it out!',
    },
  ];
  roundbuttonalerts: Alert[] = [
    {
      type: 'success',
      message: 'A simple rounded defult success alert—check it out!',
    },
    {
      type: 'info',
      message: 'A simple  rounded info alert—check it out!!',
    },
    {
      type: 'warning',
      message: 'A simple  rounded warning alert—check it out!',
    },
    {
      type: 'danger',
      message: 'A simple  rounded danger alert—check it out!',
    },
    {
      type: 'primary',
      message: 'A simple  rounded primary alert—check it out!',
    },
    {
      type: 'secondary',
      message: 'A simple  rounded secondary alert—check it out!',
    },
    {
      type: 'light',
      message: 'A simple  rounded light alert—check it out!',
    },
    {
      type: 'dark',
      message: 'A simple  rounded dark alert—check it out!',
    },
  ];
  svgalerts: Alert[] = [
    {
      type: 'alert svg-primary alert-primary alert-dismissible fade show custom-alert-icon shadow-sm',
      message: ' A customized primary alert with an icon',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem"fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>',
    },

    {
      type: 'alert svg-secondary alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm',
      message: 'A customized secondary alert with an icon',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',
    },
    {
      type: 'alert svg-warning alert-warning alert-dismissible fade show custom-alert-icon shadow-sm',
      message: 'A customized warning alert with an icon',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg>',
    },
    {
      type: ' alert svg-danger alert-danger alert-dismissible fade show custom-alert-icon shadow-sm',
      message: 'A customized danger alert with an icon!',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></svg>',
    },
  ];
 
  iconsalerts: Alert[] = [
    {
      type: 'alert alert-primary svg-primary d-flex align-items-center',
      message: ' An example alert with an icon',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
    },

    {
      type: 'alert alert-success svg-success d-flex align-items-center"',
      message: 'An example success alert with an icon',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',
    },
    {
      type: 'alert alert-warning svg-warning d-flex align-items-center',
      message: 'An example warning alert with an icon',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>',
    },
    {
      type: ' alert alert-danger svg-danger d-flex align-items-center',
      message: 'An example danger alert with an icon',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>',
    },
  ];
  imagesalerts: Alert[] = [
    {
      type: 'alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap',
      message: ' A simple primary alert with image—check it out!',
      image: './assets/images/faces/3.jpg',
    },
    {
      type: 'alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap',
      message: ' A simple secondary alert with image—check it out!',
      image: './assets/images/faces/5.jpg',
    },
    {
      type: 'alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap',
      message: 'A simple warning alert with image—check it out!',
      image: './assets/images/faces/8.jpg',
    },
    {
      type: 'alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap',
      message: 'A simple danger alert with image—check it out!',
      image: './assets/images/faces/11.jpg',
    },
    {
      type: 'alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap',
      message: 'A simple info alert with image—check it out!',
      image: './assets/images/faces/13.jpg',
    },
    {
      type: 'alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap',
      message: 'A simple light alert with image—check it out!',
      image: './assets/images/faces/10.jpg',
    },
    {
      type: 'alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap',
      message: ' A simple dark alert with image—check it out!',
      image: './assets/images/faces/15.jpg',
    },
  ];
  sizeimgssalerts: Alert[] = [
    {
      type: 'alert alert-img avatar-xs  alert-primary alert-dismissible fase show flex-wrap',
      message: ' A simple primary alert with image—check it out!',
      image: './assets/images/faces/3.jpg',
      class: 'avatar avatar-xs me-3',
    },
    {
      type: 'alert alert-img alert-secondary alert-dismissible fase show  flex-wrap',
      message: ' A simple secondary alert with image—check it out!',
      image: './assets/images/faces/5.jpg',
      class: 'avatar avatar-sm me-3',
    },
    {
      type: 'alert alert-img alert-warning alert-dismissible fase show  flex-wrap',
      message: 'A simple warning alert with image—check it out!',
      image: './assets/images/faces/8.jpg',
      class: 'avatar  me-3',
    },
    {
      type: 'alert alert-img alert-danger alert-dismissible fase show  flex-wrap',
      message: 'A simple danger alert with image—check it out!',
      image: './assets/images/faces/11.jpg',
      class: 'avatar avatar-md me-3',
    },
    {
      type: 'alert alert-img alert-info alert-dismissible fase show  flex-wrap',
      message: 'A simple info alert with image—check it out!',
      image: './assets/images/faces/13.jpg',
      class: 'avatar avatar-lg me-3',
    },

    {
      type: 'alert alert-img alert-dark alert-dismissible fase show  flex-wrap',
      message: ' A simple dark alert with image—check it out!',
      image: './assets/images/faces/15.jpg',
      class: 'avatar avatar-xl me-3',
    },
  ];
  contentsalerts: Alert[] = [
    {
      type: 'alert alert-primary overflow-hidden p-0',
      message: ' Thank you for reporting this.!',
      class: 'p-3 bg-primary text-fixed-white d-flex justify-content-between',
    },
    {
      type: 'alert  alert-secondary overflow-hidden p-0 ',
      message: 'Thank you for reporting this.!',
      class: 'p-3 bg-secondary text-fixed-white d-flex justify-content-between',
    },
    {
      type: 'alert alert-success overflow-hidden p-0',
      message: 'Thank you for reporting this.!',
      class: 'p-3 bg-success text-fixed-white d-flex justify-content-between',
    },
    {
      type: 'alert alert-warning overflow-hidden p-0',
      message: 'Thank you for reporting this.!',
      class: 'p-3 bg-warning text-fixed-white d-flex justify-content-between',
    },
  ];
  infoalerts: Alert[] = [
    {
      type: 'alert alert-solid-primary border border-primary mb-0 p-2',
      message: ' Information Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
      message1: 'Information alert to show to information',
      message2: 'cancel',
      message3: 'open',
    },

    {
      type: 'alert alert-solid-secondary border border-secondary mb-0 p-2',
      message: 'Success Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',
      message1: 'Success alert to show to success message',
      message2: 'close',
      message3: ' ',
    },
    {
      type: 'alert alert-solid-warning border border-warning mb-0 p-2',
      message: 'Warning Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>',
      message1: 'Warning alert to show to warning message',
      message2: 'skip',
      message3: 'open',
    },
    {
      type: ' alert alert-solid-danger border border-danger mb-0 p-2',
      message: 'Danger Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>',
      message1: 'Danger alert to show to danger message',
      message2: 'close',
      message3: 'continue',
    },
  ];
  solidalerts: Alert[] = [
    {
      type: 'alert svg-primary alert-primary border border-primary mb-0 p-2',
      message: ' Information Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>',
      message1: 'Information alert to show to information',
      class: 'text-secondary fw-medium me-2 d-inline-block',
      class1: 'text-primary fw-medium',
      class3: 'text-primary w-100',
    },

    {
      type: 'alert alert-secondary svg-secondary border border-secondary mb-0 p-2',
      message: 'Success Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></svg>',
      message1: 'Success alert to show to success message',
      class: 'text-danger fw-medium me-2 d-inline-block',
      class1: 'text-secondary fw-medium',
      class3: 'text-secondary w-100',
    },
    {
      type: 'alert alert-warning svg-warning border border-warning mb-0 p-2',
      message: 'Warning Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z"></path><polygon points="13,16 11,16 11,18 13,18"></polygon><polygon points="13,10 11,10 11,15 13,15"></polygon></g></g></g></svg>',
      message1: 'Warning alert to show to warning message',
      class: 'text-dark fw-medium me-2 d-inline-block',
      class1: 'text-warning fw-medium',
      class3: 'text-warning w-100',
    },
    {
      type: ' alert alert-danger border svg-danger border-danger mb-0 p-2',
      message: 'Danger Alert',
      icon: '<svg class="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24"></rect></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z"></path><rect height="6" width="2" x="11" y="7"></rect><rect height="2" width="2" x="11" y="15"></rect></g></g></g></svg>',
      message1: 'Danger alert to show to danger message',
      class: 'text-info fw-medium me-2 d-inline-block',
      class1: 'text-danger fw-medium',
      class3: 'text-danger w-100',
    },
  ];
  solidalerts1:any[]=[
  {
   type:'alert custom-alert1 alert-primary'
   } 
  ]
  constructor(private sanitizer: DomSanitizer) {
    this.livealerts = [];
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  close1(alert1: Alert) {
    this.solidshadowalerts.splice(this.solidshadowalerts.indexOf(alert1), 1);
  }
  close2(alert2: Alert) {
    this.solidcoloralerts.splice(this.solidcoloralerts.indexOf(alert2), 1);
  }
  close3(alert3: Alert) {
    this.roundsolidalerts.splice(this.roundsolidalerts.indexOf(alert3), 1);
  }
  close4(alert4: Alert) {
    this.roundoutlinealerts.splice(this.roundoutlinealerts.indexOf(alert4), 1);
  }
  close5(alert5: Alert) {
    this.rounddefaultalerts.splice(this.rounddefaultalerts.indexOf(alert5), 1);
  }
  close6(alert6: Alert) {
    this.roundbuttonalerts.splice(this.roundbuttonalerts.indexOf(alert6), 1);
  }
  close7(alert7: Alert) {
    this.svgalerts.splice(this.svgalerts.indexOf(alert7), 1);
  }
  close8(alert8: Alert) {
    this.iconsalerts.splice(this.iconsalerts.indexOf(alert8), 1);
  }
  close9(alert9: Alert) {
    this.imagesalerts.splice(this.imagesalerts.indexOf(alert9), 1);
  }
  close10(alert10: Alert) {
    this.sizeimgssalerts.splice(this.sizeimgssalerts.indexOf(alert10), 1);
  }
  close11(alert11: Alert) {
    this.contentsalerts.splice(this.contentsalerts.indexOf(alert11), 1);
  }
  close12(alert12: Alert) {
    this.infoalerts.splice(this.infoalerts.indexOf(alert12), 1);
  }
  close13(alert13: Alert) {
    this.solidalerts.splice(this.solidalerts.indexOf(alert13), 1);
  }
  close14(alert14: Alert) {
    this.solidalerts.splice(this.solidalerts.indexOf(alert14), 1);
  }


  showAlert() {
    // Add a new alert to the array
    this.livealerts.push({
      message: 'Nice, you triggered this alert message!',
      show: true,
    });
  }
  removeAlert(index: number) {
    this.livealerts.splice(index, 1);
  }
  closeAlerts(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
  }
  getTrustedHtml(val: string | null | undefined): SafeHtml {
    return val ? this.sanitizer.bypassSecurityTrustHtml(val) : '';
  }
  isClosed3: boolean = false;
  isClosed1: boolean = false;
  isClosed2: boolean = false;
  isClosed4: boolean = false;
  Closetoggle(item: any) {
    if (item == 'three') {
      this.isClosed3 = true;
    }
    if (item == 'one') {
      this.isClosed1 = true;
    }
    if (item == 'two') {
      this.isClosed2 = true;
    }

    if (item == 'four') {
      this.isClosed4 = true;
    }
  }
}
