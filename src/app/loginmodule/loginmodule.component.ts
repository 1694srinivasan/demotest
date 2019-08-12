import { Component, OnInit } from '@angular/core';
import { LoginService } from './loginmodule.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.scss']
})
export class LoginmoduleComponent implements OnInit {
  localUser = {
    emailid: '',
    password: ''
  };
  loggedin: boolean;

  constructor(private loginservice: LoginService,
    private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('login') === 'true') {
      this.loggedin = true;
      this._router.navigate(['charttypes']);
    } else {
      this.loggedin = false;
      this._router.navigate(['login']);
    }
  }

  login() {
    if (this.localUser.emailid === 'demo@example.com' && this.localUser.password === 'demodemo') {
      // tslint:disable-next-line: prefer-const
      let a = true;
      this.loginservice.setloggedin(a);
      this._router.navigate(['charttypes']);
    } else {
      alert('Credentials is worng');
      // tslint:disable-next-line: prefer-const
      let a = false;
      this.loginservice.setloggedin(a);
      this._router.navigate(['login']);
    }
  }

}
