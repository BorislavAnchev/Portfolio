import { BrowserModule } from '@angular/platform-browser'; // Allows the usage of *ngIf and *nfFor.
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // For the two-way binding. Added in product.module.ts
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from "@angular/router";
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule, // This enables two-way binding. I.e. allows the usage of the said module in the delared modules.
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent] // Set up which component to 'boot' on startup.
})
export class AppModule { }
