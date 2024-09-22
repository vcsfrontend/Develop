import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-invoicedetails',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './invoicedetails.component.html',
  styleUrl: './invoicedetails.component.scss'
})
export class InvoicedetailsComponent {

}
