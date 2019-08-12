import { Component, OnInit } from '@angular/core';
import { LoginService } from './loginmodule.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private loginservice: LoginService,
    private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loginservice.isLoggedin = true;
      this._router.navigate(['dashboard']);
    } else {
      this.loginservice.isLoggedin = false;
      this._router.navigate(['login']);
    }
  }

  login(email:any,password:any) {
    this.loginservice.loginfn(email,password).then((res) => {
			this.loginservice.isLoggedin = true;
			this._router.navigate(['dashboard']);
		})
  }


}