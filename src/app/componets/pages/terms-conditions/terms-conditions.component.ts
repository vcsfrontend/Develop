import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [SharedModule, OverlayscrollbarsModule],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {

}
