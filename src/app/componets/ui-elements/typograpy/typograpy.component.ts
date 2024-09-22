import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismcodeData from '../../../shared/prismData/typography';

@Component({
  selector: 'app-typograpy',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent],
  templateUrl: './typograpy.component.html',
  styleUrl: './typograpy.component.scss'
})
export class TypograpyComponent {
  prismCode = prismcodeData;

}
