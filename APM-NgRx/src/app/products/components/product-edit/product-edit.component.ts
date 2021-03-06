import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Product } from "../../product";

@Component({
  selector: "pm-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
})
export class ProductEditComponent implements OnInit, OnChanges, OnDestroy {
  pageTitle = "Product Edit";
  @Input() errorMessage: string;
  @Input() selectedProduct: Product;
  @Output() create = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();
  @Output() clearCurrent = new EventEmitter<void>();

  componentActive = true;
  productForm: FormGroup;

  product: Product | null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Define the form group
    this.productForm = this.fb.group({
      productName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      productCode: ["", Validators.required],
      starRating: [""],
      description: "",
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // patch form with value from the store
    if (changes.selectedProduct) {
      const product: any = changes.selectedProduct.currentValue as Product;
      this.displayProduct(product);
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  displayProduct(product: Product | null): void {
    // Set the local product property
    this.product = product;

    if (this.product) {
      // Reset the form back to pristine
      this.productForm.reset();

      // Display the appropriate page title
      if (this.product.id === 0) {
        this.pageTitle = "Add Product";
      } else {
        this.pageTitle = `Edit Product: ${this.product.productName}`;
      }

      // Update the data on the form
      this.productForm.patchValue({
        productName: this.product.productName,
        productCode: this.product.productCode,
        starRating: this.product.starRating,
        description: this.product.description,
      });
    }
  }

  cancelEdit(): void {
    // Redisplay the currently selected product
    // replacing any edits made
    this.displayProduct(this.product);
  }

  deleteProduct(): void {
    if (this.product && this.product.id) {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.delete.emit(this.product);
      }
    } else {
      // No need to delete, it was never saved
      this.clearCurrent.emit();
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === 0) {
          this.create.emit(p);
        } else {
          this.update.emit(p);
        }
      }
    } else {
      this.errorMessage = "Please correct the validation errors.";
    }
  }
}
