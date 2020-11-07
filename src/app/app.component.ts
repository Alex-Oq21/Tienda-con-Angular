import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tienda';
  items = ['Nicolas', 'Alexis', 'El perez'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/imagen1.jpg',
      title: 'Chaqueta',
      price: 80000,
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

  addItems(){
    this.items.push('nuevo item');
  }

  deleteItems(index: number){
    this.items.splice(index, 1);
  }
}
