import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Constants } from '../constants';
import { AuthService } from './auth-service.component';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor { // 99% of this is by using a snippet generator. It adds headers to all the HTTP requests like in getProjects method in project.service.ts.
  constructor(private _authService: AuthService,
    private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(Constants.apiRoot)) { // Adds the access token only to the requests that are going to that API.
      return from(this._authService.getAccessToken().then(token => {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        const authReq = req.clone({ headers });
        return next.handle(authReq).pipe(tap(_ => { }, error => { // Supposedly passes it to the next handler (like with the middleware)
          var respError = error as HttpErrorResponse;
          if (respError && (respError.status === 401 || respError.status === 403)) {
            this._router.navigate(['/unauthorized']);
          }
        })).toPromise();
      }));
    }
    else {
      return next.handle(req);
    }
  }
}