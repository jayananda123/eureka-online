import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styles: ['input.ng-invalid.ng-touched { border: 2px solid rgb(247, 60, 60); } a{cursor: pointer;}']
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    isError = false;
    isSuccess = false;

    constructor(private authService: AuthService, private router: Router) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onForgotten() {

    }

    onClickSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);

        } else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(() => {
            this.isLoading = false;
            this.router.navigate(['/admin']);
        }, errorMessage => {
            this.isError = true;
            this.error = errorMessage;
            this.isLoading = false;
        }
        );

        form.reset();
    }
}