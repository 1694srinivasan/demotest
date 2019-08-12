import { Component , OnInit } from '@angular/core';
import { LoginService } from './loginmodule/loginmodule.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoading : boolean = false;
  title = 'codebase';
  crntusername:any;

  constructor(private loginservice: LoginService,
    private _router: Router,
    private loading: LoadingService) {

  }

  ngOnInit() {
    this.loading.stateChange.subscribe(value => setTimeout(() => this.showLoading = value))
    if (localStorage.getItem('token')) {
      this.loginservice.isLoggedin = true;
      this._router.navigate(['dashboard']);
      this.crntusername = localStorage.getItem('username')
    } else {
      this.loginservice.isLoggedin = false;
      this._router.navigate(['login']);
    }
  }

  logout() {
    this.loginservice.logoutfn().then((res)=>{
      this.loginservice.isLoggedin = false; 
        this._router.navigate(['login']);
    }) 
  }
}