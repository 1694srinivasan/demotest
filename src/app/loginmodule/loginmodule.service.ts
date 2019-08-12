import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    isLoggedin = false;
    constructor() {   }

    setloggedin(val: any) {
        localStorage.setItem('login', val);
        window.location.reload();
    }
}
