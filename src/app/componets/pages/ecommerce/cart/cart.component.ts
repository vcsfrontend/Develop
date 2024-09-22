import { Component } from '@angular/core';

import swal from 'sweetalert';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/jpg/12.jpg" ,
    name:'Narichavo Branded Headphones',
    size:'Free',
    color:'Black',
    total:' $918',
     quantity:'2',
     status:false
  },
  {
   id:'2',
    img:"./assets/images/ecommerce/jpg/15.jpg" ,
    name:'Jam & Honey Teddy Bear, Cute, Soft Toy (33 Cm, brown, Cream)',
    size:'33 Cm',
    color:'Brown',
    total:' $129',
    quantity:'1',
    status:true

  },
  {
    id:'3',
    img:"./assets/images/ecommerce/jpg/9.jpg" ,
    name:'Fashion High-Top Lace-Up Slim Heels Sandals For Women',
    size:'9',
    color:'Light Gray',
    total:' $498',
    quantity:'2',
    status:false

  },
  {
    id:'4',
    img:"./assets/images/ecommerce/jpg/10.jpg" ,
    name:"Men's Cotton Blend Hooded Cardigan",
    size:'Medium',
    color:'Light Blue',
    total:' $498',
    quantity:'2',
    status:false

  },
  {
    id:'5',
    img:"./assets/images/ecommerce/jpg/13.jpg" ,
    name:'SPK Step Out 12 L Mini Backpack (Small Size, Yellow, Water Repellant)',
    size:'Small',
    color:'Yellow',
    total:'$1,299',
    quantity:'1',
    status:false

  }
]
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, FormsModule, RouterModule,NgbModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor() {}
  products = DATA;
  ConformAlert(id:string) {
    swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancel", "Yes,Delete it!"],
      })
      .then((willDelete: any) => {
        if (willDelete) {
         const data = this.products.filter((x: { id: string }) => x.id !== id);
         this.products = data;
          swal("Deleted!", "Your imaginary file has been deleted!", "success");
        }
        else {
         // User clicked "Cancel" or closed the alert
         swal("Cancelled", "Your item is safe :)", "info");
       }
      });
     
     }
  // Remove(id: any) {
  //   var Outputdata = this.products.filter((x) => {
  //     return x.id != id;
  //   });
  //   this.products = Outputdata;
  // }

  Clear = () => {
    this.products = [];
  };

 
  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--; 
      
    }
  }

  increaseQuantity(product: any) {
    product.quantity++; 

 
  }
}
