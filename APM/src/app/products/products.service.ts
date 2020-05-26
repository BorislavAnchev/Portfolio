import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"; // For HTTP
import { Observable, throwError } from "rxjs"; // For HTTP
import { catchError, tap, map } from "rxjs/operators"; // For HTTP

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productUrl = 'api/products/products.json';
    // private productUrl = 'http://localhost:44376/messages';

    constructor(private http: HttpClient) {} // Dep injection

    getProducts(): Observable<IProduct[]> { // Exposing it like an API endpoint
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All:' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct | undefined> { // Exposing it like an API endpoint
        return this.getProducts().pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
        );
    }

    private handleError(err: HttpErrorResponse) { // To handle the errors with catchError in getProducts()
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.status}, error message is: ${err.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}