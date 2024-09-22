import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import * as PrismCode from '../../../shared/prismData/image_figures';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';

@Component({
  selector: 'app-images-figures',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent],
  templateUrl: './images-figures.component.html',
  styleUrl: './images-figures.component.scss'
})
export class ImagesFiguresComponent {

  prsimCodeData: any = PrismCode;
}
