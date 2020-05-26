import { Component, OnInit } from '@angular/core';3
import { IProduct } from "./product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from './products.service';

@Component({
  // selector: 'pm-product-detail', Not needed when not going to be nested component.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err.message
    })
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
