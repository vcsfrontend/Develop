import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const DATA=[
  {
    
    img:"./assets/images/ecommerce/jpg/1.jpg" ,
    name:'Odemi A2 (Sea Green, 2GB RAM, 64GB Storage)',
    Price:'$1,299',
    idname:'#SPK-1203',
    deliverdby:true,
    deliverd:false,
    date:'13-12-2023',
    Status:true,
    Confirmed:false,
    time:'',
    Shipping:true,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/2.jpg" ,
    name:'Bluetooth Wireless Headphone (aura)',
    Price:'$499',
    idname:'#SPK-2936',
    deliverdby:true,
    deliverd:false,
    date:'25-11-2023',
    Status:false,
    Confirmed:true,
    Shipping:true,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/3.jpg" ,
    name:'Theme Wall Clock (20.5 cm x 20.5 cm x 3.5 cm)',
    Price:'$1,899',
    idname:'#SPK-1855',
    deliverdby:false,
    deliverd:true,
    Status:false,
    Confirmed:false,
    on:'Delivered on: ',
    time:'29,Oct 2023 - 12:47PM',
    Shipping:false,
    rating:true
  },
  {
    
    img:"./assets/images/ecommerce/jpg/4.jpg" ,
    name:'xenon Instax Mini 12 Instant Camera-Orange',
    Price:'$2,499',
    idname:'#SPK-1234',
    deliverdby:false,
    deliverd:false,
    Status:false,
    Confirmed:false,
    Shipping:false,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/5.jpg" ,
    name:'Smart Watch with Bluetooth Calling, AI',
    Price:'$249',
    idname:'#SPK-1645',
    deliverdby:false,
    deliverd:true,
    date:'',
    Status:false,
    Confirmed:false,
    on:'Delivered on:',
    time:'4,Nov 2023 - 10:24AM',
    Shipping:false,
    rating:true
  },
  {
    
    img:"./assets/images/ecommerce/jpg/6.jpg" ,
    name:'Pufa Red Casual Sneaker High-Neck Shoes',
    Price:'$2,399',
    idname:'#SPK-1346',
    deliverdby:true,
    deliverd:false,
    date:'16-01-2024',
    Status:true,
    Confirmed:false,
    Shipping:true,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/7.jpg" ,
    name:'Single Seater Premium Wing Back Cushioned',
    Price:'$499',
    idname:'#SPK-2936',
    deliverdby:false,
    deliverd:false,
    date:'19-12-2023',
    Status:false,
    stock:true,
    Confirmed:false,
    Shipping:true,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/8.jpg" ,
    name:'Fiber Reinforced Plastic Pot, Blue, 1 Piece',
    Price:'$499',
    idname:'#SPK-1376',
    deliverdby:true,
    deliverd:false,
    date:'24-12-2023',
    Status:true,
    Confirmed:false,
    Shipping:true,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/9.jpg" ,
    name:'Fashion High-Top Lace-Up Slim Heels Sandals',
    Price:'$499',
    idname:'#SPK-2903',
    deliverdby:true,
    deliverd:false,
    date:'16-11-2023',
    Status:false,
    Confirmed:true,
    Shipping:true,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/10.jpg" ,
    name:'Mens Cotton Blend Hooded Cardigan',
    Price:'$1,899',
    idname:'#SPK-1976',
    deliverdby:false,
    deliverd:true,
    Status:false,
    Confirmed:false,
    on:'Delivered on :',
    time:'4,Nov 2023 - 10:24AM',
    Shipping:false,
    rating:true
  },
  {
    
    img:"./assets/images/ecommerce/jpg/13.jpg" ,
    name:'SPK 12 L Mini Backpack (Small Size, Yellow)',
    Price:'$799',
    idname:'#SPK-8765',
    deliverdby:false,
    deliverd:false,
    Status:false,
    Confirmed:false,
    Shipping:false,
    rating:false
  },
  {
    
    img:"./assets/images/ecommerce/jpg/12.jpg" ,
    name:'Narichavo Branded Headphones',
    Price:'$249',
    idname:'#SPK-1645',
    deliverdby:false,
    deliverd:true,
    Status:false,
    Confirmed:false,
    on:'Delivered on:',
    time:'22,Oct 2023 - 05:15PM',
    Shipping:false,
    rating:true
  },
]

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [SharedModule,NgbDropdownModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders=DATA
}
