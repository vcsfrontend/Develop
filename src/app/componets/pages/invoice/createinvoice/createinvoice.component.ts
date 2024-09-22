import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
@Component({
  selector: 'app-createinvoice',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,FlatpickrModule],
  providers:[FlatpickrDefaults],
  templateUrl: './createinvoice.component.html',
  styleUrl: './createinvoice.component.scss'
})
export class CreateinvoiceComponent {
  quantity: number = 1;
  product: number = 1;
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  increase() {
    this.product++;
  }

  decrease() {
    if (this.product >0) {
      this.product--;
    }
  }
}
