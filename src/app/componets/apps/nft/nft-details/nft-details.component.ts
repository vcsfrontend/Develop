import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { GalleryModule, Image } from '@ks89/angular-modal-gallery';
@Component({
  selector: 'app-nft-details',
  standalone: true,
  imports: [SharedModule,GalleryModule],
  templateUrl: './nft-details.component.html',
  styleUrl: './nft-details.component.scss'
})
export class NftDetailsComponent {
  dotsConfig!: false;

  imagesRect: Image[] = [

    new Image( 0, { img: './assets/images/nft-images/32.png', },
      { img: './assets/images/nft-images/32.png',
    }
    ),
    new Image(1, { img: './assets/images/nft-images/31.png' }),
    new Image(
      2,
      {
        img: './assets/images/nft-images/30.png',
       
      },
      {
        img: './assets/images/nft-images/30.png',
     
      }
    ),
    new Image(
      3,
      {
        img: './assets/images/nft-images/33.png',
       
      },
      { img: './assets/images/nft-images/33.png',
      }
    ),
   
  ];
}
