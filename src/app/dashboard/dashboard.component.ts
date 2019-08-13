import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginmodule/loginmodule.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
declare var require: any;
declare var jQuery: any;
const dt = require( 'datatables.net' );


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabledata: any[] = [];
  cpu_list: any[] = [];
  memory_list: any[] = [];
  storage_list: any[] = [];
  network_list: any[] = [];
  lat: any;
  long: any;
  metricform = {
    servername: '',
    cpuid: '',
    memoryid: '',
    storageid: '',
    ipaddress: '',
    networkid: '',
    location: '',
    metricid: ''
  };
  modaltitle: any;
  btntitle: any;
  highchartoption: Object;

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
      this.metricform.cpuid = null;
      this.metricform.memoryid = null;
      this.metricform.storageid = null;
      this.metricform.networkid = null;
    } else {
      this.loginservice.isLoggedin = false;
      this._router.navigate(['login']);
    }
  }

  getchartdata(cpu: any , storage: any , network: any) {
    let a = [{name: 'CPU', y: parseInt(cpu)}, {name: 'Storage', y: parseInt(storage)}, {name: 'Network', y: parseInt(network)}];
    this.loadhighcharts(a);
    this.loadchart(a);
  }

  loadhighcharts(a: any) {
    this.highchartoption = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Server Details',
        style: {
          color: '#ffffff'
      }

    },
    tooltip: {
        pointFormat: '{point.name}: <b>{point.y}</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            style: {
              color: '#ffffff'
          }
        }
    },
    series: [{
        colorByPoint: true,
        data: a,
    }]
    };
  }

  gettabledata() {
    this.loginservice.getmetricadatalistgeneral().then(res => {
      const data = JSON.parse(JSON.stringify(res));
      this.tabledata = data.Metrics;
      jQuery(document).ready(function() {
        jQuery('#demoapptable').DataTable({
          'bLengthChange': false,
          'pageLength': 10,
          'searching': true,
          'bInfo': true,
          'bSort' : true,
          'bPaginate': true,
          'dom': 'frtip',
        });
      });
    });
  }

  getdropdowndata() {
    this.loginservice.getdropdownlistgeneral().then(res => {
      const data = JSON.parse(JSON.stringify(res));
      this.cpu_list = data.category[0].CPU;
      this.memory_list = data.category[1].Memory;
      this.storage_list = data.category[2].Storage;
      this.network_list = data.category[3].Network;
    });
  }

  showaddpop() {
    this.modaltitle = 'Add';
    this.btntitle = 'Save';
    this.cancel();
  }

  emetric(met_id: any, met_name: any, cpus: any, memory: any, storage: any, ipaddress: any, network: any, location: any) {
    this.modaltitle = 'Edit';
    this.btntitle = 'Update';
    this.metricform = {
      servername: met_name,
      cpuid: cpus,
      memoryid: memory,
      storageid: storage,
      ipaddress: ipaddress,
      networkid: network,
      location: location,
      metricid: met_id
    };
  }

  cancel() {
    this.metricform.metricid = null;
    this.metricform.servername = '';
    this.metricform.cpuid = null;
    this.metricform.memoryid = null;
    this.metricform.storageid = null;
    this.metricform.ipaddress = '';
    this.metricform.networkid = null;
    this.metricform.location = '';
  }

  savemetric() {
    if (this.metricform.metricid == '' || this.metricform.metricid == null || this.metricform.metricid == undefined) {
      this.loginservice.addmetric(this.metricform).then(res => {
        if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
            jQuery('#demoapptable').DataTable().clear().destroy();
          }
          this.cancel();
          this.gettabledata();
      });
    } else {
      this.loginservice.updatemetric(this.metricform).then(res => {
        if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
            jQuery('#demoapptable').DataTable().clear().destroy();
          }
          this.cancel();
          this.gettabledata();
      });
    }
  }

  deletemetric(id: any) {
    this.loginservice.deletemetric(id).then(res => {
      if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
          jQuery('#demoapptable').DataTable().clear().destroy();
        }
        this.cancel();
        this.gettabledata();
    });
  }

  loadmap(lat: any, long: any) {
    this.lat = lat;
    this.long = long;
  }

  dmetric(id: any) {
    this.cancel();
    this.metricform.metricid = id;
  }

  loadchart(a: any) {
    const chart = this.AmCharts.makeChart( 'chartdiv', {
      'type': 'serial',
      'theme': 'dark',
      'dataProvider': a,
      'valueAxes': [ {
        'gridColor': '#FFFFFF',
        'gridAlpha': 0.2,
        'dashLength': 0
      } ],
      'gridAboveGraphs': true,
      'startDuration': 1,
      'graphs': [ {
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'y'
      } ],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'name',
      'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0,
        'tickPosition': 'start',
        'tickLength': 20
      },
      'export': {
        'enabled': true
      }

    } );
  }

}
