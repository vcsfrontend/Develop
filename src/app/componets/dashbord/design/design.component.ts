import { Component,HostListener, OnInit,Renderer2,ElementRef,ViewChild  } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule,NgbModalConfig,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/carousel';
import { SwiperModule, } from 'swiper/angular';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
  SwiperOptions,
  Swiper,
  
 
} from 'swiper';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Mousewheel,
  Zoom,
  // Autoplay,
  Thumbs,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);
@Component({
  selector: 'app-design',
  standalone: true,
  imports: [SharedModule,NgbCarouselModule, ShowcodeCardComponent,SwiperModule,OverlayscrollbarsModule],
  providers: [NgbModalConfig, NgbModal],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {
  @ViewChild('fileNavigation', { static: false }) fileNavigationElement!: ElementRef 
  @ViewChild('fileFoldersElement', { static: false }) fileFoldersElement!: ElementRef 
  thumbsSwiper: any;
 setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  modal: any;
  openfile(content:any) {
		this.modalService.open(content,{ centered: true });
	}
  open(content1:any) {
		this.modalService.open(content1,{ centered: true });
	}
  closeResult!: string;

	constructor(private modalService: NgbModal) {}

 
	openWindowCustomClass(content: any) {
		this.modalService.open(content, { windowClass: 'dark-modal',centered: true });
	}
  openWindowCustomClass1(content1: any) {
		this.modalService.open(content1, { windowClass: 'dark-modal',centered: true });
	}

 
  removedetails1() {
    document.querySelector('.selected-file-details ')?.classList.remove('open');
  }
  
  removeclick(){
    document.querySelector('.file-manager-folders')?.classList.remove('open');
    document.querySelector('.file-manager-navigation')?.classList.remove('close');
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.myFileClick();
    this.detailsClick(); 
  }

  myFileClick() {
    const fileManagerFolders = document.querySelector('.file-manager-folders');
    const fileManagerNavigation = document.querySelector('.file-manager-navigation');

    if (window.innerWidth <= 992) {
      if (fileManagerFolders) {
        fileManagerFolders.classList.add('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.add('close');
      }
    } else {
      if (fileManagerFolders) {
        fileManagerFolders.classList.remove('open');
      }
      if (fileManagerNavigation) {
        fileManagerNavigation.classList.remove('close');
      }
    }
  }

  detailsClick() {
    const selectedFileDetails = document.querySelector('.selected-file-details');

    if (window.innerWidth <= 1180 && selectedFileDetails) {
      selectedFileDetails.classList.add('open');
    } else {
      // Close the details when the window width is greater than 992
      if (selectedFileDetails) {
        selectedFileDetails.classList.remove('open');
      }
  }
  }
 
  public swiperConfig:any = {
   
    breakpoints:{
      200:{
           slidesPerView: 1, 
          },
          500:{
            slidesPerView: 2, 
          },
          770:{
            slidesPerView: 3, 
          },
          1400:{
            slidesPerView: 4, 
          },
          1600:{
            slidesPerView: 5, 
          },
   }
  } 
  
  
}
