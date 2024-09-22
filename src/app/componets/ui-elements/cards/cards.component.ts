import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbDropdownModule,NgbAccordionModule,
  NgbCollapseModule, } from '@ng-bootstrap/ng-bootstrap';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule, NgbAccordionModule, FormsModule, ReactiveFormsModule, NgbCollapseModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  isCollapsed=false
  isCollapsed1=false

  toggleClass = 'card-fullscreen';
  public fullScreen: boolean = true;

  fullScreenToggle() {
    document
      .querySelector('.fullscreentoggle')
      ?.classList.toggle('card-fullscreen');
  }
}
