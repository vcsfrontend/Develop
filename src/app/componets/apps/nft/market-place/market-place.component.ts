import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbDropdownModule ,NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-market-place',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule,NgbNavModule ],
  templateUrl: './market-place.component.html',
  styleUrl: './market-place.component.scss'
})
export class MarketPlaceComponent {

}
