import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import {NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
const DATA=[
  {  
   
    img:"./assets/images/ecommerce/jpg/15.jpg" ,
    name:'Jam & Honey Teddy Bear, Cute, Soft Toy (33 Cm, brown, Cream)',
    Size:'33mm',
    Color:'Brown',
    Id:'SPK1218153635',
    Price:1249,
    Quantity:1, 
    empty:true,
    offer:false
  },
  {  
   
    img:"./assets/images/ecommerce/jpg/9.jpg" ,
    name:'Fashion High-Top Lace-Up Slim Heels Sandals For Women',
    Size:'9',
    Color:'Light Gray',
    Id:'SPK3789423789',
    Price:499,
    Quantity:2, 
    empty:false,
    offer:true
  },
  {  
  
    img:"./assets/images/ecommerce/jpg/13.jpg" ,
    name:'   SPK Step Out 12 L Mini Backpack (Small Size, Yellow, Water Repellant)',
    Size:'Small',
    Color:'Yellow',
    Id:'SPK1120324532',
    Price:799,
    Quantity:1, 
    empty:false,
    offer:false
  },
]
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [SharedModule,NgbAccordionModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  OrderDetails=DATA
  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;

}
}
