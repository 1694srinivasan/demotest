import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginmodule/loginmodule.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

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
    private toastr: ToastrService,
    private AmCharts: AmChartsService) { }

    

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loginservice.isLoggedin = true;
      this._router.navigate(['dashboard']);
      this.gettabledata();
      this.loadMap(this.loginservice.data);
      this.loadchart();
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

  loadchart(){
    const chart = this.AmCharts.makeChart( "chartdiv", {
      "type": "serial",
      "theme": "dark",
      "dataProvider": [ {
        "country": "USA",
        "visits": 2025
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }, {
        "country": "India",
        "visits": 984
      }, {
        "country": "Spain",
        "visits": 711
      }, {
        "country": "Netherlands",
        "visits": 665
      }, {
        "country": "Russia",
        "visits": 580
      }, {
        "country": "South Korea",
        "visits": 443
      }, {
        "country": "Canada",
        "visits": 441
      }, {
        "country": "Brazil",
        "visits": 395
      } ],
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      } ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      },
      "export": {
        "enabled": true
      }
    
    } );
  }

}
