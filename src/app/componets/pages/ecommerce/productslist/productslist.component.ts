import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
const DATA=[
  {
    id:'1',
    img:"./assets/images/ecommerce/png/1.png" ,
    product:'Yellow sling bag',
    category:'Clothing',
    price:'$1,299',
    stock:'283',
    gender:'Male',
    seller:'Apilla.co.in',
    date:'24,Nov 2023 - 04:42PM',
  },
  {
    id:'2',
    img:"./assets/images/ecommerce/png/2.png" ,
    product:'Nikka brown leather handbag',
    category:'Clothing',
    price:'$799',
    stock:'98',
    gender:'Male',
    seller:'Donzo Company',
    date:'18,Nov 2023 - 06:53AM',
  },
  {
    id:'3',
    img:"./assets/images/ecommerce/png/15.png" ,
    product:' Orange Smart Watch',
    category:'Watches',
    price:'$349',
    stock:'1,293',
    gender:'Male,Female',
    seller:'SlowTrack Company',
    date:'21,Oct 2023 - 11:36AM',
  },
  {
    id:'4',
    img:"./assets/images/ecommerce/png/3.png" ,
    product:' Beige color sling bag',
    category:'Clothing',
    price:'$189',
    stock:'322',
    gender:'Female',
    seller:'WoodHill.co.in',
    date:'16,Oct 2023 - 12:45AM',
  },
  {
    id:'5',
    img:"./assets/images/ecommerce/png/4.png" ,
    product:'Pink fancy bag for women',
    category:'Clothing',
    price:'$2,499',
    stock:'194',
    gender:'Male,Female',
    seller:'Watches.co.in',
    date:'12,Aug 2023 - 11:21AM',
  },
  {
    id:'6',
    img:"./assets/images/ecommerce/png/13.png" ,
    product:'Orange Watch series (44mm)',
    category:'Watches',
    price:'$899',
    stock:'267',
    gender:'Male,Female',
    seller:'Watches.co.in',
    date:'05,Sep 2023 - 10:14AM',
  },
  {
    id:'7',
    img:"./assets/images/ecommerce/png/12.png" ,
    product:'Sweater For Women',
    category:'Clothing',
    price:'$499',
    stock:'143',
    gender:'Female',
    seller:'Louie Philippe',
    date:'18,Nov 2023 - 14:35PM',
  },
  {
    id:'8',
    img:"./assets/images/ecommerce/png/16.png" ,
    product:'Ikonic Smart Watch(40mm)',
    category:'Watches',
    price:'$999',
    stock:'365',
    gender:'Female',
    seller:'Kohino.zaps.com',
    date:'27,Nov 2023 - 05:12AM',
  },
  {
    id:'9',
    img:"./assets/images/ecommerce/png/23.png" ,
    product:'Apple Watch Series 5',
    category:'Watches',
    price:'$1,499',
    stock:'257',
    gender:'Male,Female',
    seller:'Apple Corporation',
    date:'29,Nov 2023 - 16:32PM',
  },

]
@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [SharedModule,RouterModule],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.scss'
})
export class ProductslistComponent {
  lists=DATA

  Remove(id: any) {
    var Outputdata = this.lists.filter((x) => {
      return x.id != id;
    });
    this.lists = Outputdata;
  }

  Clear = () => {
    this.lists = [];
  };
}
