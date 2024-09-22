import { Component,inject } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbDropdownModule, NgbTooltipModule,NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
const DATA=[
  {
    img:"./assets/images/faces/4.jpg",
    name:'Emily',
    Date:'24, Jul 2023 - 4:45PM',
    Score:'258',
    Email:'Emily2981@gmail.com',
    logo:'./assets/images/company-logos/1.png',
    company:'Spruko Technologies',
    phnNo:'1678-28993-223',
    Source:'Social Media',
    bg:'primary-transparent',
    text:'primary',
    bg1:'primary-transparent',
    text1:'primary',
    Lead:'New Lead',
    Tags:'Prospect'
  },
  {
    img:"./assets/images/faces/12.jpg",
    name:'James',
    Date:'15, Jul 2023 - 11:45AM',
    Score:' 335',
    Email:'James289@gmail.com',
    logo:'./assets/images/company-logos/3.png',
    company:'Spice Infotech',
    phnNo:'8122-2342-4453',
    Source:'Direct mail',
    bg:'primary-transparent',
    text:'primary',
    bg1:'danger-transparent',
    text1:'danger',
    Lead:'Customer',
    Tags:'Hot Lead'
  },
  {
    img:"./assets/images/faces/14.jpg",
    name:'John',
    Date:'10, Aug 2023 - 3:25PM',
    Score:' 685',
    Email:'John789@gmail.com',
    logo:'./assets/images/company-logos/4.png',
    company:'Logitech ecostics',
    phnNo:'1902-2001-3023',
    Source:'Blog Articles',
    bg:'success-transparent',
    text:'success',
    bg1:'',
    text1:'',
    Lead:'Partner',
    Tags:''
  },
  {
    img:"./assets/images/faces/6.jpg",
    name:'Olivia',
    Date:'18, Aug 2023 - 10:10AM',
    Score:' 425',
    Email:'Olivia290@gmail.com',
    logo:'./assets/images/company-logos/5.png',
    company:'Initech Info',
    phnNo:'1603-2032-1123',
    Source:'Affiliates',
    bg:'light',
    text:'default',
    bg1:'secondary-transparent',
    text1:'secondary',
    Lead:'LostCustomer',
    Tags:'Influencer'
  },
  {
    img:"./assets/images/faces/8.jpg",
    name:'Sophia',
    Date:'19, Jul 2023 - 12:41PM',
    Score:' 516',
    Email:'Sophia1993@gmail.com',
    logo:'./assets/images/company-logos/6.png',
    company:'Massive Dynamic',
    phnNo:'1129-2302-1092',
    Source:'Organic search ',
    bg:'pink-transparent',
    text:'pink',
    bg1:'success-transparent',
    text1:'success',
    Lead:'Subscriber',
    Tags:'Partner'
  },
  {
    img:"./assets/images/faces/9.jpg",
    name:'Toni Stark',
    Date:'14, Aug 2023 - 5:18PM',
    Score:' 127',
    Email:'tonistark345@gmail.com',
    logo:'./assets/images/company-logos/7.png',
    company:'Globex Corporation',
    phnNo:'9923-2344-2003',
    Source:'Social media  ',
    bg:'danger-transparent',
    text:'danger',
    bg1:'info-transparent',
    text1:'info',
    Lead:'Hot Lead',
    Tags:'Referral'
  },
  {
    img:"./assets/images/faces/15.jpg",
    name:'Michael',
    Date:'12, Jun 2023 - 11:38AM',
    Score:' 368',
    Email:'Michael78@gmail.com',
    logo:'./assets/images/company-logos/8.png',
    company:'Acme Corporation',
    phnNo:'7891-2093-1994',
    Source:'Blog Articles  ',
    bg:'warning-transparent',
    text:'warning',
    bg1:'purple-transparent',
    text1:'purple',
    Lead:'Trial User',
    Tags:'Cold Lead'
  },
  {
    img:"./assets/images/faces/1.jpg",
    name:'Emma',
    Date:'19, May 2023 - 1:57PM',
    Score:' 563',
    Email:'Emma678@gmail.com',
    logo:'./assets/images/company-logos/9.png',
    company:'Soylent Corp',
    phnNo:'1899-2993-0923',
    Source:'Organic search  ',
    bg:'success-transparent',
    text:'success',
    bg1:'info-transparent',
    text1:'info',
    Lead:'Influencer',
    Tags:'Partner'
  },
  {
    img:"./assets/images/faces/3.jpg",
    name:'Isabella',
    Date:'28, Jul 2023 - 9:31AM',
    Score:' 185',
    Email:'Isabella289@gmail.com',
    logo:'./assets/images/company-logos/10.png',
    company:'Umbrella Corporation',
    phnNo:'1768-2332-4934',
    Source:'Affiliates  ',
    bg:'primary-transparent',
    text:'primary',
    bg1:'light',
    text1:'default',
    Lead:'New Lead',
    Tags:'Lost Customer'
  },
  {
    img:"./assets/images/faces/9.jpg",
    name:'William',
    Date:'28, Jul 2023 - 9:31AM',
    Score:' 240',
    Email:'William186@gmail.com',
    logo:'./assets/images/company-logos/2.png',
    company:'Hooli Technologies',
    phnNo:'4788-7822-4786',
    Source:'Direct mail  ',
    bg:'primary-transparent',
    text:'primary',
    bg1:'pink-transparent',
    text1:'pink',
    Lead:'New Lead',
    Tags:'Subscriber'
  },
]
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgSelectModule,NgbTooltipModule,FlatpickrModule],
  templateUrl: './contacts.component.html',
  providers: [NgbOffcanvas,NgbModalConfig, NgbModal,FlatpickrDefaults],
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  constructor(
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree

	}
  url1: string = ''; // Assuming url1 is a property in your component

handleFileInput(event: any): void {
  const file = event.target.files[0];
  if (file) { 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

  Contacts=DATA
  click(id:string){
    const data = this.Contacts.filter((x: { Source: string }) => {
      return x.Source != id;
  
    })
    this.Contacts = data;
}
closeResult = '';
private offcanvasService = inject(NgbOffcanvas);
isOpen: boolean = false;
open(content: any) {
  this.offcanvasService.open(content, { position: 'end', scroll: true });
  this.isOpen = !this.isOpen;
}
openModal(content1:any) {
  this.modalService.open(content1,{ centered: true });
}
flatpickrOptions: any = {
  inline: true,
};
// flatpickrOptions: FlatpickrOptions;


ngOnInit() {
  this.flatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
  };

  flatpickr('#inlinetime', this.flatpickrOptions);

    this.flatpickrOptions = {
      enableTime: true,
      dateFormat: 'Y-m-d H:i', // Specify the format you want
      defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
    };

    flatpickr('#pretime', this.flatpickrOptions);
}

}
