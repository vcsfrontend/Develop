import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbDropdownModule ,NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
const DATA=[
  {
    img:"./assets/images/faces/4.jpg",
    name:'Emily',
    Email:'Emily2981@gmail.com',
    logo:'./assets/images/company-logos/1.png',
    company:'Spruko Technologies',
    phnNo:'1678-28993-223',
    Status:'New',
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
    Status:'Follow-up',
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
    Status:'Closed',
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
    Status:'Contacted',
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
    Status:'New',
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
    Status:'Follow-up',
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
    Status:'Closed',
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
    Email:'Emma678@gmail.com',
    Status:'Disqualified',
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
    Status:'Qualified',
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
    Status:'Contacted',
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
  selector: 'app-leads',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgSelectModule ],
  templateUrl: './leads.component.html',
  providers: [NgbModalConfig,NgbModal],
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {
  constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {

	}
  Leads=DATA
  click(id:string){
    const data = this.Leads.filter((x: { Source: string }) => {
      return x.Source != id;
  
    })
    this.Leads = data;
}
openModal(content1:any) {
  this.modalService.open(content1,{ centered: true });
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
