import { Component,inject } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbDropdownModule ,NgbOffcanvas,NgbOffcanvasConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
const DATA=[
  {
    logo:'./assets/images/company-logos/1.png',
    name:'Spruko Technologies',
    Email:'sprukotechnologies2981@gmail.com',
    phnNo:'1678-28993-223',
    bg:'primary-transparent',
    text:'primary',
    Size:'Corporate',
    Industry:'Information Technology',
    img:"./assets/images/faces/4.jpg",
    Contact:'Charlotte',
    Deals:'258',
    
  },
  {
    logo:'./assets/images/company-logos/3.png',
    name:'Spice Infotech',
    Email:'spiceinfotech289@gmail.com',
    phnNo:'8122-2342-4453',
    bg:'danger-transparent',
    text:'danger',
    Size:'Small Business',
    Industry:'Telecommunications',
    img:"./assets/images/faces/12.jpg",
    Contact:'Thomas',
    Deals:'335',
    
  },
  {
    logo:'./assets/images/company-logos/4.png',
    name:'Logitech ecostics',
    Email:'logitecheco789@gmail.com',
    phnNo:'1902-2001-3023',
    bg:'success-transparent',
    text:'success',
    Size:'Micro Business',
    Industry:'Logistics',
    img:"./assets/images/faces/14.jpg",
    Contact:'Matthew',
    Deals:'685',
  },
  {
    logo:'./assets/images/company-logos/5.png',
    name:'Initech Info',
    Email:'initechinfo290@gmail.com',
    phnNo:'1603-2032-1123',
    bg:'light',
    text:'default',
    Size:'Startup',
    Industry:'Information Technology',
    img:"./assets/images/faces/6.jpg",
    Contact:'Isabella',
    Deals:'425',
  },
  {
    logo:'./assets/images/company-logos/6.png',
    name:'Massive Dynamic',
    Email:'massivedynamic1993@gmail.com',
    phnNo:'1129-2302-1092',
    bg:'pink-transparent',
    text:'pink',
    Size:'Large Enterprise',
    Industry:'Professional Services',
    img:"./assets/images/faces/8.jpg",
    Contact:'Sophia',
    Deals:'516',
  },
  {
    logo:'./assets/images/company-logos/7.png',
    name:'Globex Corporation',
    Email:'globexcorp345@gmail.com',
    phnNo:'9923-2344-2003',
    bg:'danger-transparent',
    text:'danger',
    Size:'Small Business',
    Industry:'Education',
    img:"./assets/images/faces/9.jpg",
    Contact:'Toni Stark',
    Deals:'127',
  },
  {
    logo:'./assets/images/company-logos/8.png',
    name:'Acme Corporation',
    Email:'acmecorporation78@gmail.com',
    phnNo:'7891-2093-1994',
    bg:'primary-transparent',
    text:'primary',
    Size:'Corporate',
    Industry:'Telecommunications',
    img:"./assets/images/faces/15.jpg",
    Contact:'Michael',
    Deals:'368',
  },
  {
    logo:'./assets/images/company-logos/9.png',
    name:'Soylent Corp',
    Email:'soylentcorp678@gmail.com',
    phnNo:'1899-2993-0923',
    bg:'warning-transparent',
    text:'warning',
    Size:'Medium Size',
    Industry:' Manufacturing',
    img:"./assets/images/faces/1.jpg",
    Contact:'Olivia',
    Deals:'563',
  },
  {
    logo:'./assets/images/company-logos/10.png',
    name:'Umbrella Corporation',
    Email:'umbrellacorp289@gmail.com',
    phnNo:'1768-2332-4934',
    bg:'success-transparent',
    text:'success',
    Size:'Micro Business',
    Industry:' Healthcare',
    img:"./assets/images/faces/3.jpg",
    Contact:'Emily',
    Deals:'185',
  },
  {
    logo:'./assets/images/company-logos/2.png',
    name:'Hooli Technologies',
    Email:'hoolitech186@gmail.com',
    phnNo:'4788-7822-4786',
    bg:'light',
    text:'default',
    Size:'Startup',
    Industry:' Information Technology',
    img:"./assets/images/faces/9.jpg",
    Contact:'James',
    Deals:'240',
  },
]
@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgSelectModule],
  templateUrl: './companies.component.html',
  providers: [NgbOffcanvasConfig, NgbOffcanvas,NgbModalConfig, NgbModal],
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  Companies=DATA
  constructor(
		private modalService: NgbModal,
	) {
	
	}
  click(id:string){
    const data = this.Companies.filter((x: { Size: string }) => {
      return x.Size != id;
  
    })
    this.Companies = data;
}
private offcanvasService = inject(NgbOffcanvas);
isOpen: boolean = false;
open(content: any) {
  this.offcanvasService.open(content, { position: 'end', scroll: true });
  this.isOpen = !this.isOpen;
}
openModal(content1:any) {
  this.modalService.open(content1, { centered: true });
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

}
