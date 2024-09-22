import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

}
