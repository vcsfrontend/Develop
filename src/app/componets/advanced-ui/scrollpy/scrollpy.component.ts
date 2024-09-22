import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbScrollSpyModule ,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/scrollspy'

@Component({
  selector: 'app-scrollpy',
  standalone: true,
  imports: [SharedModule,NgbScrollSpyModule,FormsModule,RouterLink,NgbDropdownModule, ShowcodeCardComponent],
  templateUrl: './scrollpy.component.html',
  styleUrl: './scrollpy.component.scss'
})
export class ScrollpyComponent {
  prismCode = prismCodeData;

}
