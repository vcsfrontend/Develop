import { Component, ElementRef, ViewChild } from '@angular/core';

import { SharedModule } from '../../../shared/common/sharedmodule';
import { SwiperModule, } from 'swiper/angular';
import { GalleryModule, Image } from '@ks89/angular-modal-gallery';
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

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Mousewheel,
  Zoom,
  Autoplay,
  Thumbs,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectFlip,
  EffectCoverflow,
]);
@Component({
  selector: 'app-swiper-js',
  standalone: true,
  imports: [SharedModule, SwiperModule, FormsModule, GalleryModule],
  templateUrl: './swiper-js.component.html',
  styleUrl: './swiper-js.component.scss'
})
export class SwiperJsComponent {
  thumbsSwiper: any;

  pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  ngAfterViewInit() {
    this.initSwipers();
  }
  
  private initSwipers(): void {
      const galleryThumbs = new Swiper('.swiper-view', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
    }

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }

  swiperOptions: SwiperOptions = {
    slidesPerView: 1,
    autoplay: { delay: 3000 },
 
  };
  swiperOptions1: SwiperOptions = {
    slidesPerView: 1,
    zoom: true,
    autoplay: { delay: 100},
    navigation: true,
    watchSlidesProgress: true,
    loop:true
  };

  imageData = [
    { src: "./assets/images/media/media-1.jpg" },
    { src: "./assets/images/media/media-2.jpg" },
    { src: "./assets/images/media/media-3.jpg" },
    { src: "./assets/images/media/media-6.jpg" },
    { src: "./assets/images/media/media-7.jpg" },
    { src: "./assets/images/media/media-10.jpg" },
    { src: "./assets/images/media/media-11.jpg" },
  ];
  images = [
    {
      src: './assets/images/media/media-27.jpg',
    },
    {
      src: './assets/images/media/media-26.jpg',
    },
    {
      src: './assets/images/media/media-25.jpg',
    },
   
  ];
  imageData1 = [
    {
      src: './assets/images/media/media-29.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
  ];
  imageData2 = [
    {
      src: './assets/images/media/media-32.jpg',
    },
    {
      src: './assets/images/media/media-31.jpg',
    },
    {
      src: './assets/images/media/media-33.jpg',
    },
  ];
  imageData3 = [
    {
      src: './assets/images/media/media-21.jpg',
    },
    {
      src: './assets/images/media/media-17.jpg',
    },
    {
      src: './assets/images/media/media-16.jpg',
    },
  ];
  imageData4 = [
    {
      src: './assets/images/media/media-12.jpg',
    },
    {
      src: './assets/images/media/media-8.jpg',
    },
    {
      src: './assets/images/media/media-5.jpg',
    },
  
  ];
  imageData5 = [
    {
      src: './assets/images/media/media-16.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
    {
      src: './assets/images/media/media-31.jpg',
    },

  ];
  imageData6 = [
    {
      src: './assets/images/media/media-25.jpg',
    },
    {
      src: './assets/images/media/media-5.jpg',
    },
    {
      src: './assets/images/media/media-33.jpg',
    },
   
  ];
  imageData0 = [
    {
      src: './assets/images/media/media-30.jpg',
    },
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-29.jpg',
    },
   
  ];
  imageData7 = [
    {
      src: './assets/images/media/media-8.jpg',
    },
    {
      src: './assets/images/media/media-32.jpg',
    },
    {
      src: './assets/images/media/media-7.jpg',
    },
 
  ];
  imageData8 = [
    {
      src: './assets/images/media/media-28.jpg',
    },
    {
      src: './assets/images/media/media-30.jpg',
    },
    {
      src: './assets/images/media/media-32.jpg',
    },
    
  ];
  imageData9 = [
    {
      src: './assets/images/media/media-31.jpg',
    },
    {
      src: './assets/images/media/media-12.jpg',
    },
    {
      src: './assets/images/media/media-8.jpg',
    },
  ]
  dotsConfig!: false;

  imagesRect: Image[] = [

    new Image( 0, { img: './assets/images/media/media-1.jpg', },
      { img: './assets/images/media/media-1.jpg',
    }
    ),
    new Image(1, { img: './assets/images/media/media-2.jpg' }),
    new Image(
      2,
      {
        img: './assets/images/media/media-3.jpg',
       
      },
      {
        img: './assets/images/media/media-3.jpg',
     
      }
    ),
    new Image(
      3,
      {
        img: './assets/images/media/media-6.jpg',
       
      },
      { img: './assets/images/media/media-6.jpg',
      }
    ),
    new Image(
      4,
      {
        img: './assets/images/media/media-7.jpg',
       
      },
      { img: './assets/images/media/media-7.jpg',
      }
    ),
    new Image(
      5,
      {
        img: './assets/images/media/media-10.jpg',
       
      },
      { img: './assets/images/media/media-10.jpg',
      }
    ),
   
  ];
}
