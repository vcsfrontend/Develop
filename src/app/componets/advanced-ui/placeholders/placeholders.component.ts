import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/advancedUi/placeholder'

@Component({
  selector: 'app-placeholders',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent],
  templateUrl: './placeholders.component.html',
  styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {
  prismCode = prismCodeData;

}
