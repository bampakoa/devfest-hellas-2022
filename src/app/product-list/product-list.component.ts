import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
