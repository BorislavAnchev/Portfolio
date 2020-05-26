import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthService } from './auth-service.component';
import { AccountService } from './account.service';
import { ProjectService } from './project.service';
import { AdminRouteGuard } from './admin-route-guard';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        AuthService, // All of those below were using { providedIn: CoreModule} way of injecting, but since the interceptor is added here, they also need to be added the same way.
        AccountService,
        ProjectService,
        AdminRouteGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } // This hooks up our HTTP interceptor.
    ],
})
export class CoreModule { }
