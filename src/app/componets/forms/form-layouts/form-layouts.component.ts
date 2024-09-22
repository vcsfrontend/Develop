import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../../shared/common/includes/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/prismData/forms/form_layouts'

@Component({
  selector: 'app-form-layouts',
  standalone: true,
  imports: [SharedModule, ShowcodeCardComponent],
  templateUrl: './form-layouts.component.html',
  styleUrl: './form-layouts.component.scss'
})
export class FormLayoutsComponent {
  prismCode = prismCodeData;

}
