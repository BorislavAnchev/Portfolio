import { Component, OnInit } from "@angular/core";
import { IMessage } from "../models/message";
import { ChatService } from "../services/chat.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-chat",
  templateUrl: "chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  messages: IMessage[];
  errorMessage: string;
  message: string = "";
  nickname: string = "Anonymous";
  isLoggedIn = false;

  constructor(
    private _chatService: ChatService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._authService.isLoggedIn().then((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this._chatService.getMessages().subscribe({
      next: (messages) => {
        this.messages = messages;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  sendMessage(): void {
    var messageObject: IMessage = {
      sender: this.nickname,
      content: this.message,
      timeLog: new Date(),
    };

    this._chatService.sendMessage(messageObject).subscribe({
      next: (message) => {
        this.messages = [...this.messages, message];
        console.log(`The message from the server response: ${message}`);
      },
    });
  }
}
