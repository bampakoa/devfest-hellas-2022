import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product> | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product$ = this.productService.getProduct(Number(id));
  }
}
