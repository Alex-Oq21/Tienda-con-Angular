import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../product.model';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>('ponerAPIaqui');
  }
  getProduct(id: string) {
    return this.http.get<Product>(`ponerAPIaqui/{id}`);
  }
}
