import {
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
interface Call {
  image?: string;
  name?: string;
  time?: string;
  status?: string;
  videoCall?: string;
  callsatus?: string;
  upDown?: string;
}
interface Recent {
  message: string;
  image?: string;
  name?: string;
  time?: string;
  unReadMsgCount?: string;
  unReadMsgStatus?: string;
  status?: string;
  chatMsgUnread: boolean;
  chatMsgTyping: boolean;
}
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgbNavModule,
    CommonModule,
    SharedModule,
    NgbDropdownModule,
    RouterModule,
    OverlayscrollbarsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  providers: [NgbOffcanvas],
})
export class ChatComponent {
  active: any;
  closeResult = '';
  private offcanvasService = inject(NgbOffcanvas);
  isOpen: boolean = false;

  open(content: any) {
    this.offcanvasService.open(content, { position: 'end', scroll: true });
    this.isOpen = !this.isOpen;
  }

 
  recents: Recent[] = [
    {
      name: 'Olivia',
      message: 'Need to go for lunch?',
      image: './assets/images/faces/3.jpg',
      time: '11:20 PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Scarlett',
      message: 'Typing...',
      image: './assets/images/faces/2.jpg',
      time: '12:24 PM',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent ',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
    },
    {
      name: 'Christopher',
      message: 'Nice to meet you 😊',
      image: './assets/images/faces/10.jpg',
      time: '12:24 PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: true,
      chatMsgTyping: false,
    },
    {
      name: 'Isabella',
      message: 'Chat with you later,bye',
      image: './assets/images/faces/8.jpg',
      time: '12:45 PM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
  ];
  allchats: Recent[] = [
    {
      name: 'Matthew',
      message: 'Congratulations on your new project',
      image: './assets/images/faces/11.jpg',
      time: '11:54 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Amelia',
      message: 'Nice work,Congrats👏;',
      image: './assets/images/faces/3.jpg',
      time: '9:45 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Charlotte',
      message: 'Great work keep it up :-)',
      image: './assets/images/faces/6.jpg',
      time: '8:31 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Abigail',
      message: 'You are need to be appreaciated for what you have done,congs',
      image: './assets/images/faces/4.jpg',
      time: '7:23 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Richard',
      message: 'Great Project',
      image: './assets/images/faces/13.jpg',
      time: '10:22 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Joseph',
      message: 'Hike management fixed',
      image: './assets/images/faces/15.jpg',
      time: '9:10 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
  ];
  groups: Recent[] = [
    {
      name: '  Family Together 😍',
      message: 'Hira Typing...',
      image: './assets/images/faces/17.jpg',
      time: '12:24 PM ',
      unReadMsgCount: '2',
      unReadMsgStatus: 'bg-success-transparent',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: true,
    },
    {
      name: 'Work Buddies',
      message: 'Rams:Happy to be part of this group',
      image: './assets/images/faces/18.jpg',
      time: '1:16 AM',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: true,
      chatMsgTyping: false,
    },
    {
      name: 'Friends Forever 😎',
      message: 'Simon,Melissa,Amanda,Patrick,Siddique',
      image: './assets/images/faces/19.jpg',
      time: '3 days ago',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Social Media Deals',
      message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
      image: './assets/images/faces/20.jpg',
      time: '5 days ago',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Apartment Group',
      message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
      image: './assets/images/faces/21.jpg',
      time: '12 days ago',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
  ];
  calls: Call[] = [
    {
      name: 'Olivia',
      image: './assets/images/faces/5.jpg',
      time: 'Today,12:47PM',
      status: 'online',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: ' Melissa',
      image: './assets/images/faces/7.jpg',
      time: 'Today,10:27AM',
      status: 'online',
      videoCall: '',
      callsatus: 'ms-1 outgoing-call-failed',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: ' Sharukh Sam',
      image: './assets/images/faces/21.jpg',
      time: 'Yesterday,12:45PM',
      status: 'offline',
      videoCall: 'ti ti-video',
      callsatus: 'ms-1 outgoing-call-success',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: '   Kiram Kumal',
      image: './assets/images/faces/15.jpg',
      time: '3 Days ago',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: 'Amanda Sams',
      image: './assets/images/faces/4.jpg',
      time: '22, Oct 2023',
      status: 'offline',
      videoCall: 'ti ti-video',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: 'Azimo Peter',
      image: './assets/images/faces/16.jpg',
      time: '24, Oct 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-failed',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: 'Sierra Adams',
      image: './assets/images/faces/18.jpg',
      time: '22, Oct 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: 'Dimple Kanns',
      image: './assets/images/faces/3.jpg',
      time: '13, Oct 2023',
      status: 'online',
      videoCall: 'ti ti-video',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
    {
      name: ' Adrea Jaremiah',
      image: './assets/images/faces/9.jpg',
      time: '13, Sep 2023',
      status: 'online',
      videoCall: '',
      callsatus: 'ms-1 outgoing-call-failed',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: 'Anjaneliyu',
      image: './assets/images/faces/21.jpg',
      time: '10, July 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 outgoing-call-success',
      upDown: 'ti ti-arrow-up-right',
    },
    {
      name: '  Jason Steph',
      image: './assets/images/faces/14.jpg',
      time: '1, Apr 2023',
      status: 'offline',
      videoCall: '',
      callsatus: 'ms-1 incoming-call-success',
      upDown: '',
    },
  ];
  selectedData: Recent = this.recents[0];

  changeTheInfo(data:Recent) {
    this.selectedData=data
    this.selectedData = this.selectedData;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  activeUser = this.recents[0];

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  detailsclick() {
    document.querySelector('.chat-user-details ')?.classList.add('open');
  }

  removedetails() {
    document.querySelector('.chat-user-details ')?.classList.remove('open');
   
  }
  removedetails1() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
}
