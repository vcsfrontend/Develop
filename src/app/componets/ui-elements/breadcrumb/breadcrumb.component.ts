import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import * as PrismCode from '../../../shared/prismData/breadcrumb';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule,ShowcodeCardComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  prsimCodeData: any = PrismCode;
}
