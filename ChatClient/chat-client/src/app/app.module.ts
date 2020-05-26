import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SigninRedirectCallbackComponent } from "./signin-redirect-callback.component";
import { SignoutRedirectCallbackComponent } from "./signout-redirect-callback.component";
import { ChatComponent } from "./chat/chat.component";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "messages", component: ChatComponent },
      { path: "signin-callback", component: SigninRedirectCallbackComponent },
      { path: "signout-callback", component: SignoutRedirectCallbackComponent },
      { path: "", redirectTo: "messages", pathMatch: "full" },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
