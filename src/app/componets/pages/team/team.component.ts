import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
