import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismcodeData from '../../../shared/prismData/progress';
@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
prismCode = prismcodeData;
}
