import { Component , OnInit } from '@angular/core';
import { LoginService } from './loginmodule/loginmodule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codebase';
  loggedin: any;

  constructor(private loginservice: LoginService,
    private _router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('login') === 'true') {
      this.loggedin = true;
      this._router.navigate(['charttypes']);
    } else {
      this.loggedin = false;
      this._router.navigate(['login']);
    }
  }

  logout() {
    localStorage.setItem('login', 'false');
    this.loggedin = false;
    this._router.navigate(['login']);
  }
}
