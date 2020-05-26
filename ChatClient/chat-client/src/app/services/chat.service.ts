import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError, from } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IMessage } from "../models/message";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: "root" })
export class ChatService {
  private endpointUrl = "https://localhost:44376/messages";

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService
  ) {}

  getMessages(): Observable<IMessage[]> {
    return from(
      this._authService.getAccessToken().then((token) => {
        const headers = new HttpHeaders().set(
          "Authorization",
          `Bearer ${token}`
        );
        return this._httpClient
          .get<IMessage[]>(this.endpointUrl, { headers: headers })
          .toPromise();
      })
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.status}, error message is: ${err.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  sendMessage(message: IMessage): Observable<IMessage> {
    return from(
      this._authService.getAccessToken().then((token) => {
        const headers = new HttpHeaders().set(
          "Authorization",
          `Bearer ${token}`
        );
        return this._httpClient
          .post<IMessage>(this.endpointUrl, message, { headers: headers })
          .pipe(
            tap((data) =>
              console.log(
                `Message in the service POST method: ${JSON.stringify(data)}`
              )
            ),
            catchError(this.handleError)
          )
          .toPromise();
      })
    );
  }
}
