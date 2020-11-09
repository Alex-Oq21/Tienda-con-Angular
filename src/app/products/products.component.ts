import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/imagen1.jpg',
      title: 'Chaqueta',
      price:  80000,
      description: ''
    },
    {
      id: '2',
      image: 'assets/images/imagen2.jpg',
      title: 'Conjunto',
      price: 80000,
      description: ''
    },
    {
      id: '3',
      image: 'assets/images/imagen3.jpg',
      title: 'Conjunto',
      price: 80000,
      description: ''
    },
    {
      id: '4',
      image: 'assets/images/imagen4.jpg',
      title: 'Camisa blanca',
      price: 80000,
      description: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
}
