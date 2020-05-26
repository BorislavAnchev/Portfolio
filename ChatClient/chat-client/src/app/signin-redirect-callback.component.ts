import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin-callback',
    template: `<div></div>`
})

export class SigninRedirectCallbackComponent implements OnInit {
    constructor(private _authService: AuthService, private _router: Router) { }

    ngOnInit() {
        console.log('signin-redirect-callback.component.ts ngOnInit is called.');
        this._authService.completeLogin().then(user => {
            this._router.navigate(['/messages'], { replaceUrl: true });
        });
    }
}