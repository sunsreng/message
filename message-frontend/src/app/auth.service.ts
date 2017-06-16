import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    BASE_URL = 'http://localhost:5000/auth';
    NAME_KEY = 'name';
    TOKEN_KEY = 'token';
    constructor(private http: Http, private router: Router) {}
    get name() {
        return localStorage.getItem(this.NAME_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    logIn(loginData) {
        this.http.post(this.BASE_URL +'/login', loginData).subscribe(res => {
            this.authenticate(res);
        })
    }

    register(user) {
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
            this.authenticate(res);
        });
    }
    logOut() {
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
    }
    authenticate(res) {
        var authResponse = res.json();
        if (!authResponse.token) return;
        localStorage.setItem(this.TOKEN_KEY, authResponse.token);
        localStorage.setItem(this.NAME_KEY, authResponse.firstName);
        this.router.navigate(['/']);
    }
}