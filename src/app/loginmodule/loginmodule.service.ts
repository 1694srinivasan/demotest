import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ConfigService} from '../config.service';
import {LoadingService} from '../loading.service';
import { RouterModule, Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginService {
    isLoggedin: boolean;
	token: any;
	private _user: any = {
	        displayName: '',
	        email:'',
	        is_admin:'',
	        token:'',
	        user_id:'' ,
	        master:''
        }

        
    private LoginURL: string = this.configservice.get("API_URL");
    private getmetricadatalist: string = this.configservice.get("API_URL") + 'getmetricadata';
    private getdropdownlist: string = this.configservice.get("API_URL") + 'dropdownlist';
    private addmetrictolist: string = this.configservice.get("API_URL") + 'addmetricadata';
    private updatemetrictolist: string = this.configservice.get("API_URL") + 'updatemetricadata';
    private deletemetrictolist: string = this.configservice.get("API_URL") + 'deletemetricadata';


    constructor(private _http: HttpClient , private configservice: ConfigService,private loadingService: LoadingService , private _router:Router, private toastr: ToastrService) {   }

    loginfn(email:any,password:any){
		this.isLoggedin = false;
		this.loadingService.showLoading();
		var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
		var creds = 'email_id=' + email + '&' +'password=' + password;
		return new Promise((resolve) => {
		this._http.post(this.LoginURL+'login',creds,{headers : headers})
		.subscribe(
			 data => {
				this.loadingService.hideLoading();
				this.isLoggedin = true;
                localStorage.setItem('token',data['user'].token)
                localStorage.setItem('username',data['user'].username)
                localStorage.setItem('user_id',data['user'].user_id)
                localStorage.setItem('email',data['user'].email)
                localStorage.setItem('is_admin',data['user'].is_admin)
				    window.location.reload();
		    		resolve(this.isLoggedin)
			},
			err => {
                this.loadingService.hideLoading();
                this.toastr.error( err.error['message'] ,'Hey There' )
			});
		})
	}

	logoutfn(){
		this.loadingService.showLoading();
		var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
		var user_id = localStorage.getItem('user_id')
        var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization' : '{"name":"' + username + '","token": "' + token + '"}'});
        var creds = 'user_id=' + user_id;
		return new Promise((resolve) => {
		this._http.post(this.LoginURL+'logout',creds,{headers : headers})
        .subscribe(
			 data => {
			 	this.loadingService.hideLoading();
			 	localStorage.removeItem('token')
                localStorage.removeItem('username')
                localStorage.removeItem('user_id')
                localStorage.removeItem('email')
                localStorage.removeItem('is_admin')
                this.isLoggedin = false;
                window.location.reload();
                resolve(this.isLoggedin)
			},
			err => {
				this.loadingService.hideLoading();
                this.toastr.error( err.error['message'] ,'Hey There' )
			});
		})
    }
    
    getmetricadatalistgeneral(){
		this.loadingService.showLoading();
        var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
        var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization' : '{"name":"' + username + '","token": "' + token + '"}'});
        return new Promise((resolve) => {     
            this._http.get(this.getmetricadatalist,{headers : headers})
            .subscribe(
                data => {
                        this.loadingService.hideLoading();
                        resolve(data)
                    },
                err => {
                        this.loadingService.hideLoading();
                        this.toastr.error( err.error['message'] ,'Hey There' )
                    }
            )         
        });
    }
    
    getdropdownlistgeneral() {
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
        var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization' : '{"name":"' + username + '","token": "' + token + '"}'});
        return new Promise((resolve) => {     
            this._http.get(this.getdropdownlist,{headers : headers})
            .subscribe(
                data => {
                        this.loadingService.hideLoading();
                        resolve(data)
                    },
                err => {
                        this.loadingService.hideLoading();
                        this.toastr.error( err.error['message'] ,'Hey There' )
                    }
            )         
        });
    }

    addmetric(metricform:any){
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
        var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization' : '{"name":"' + username + '","token": "' + token + '"}'});
        var creds = 'met_name=' + metricform.servername + '&' +'cpus=' + metricform.cpuid + '&' + 'memory=' + metricform.memoryid + '&' +'storage=' + metricform.storageid + '&' +'ipaddress=' + metricform.ipaddress + '&' + 'network=' + metricform.networkid + '&' +'location=' + metricform.location;
		return new Promise((resolve) => {
		this._http.post(this.addmetrictolist,creds,{headers : headers})
		.subscribe(
			 data => {
                this.loadingService.hideLoading();
                this.toastr.success(data['message'],'Hey There' )
                resolve(data)
			},
			err => {
                this.loadingService.hideLoading();
                this.toastr.error( err.error['message'] ,'Hey There' )
			});
		})

    }


    updatemetric(metricform:any){
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
        var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization' : '{"name":"' + username + '","token": "' + token + '"}'});
        var creds = 'met_name=' + metricform.servername + '&' +'cpus=' + metricform.cpuid + '&' + 'memory=' + metricform.memoryid + '&' +'storage=' + metricform.storageid + '&' +'ipaddress=' + metricform.ipaddress + '&' + 'network=' + metricform.networkid + '&' +'location=' + metricform.location + '&' + 'met_id=' + metricform.metricid;
		return new Promise((resolve) => {
		this._http.put(this.updatemetrictolist,creds,{headers : headers})
		.subscribe(
			 data => {
                this.loadingService.hideLoading();
                this.toastr.success(data['message'],'Hey There' )
                resolve(data)
			},
			err => {
                this.loadingService.hideLoading();
                this.toastr.error( err.error['message'] ,'Hey There' )
			});
		})

    }

    deletemetric(met_id:any){
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
		var username = localStorage.getItem('username');
        var headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded' ,'Authorization' : '{"name":"' + username + '","token": "' + token + '"}'});
        var creds = 'met_id=' + met_id;
		return new Promise((resolve) => {
		this._http.post(this.deletemetrictolist,creds,{headers : headers})
		.subscribe(
			 data => {
                this.loadingService.hideLoading();
                this.toastr.error(data['message'],'Hey There' )
                resolve(data)
			},
			err => {
                this.loadingService.hideLoading();
                this.toastr.error( err.error['message'] ,'Hey There' )
			});
		})

    }

}
