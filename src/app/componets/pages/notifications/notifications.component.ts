import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {

}
