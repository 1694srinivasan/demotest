import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginmodule/loginmodule.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
declare var jQuery:any;
var dt = require( 'datatables.net' );


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabledata:any[] =[];
  cpu_list:any[]= [];
  memory_list:any[]=[];
  storage_list:any[]=[];
  network_list:any[]=[];
  metricform = {
    servername: '',
    cpuid: '',
    memoryid:'',
    storageid:'',
    ipaddress:'',
    networkid:'',
    location:'',
    metricid:''
  };

  constructor(private loginservice: LoginService,
    private _router: Router,
    private toastr: ToastrService,
    private AmCharts: AmChartsService) { }

    

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loginservice.isLoggedin = true;
      this._router.navigate(['dashboard']);
      this.gettabledata();
      this.getdropdowndata();
      // this.loadMap();
      this.loadchart();
      this.metricform.cpuid = null;
      this.metricform.memoryid = null;
      this.metricform.storageid = null;
      this.metricform.networkid = null;
    } else {
      this.loginservice.isLoggedin = false;
      this._router.navigate(['login']);
    }
  }

  gettabledata() {
    this.loginservice.getmetricadatalistgeneral().then(res=>{
      var data = JSON.parse(JSON.stringify(res))
      this.tabledata = data.Metrics
      jQuery(document).ready(function(){ 
        jQuery('#demoapptable').DataTable({                            
          "bLengthChange": false,
          "pageLength": 10,
          "searching": true,
          "bInfo": true,
          "bSort" : true,
          "bPaginate": true,
          "dom": 'frtip',
        })
      })
    })
  }

  getdropdowndata() {
    this.loginservice.getdropdownlistgeneral().then(res=>{
      var data = JSON.parse(JSON.stringify(res))
      this.cpu_list = data.category[0].CPU
      this.memory_list = data.category[1].Memory
      this.storage_list = data.category[2].Storage
      this.network_list = data.category[3].Network
    })
  }

  showaddpop(){
    this.metricform.metricid = null;
    this.metricform.servername = '';
    this.metricform.cpuid = null;
    this.metricform.memoryid = null;
    this.metricform.storageid = null;
    this.metricform.ipaddress = '';
    this.metricform.networkid = null;
    this.metricform.location = '';
  }

  cancel(){
    this.metricform.metricid = null;
    this.metricform.servername = '';
    this.metricform.cpuid = null;
    this.metricform.memoryid = null;
    this.metricform.storageid = null;
    this.metricform.ipaddress = '';
    this.metricform.networkid = null;
    this.metricform.location = '';
  }

  savemetric(){
    this.loginservice.addmetric(this.metricform).then(res=>{
      console.log(res)
    })
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
