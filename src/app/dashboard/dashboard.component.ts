import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginmodule/loginmodule.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabledata:any[] =[];
  lat = 13.0827;
  lng = 80.2707;

  constructor(private loginservice: LoginService,
    private _router: Router,
    private toastr: ToastrService) { }

    

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loginservice.isLoggedin = true;
      this._router.navigate(['dashboard']);
      this.gettabledata();
      this.loadMap(this.loginservice.data)
    } else {
      this.loginservice.isLoggedin = false;
      this._router.navigate(['login']);
    }
  }

  gettabledata(){
    this.tabledata = this.loginservice.data
  }

  loadMap(data:any) {
    this.lat = data.lat | this.lat;
    this.lng = data.lng | this.lng;
  }

}
