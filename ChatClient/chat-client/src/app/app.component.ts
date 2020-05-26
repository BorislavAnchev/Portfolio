import { Component, OnInit, OnChanges } from "@angular/core";
import { IMessage } from "./models/message";
import { ChatService } from "./services/chat.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "chat-client";

  isLoggedIn = false;

  constructor(
    private _chatService: ChatService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = loggedIn;
      console.log(`loggedIn: ${loggedIn}`);
    });
  }

  login() {
    console.log("Component login() is called.");
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }
}
