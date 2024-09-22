import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismcode from '../../../shared/prismData/objectfit';
@Component({
  selector: 'app-object-fit',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent, ],
  templateUrl: './object-fit.component.html',
  styleUrl: './object-fit.component.scss'
})
export class ObjectFitComponent {
 prsimCodeData = prismcode;
}
