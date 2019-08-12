import { Component, OnInit } from '@angular/core';
import { LoginService } from '../loginmodule/loginmodule.service';
import { Router } from '@angular/router';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-charttypes',
  templateUrl: './charttypes.component.html',
  styleUrls: ['./charttypes.component.scss']
})
export class CharttypesComponent implements OnInit {
  loggedin: boolean;
  highchartoption: Object;
  optionsSelect: any;
  heatmapdataSource: Object;
  multilinecolumnchart: any[] = [];
  constructor(private loginservice: LoginService,
    private _router: Router,
    private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
      ];
    if (localStorage.getItem('login') === 'true') {
      this.loggedin = true;
      this._router.navigate(['charttypes']);
      this.getamchart1();
      this.getamchart2();
      this.getamchart3();
      this.getfusion1();
      this.getamchart4();
      this.getamchart5();
    } else {
      this.loggedin = false;
      this._router.navigate(['login']);
    }
  }

  getamchart5() {
    const chart = this.AmCharts.makeChart( 'columnchartdiv', {
      'type': 'serial',
      'theme': 'dark',
      'dataProvider': [ {
        'country': 'USA',
        'visits': 2025
      }, {
        'country': 'China',
        'visits': 1882
      }, {
        'country': 'Japan',
        'visits': 1809
      }, {
        'country': 'Germany',
        'visits': 1322
      }, {
        'country': 'UK',
        'visits': 1122
      }, {
        'country': 'France',
        'visits': 1114
      }, {
        'country': 'India',
        'visits': 984
      }, {
        'country': 'Spain',
        'visits': 711
      }, {
        'country': 'Netherlands',
        'visits': 665
      }, {
        'country': 'Russia',
        'visits': 580
      }, {
        'country': 'South Korea',
        'visits': 443
      }, {
        'country': 'Canada',
        'visits': 441
      }, {
        'country': 'Brazil',
        'visits': 395
      } ],
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
        'valueField': 'visits'
      } ],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
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

  getamchart4() {
    const chart = this.AmCharts.makeChart( 'lineareachartdiv', {
      'type': 'serial',
      'addClassNames': true,
      'theme': 'dark',
      'autoMargins': false,
      'marginLeft': 30,
      'marginRight': 8,
      'marginTop': 10,
      'marginBottom': 26,
      'balloon': {
        'adjustBorderColor': false,
        'horizontalPadding': 10,
        'verticalPadding': 8,
        'color': '#ffffff'
      },

      'dataProvider': [ {
        'year': 2009,
        'income': 23.5,
        'expenses': 21.1
      }, {
        'year': 2010,
        'income': 26.2,
        'expenses': 30.5
      }, {
        'year': 2011,
        'income': 30.1,
        'expenses': 34.9
      }, {
        'year': 2012,
        'income': 29.5,
        'expenses': 31.1
      }, {
        'year': 2013,
        'income': 30.6,
        'expenses': 28.2,
      }, {
        'year': 2014,
        'income': 34.1,
        'expenses': 32.9,
      } ],
      'valueAxes': [ {
        'axisAlpha': 0,
        'position': 'left'
      } ],
      'startDuration': 1,
      'graphs': [ {
        'alphaField': 'alpha',
        // tslint:disable-next-line: max-line-length
        'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
    'fillAlphas': 1,
        'title': 'Income',
        'type': 'line',
        'valueField': 'income',
        'dashLengthField': 'dashLengthColumn'
      }, {
        'id': 'graph2',
        // tslint:disable-next-line: max-line-length
        'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
        'bullet': 'round',
        'lineThickness': 3,
        'bulletSize': 7,
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'useLineColorForBulletBorder': true,
        'bulletBorderThickness': 3,
        'fillAlphas': 0,
        'lineAlpha': 1,
        'title': 'Expenses',
        'valueField': 'expenses',
        'dashLengthField': 'dashLengthLine'
      } ],
      'categoryField': 'year',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'tickLength': 0
      },
      'export': {
        'enabled': true
      }
    } );
  }

  getfusion1() {
    this.heatmapdataSource = {
      chart: {
        caption: 'Body Mass Index Chart',
        xaxisname: 'Height (cm)',
        yaxisname: 'Weight (kg)',
        theme: 'fusion',
        showvalues: '1',
        plottooltext: '<b>BMI Value : $dataValue</b>{br}$trLabel'
      },
      dataset: [
        {
          data: [
            {
              rowid: '40',
              columnid: '152',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '155',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '158',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '161',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '164',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '167',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 14 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '170',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 14 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '173',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '176',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '179',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '182',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '185',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '188',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '191',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '194',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '197',
              value: 10,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '200',
              value: 10,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '203',
              value: 10,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '206',
              value: 9,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 44 kg to be in Normal zone'
            },
            {
              rowid: '40',
              columnid: '209',
              value: 9,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 44 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '152',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '45',
              columnid: '155',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '45',
              columnid: '158',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '161',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '164',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '167',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '170',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '173',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '176',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '179',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '182',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '185',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '188',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '191',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 26 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '194',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 26 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '197',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 26 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '200',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 33 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '203',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 33 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '206',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 33 kg to be in Normal zone'
            },
            {
              rowid: '45',
              columnid: '209',
              value: 10,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 41 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '152',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '50',
              columnid: '155',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '50',
              columnid: '158',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '50',
              columnid: '161',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '50',
              columnid: '164',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '50',
              columnid: '167',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '170',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '173',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '176',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 9 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '179',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 9 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '182',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '185',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '188',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '191',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '194',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '197',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '200',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '203',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '206',
              value: 12,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
            },
            {
              rowid: '50',
              columnid: '209',
              value: 11,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '152',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '155',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '158',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '161',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '164',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '167',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '170',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '55',
              columnid: '173',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '176',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '179',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '182',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '185',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 10 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '188',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 10 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '191',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 15 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '194',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 15 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '197',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 20 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '200',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 20 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '203',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 25 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '206',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 25 kg to be in Normal zone'
            },
            {
              rowid: '55',
              columnid: '209',
              value: 13,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 25 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '152',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 3 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '155',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '158',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '161',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '164',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '167',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '170',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '173',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '176',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '179',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '60',
              columnid: '182',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '185',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '188',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 7 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '191',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '194',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '197',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '200',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '203',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '206',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
            },
            {
              rowid: '60',
              columnid: '209',
              value: 14,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '152',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '155',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '158',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 4 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '161',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '164',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '167',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '170',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '173',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '176',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '179',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '182',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '185',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '65',
              columnid: '188',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '191',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '194',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '197',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '200',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '203',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '206',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 17 kg to be in Normal zone'
            },
            {
              rowid: '65',
              columnid: '209',
              value: 15,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 17 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '152',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 13 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '155',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '158',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '161',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '164',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 4 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '167',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '170',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '173',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '176',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '179',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '182',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '185',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '188',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '191',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '194',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '70',
              columnid: '197',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '200',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '203',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '206',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
            },
            {
              rowid: '70',
              columnid: '209',
              value: 16,
              trlabel:
                'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '152',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 18 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '155',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 16 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '158',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '161',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '164',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '167',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 7 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '170',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 4 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '173',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '176',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '179',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '182',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '185',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '188',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '191',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '194',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '197',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '200',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '75',
              columnid: '203',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '206',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '75',
              columnid: '209',
              value: 17,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 9 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '152',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '155',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 21 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '158',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 19 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '161',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 17 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '164',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 15 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '167',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '170',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 10 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '173',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 7 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '176',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
            },
            {
              rowid: '80',
              columnid: '179',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '182',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '185',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '188',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '191',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '194',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '197',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '200',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '203',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '206',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '80',
              columnid: '209',
              value: 18,
              trlabel:
                'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '152',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 29 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '155',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 25 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '158',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '161',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 22 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '164',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 20 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '167',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '170',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 13 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '173',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '176',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '179',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '182',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
            },
            {
              rowid: '85',
              columnid: '185',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '188',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '191',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '194',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '197',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '200',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '203',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '206',
              value: 20,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '85',
              columnid: '209',
              value: 19,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '152',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 33 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '155',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 30 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '158',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 29 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '161',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '164',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 23 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '167',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 21 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '170',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 19 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '173',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '176',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '179',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '182',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '185',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
            },
            {
              rowid: '90',
              columnid: '188',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '191',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '194',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '197',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '200',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '203',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '206',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '90',
              columnid: '209',
              value: 21,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '95',
              columnid: '152',
              value: 41,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 38 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '155',
              value: 40,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '158',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 34 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '161',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 32 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '164',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '167',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '170',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '173',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 22 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '176',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 20 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '179',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 17 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '182',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 15 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '185',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '188',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '191',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
            },
            {
              rowid: '95',
              columnid: '194',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '95',
              columnid: '197',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '95',
              columnid: '200',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '95',
              columnid: '203',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '95',
              columnid: '206',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '95',
              columnid: '209',
              value: 22,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '100',
              columnid: '152',
              value: 43,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 43 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '155',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 42 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '158',
              value: 40,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '161',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '164',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 34 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '167',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 32 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '170',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 30 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '173',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 26 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '176',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 23 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '179',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 21 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '182',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 18 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '185',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '188',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '191',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '194',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '197',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
            },
            {
              rowid: '100',
              columnid: '200',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '100',
              columnid: '203',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '100',
              columnid: '206',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '100',
              columnid: '209',
              value: 23,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '105',
              columnid: '152',
              value: 45,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 48 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '155',
              value: 44,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 47 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '158',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 44 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '161',
              value: 41,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 42 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '164',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '167',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '170',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 34 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '173',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 31 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '176',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 29 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '179',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '182',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 25 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '185',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 22 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '188',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '191',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '194',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 13 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '197',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 10 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '200',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
            },
            {
              rowid: '105',
              columnid: '203',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '105',
              columnid: '206',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '105',
              columnid: '209',
              value: 24,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '110',
              columnid: '152',
              value: 48,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '155',
              value: 46,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 51 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '158',
              value: 44,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 49 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '161',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 46 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '164',
              value: 41,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 44 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '167',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 41 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '170',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '173',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '176',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 35 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '179',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 31 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '182',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '185',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 26 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '188',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 23 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '191',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 20 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '194',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 17 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '197',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '200',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '203',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 10 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '206',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
            },
            {
              rowid: '110',
              columnid: '209',
              value: 25,
              trlabel: 'You are in Normal zone'
            },
            {
              rowid: '115',
              columnid: '152',
              value: 50,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 59 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '155',
              value: 48,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '158',
              value: 46,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '161',
              value: 44,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 51 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '164',
              value: 43,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 49 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '167',
              value: 41,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 46 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '170',
              value: 40,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 45 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '173',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 41 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '176',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '179',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 37 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '182',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 34 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '185',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 32 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '188',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 30 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '191',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '194',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '197',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 21 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '200',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 18 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '203',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '206',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
            },
            {
              rowid: '115',
              columnid: '209',
              value: 26,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 7 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '152',
              value: 52,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 63 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '155',
              value: 50,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 61 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '158',
              value: 48,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 59 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '161',
              value: 46,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '164',
              value: 45,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 55 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '167',
              value: 43,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 52 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '170',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 50 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '173',
              value: 40,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '176',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 45 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '179',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 41 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '182',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 38 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '185',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 36 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '188',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 34 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '191',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 31 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '194',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '197',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 25 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '200',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 22 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '203',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '206',
              value: 28,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 15 kg to be in Normal zone'
            },
            {
              rowid: '120',
              columnid: '209',
              value: 27,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '152',
              value: 54,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 68 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '155',
              value: 52,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 66 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '158',
              value: 50,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 64 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '161',
              value: 48,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 61 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '164',
              value: 46,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 58 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '167',
              value: 45,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 57 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '170',
              value: 43,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '173',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 52 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '176',
              value: 40,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 48 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '179',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '182',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 44 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '185',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 42 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '188',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 37 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '191',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 35 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '194',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 32 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '197',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 29 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '200',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 26 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '203',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 23 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '206',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
            },
            {
              rowid: '125',
              columnid: '209',
              value: 29,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '152',
              value: 56,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 73 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '155',
              value: 54,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 71 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '158',
              value: 52,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 69 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '161',
              value: 50,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 66 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '164',
              value: 48,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 64 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '167',
              value: 47,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 62 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '170',
              value: 45,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 59 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '173',
              value: 43,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '176',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '179',
              value: 41,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 52 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '182',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 48 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '185',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '188',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 44 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '191',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 42 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '194',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 39 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '197',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 33 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '200',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 33 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '203',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 30 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '206',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
            },
            {
              rowid: '130',
              columnid: '209',
              value: 30,
              trlabel:
                'You are in Overweight zone.{br} You need to reduce 24 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '152',
              value: 58,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 78 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '155',
              value: 56,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 76 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '158',
              value: 54,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 74 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '161',
              value: 52,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 71 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '164',
              value: 50,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 69 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '167',
              value: 48,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 66 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '170',
              value: 47,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 65 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '173',
              value: 45,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 61 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '176',
              value: 44,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 60 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '179',
              value: 42,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '182',
              value: 41,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '185',
              value: 39,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 50 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '188',
              value: 38,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 48 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '191',
              value: 37,
              trlabel:
                'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '194',
              value: 36,
              trlabel:
                'You are in Obese Class III.{br} You need to reduce 43 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '197',
              value: 35,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 40 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '200',
              value: 34,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 38 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '203',
              value: 33,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 35 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '206',
              value: 32,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 32 kg to be in Normal zone'
            },
            {
              rowid: '135',
              columnid: '209',
              value: 31,
              trlabel:
                'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
            }
          ]
        }
      ],
      colorrange: {
        gradient: '0',
        minvalue: '0',
        code: 'E24B1A',
        startlabel: 'Severe Thinness',
        endlabel: 'Obese Class III',
        color: [
          {
            code: '0155E8',
            minvalue: '0',
            maxvalue: '16',
            label: 'Severe Thinness'
          },
          {
            code: '2BA8E8',
            minvalue: '17',
            maxvalue: '18',
            label: 'Moderate Thinness'
          },
          {
            code: '21C451',
            minvalue: '18.5',
            maxvalue: '25',
            label: 'Normal'
          },
          {
            code: 'FFD315',
            minvalue: '25.5',
            maxvalue: '30',
            label: 'Overweight'
          },
          {
            code: 'E8990C',
            minvalue: '30.5',
            maxvalue: '35',
            label: 'Obese Class I'
          },
          {
            code: 'C24314',
            minvalue: '35.5',
            maxvalue: '40',
            label: 'Obese Class II'
          },
          {
            code: 'FF0000',
            minvalue: '40.5',
            maxvalue: '100',
            label: 'Obese Class III'
          }
        ]
      }
    };
  }

  getamchart3() {
    const chart = this.AmCharts.makeChart( 'multilinechartdiv', {
      'type': 'serial',
      'addClassNames': true,
      'theme': 'dark',
      'autoMargins': false,
      'marginLeft': 30,
      'marginRight': 8,
      'marginTop': 10,
      'marginBottom': 26,
      'balloon': {
        'adjustBorderColor': false,
        'horizontalPadding': 10,
        'verticalPadding': 8,
        'color': '#ffffff'
      },

      'dataProvider': [ {
        'year': 2009,
        'income': 23.5,
        'expenses': 21.1
      }, {
        'year': 2010,
        'income': 26.2,
        'expenses': 30.5
      }, {
        'year': 2011,
        'income': 30.1,
        'expenses': 34.9
      }, {
        'year': 2012,
        'income': 29.5,
        'expenses': 31.1
      }, {
        'year': 2013,
        'income': 30.6,
        'expenses': 28.2,
      }, {
        'year': 2014,
        'income': 34.1,
        'expenses': 32.9,
      } ],
      'valueAxes': [ {
        'axisAlpha': 0,
        'position': 'left'
      } ],
      'startDuration': 1,
      'graphs': [ {
        'alphaField': 'alpha',
        // tslint:disable-next-line: max-line-length
        'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
    'lineAlpha': 1,
    'bullet': 'round',
        'lineThickness': 3,
        'title': 'Income',
        'type': 'line',
        'valueField': 'income',
        'dashLengthField': 'dashLengthColumn'
      }, {
        'id': 'graph2',
        // tslint:disable-next-line: max-line-length
        'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
        'bullet': 'round',
        'lineThickness': 3,
        'bulletSize': 7,
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'useLineColorForBulletBorder': true,
        'bulletBorderThickness': 3,
        'fillAlphas': 0,
        'lineAlpha': 1,
        'title': 'Expenses',
        'valueField': 'expenses',
        'dashLengthField': 'dashLengthLine'
      } ],
      'categoryField': 'year',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'tickLength': 0
      },
      'export': {
        'enabled': true
      }
    } );
  }

  getamchart2() {
    const chart = this.AmCharts.makeChart('clusterbarchartdiv', {
      'type': 'serial',
         'theme': 'dark',
      'categoryField': 'year',
      'rotate': true,
      'startDuration': 1,
      'categoryAxis': {
        'gridPosition': 'start',
        'position': 'left'
      },
      'trendLines': [],
      'graphs': [
        {
          'balloonText': 'Income:[[value]]',
          'fillAlphas': 0.8,
          'id': 'AmGraph-1',
          'lineAlpha': 0.2,
          'title': 'Income',
          'type': 'column',
          'valueField': 'income'
        },
        {
          'balloonText': 'Expenses:[[value]]',
          'fillAlphas': 0.8,
          'id': 'AmGraph-2',
          'lineAlpha': 0.2,
          'title': 'Expenses',
          'type': 'column',
          'valueField': 'expenses'
        }
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'position': 'top',
          'axisAlpha': 0
        }
      ],
      'allLabels': [],
      'balloon': {},
      'titles': [],
      'dataProvider': [
        {
          'year': 2005,
          'income': 23.5,
          'expenses': 18.1
        },
        {
          'year': 2006,
          'income': 26.2,
          'expenses': 22.8
        },
        {
          'year': 2007,
          'income': 30.1,
          'expenses': 23.9
        },
        {
          'year': 2008,
          'income': 29.5,
          'expenses': 25.1
        },
        {
          'year': 2009,
          'income': 24.6,
          'expenses': 25
        }
      ],
        'export': {
          'enabled': true
         }

    });
  }

  getamchart1() {
    this.multilinecolumnchart = [{
      'date': '2012-01-01',
      'distance': 227,
      'townName': 'New York',
      'townName2': 'New York',
      'townSize': 25,
      'latitude': 40.71,
      'duration': 408
  }, {
      'date': '2012-01-02',
      'distance': 371,
      'townName': 'Washington',
      'townSize': 14,
      'latitude': 38.89,
      'duration': 482
  }, {
      'date': '2012-01-03',
      'distance': 433,
      'townName': 'Wilmington',
      'townSize': 6,
      'latitude': 34.22,
      'duration': 562
  }, {
      'date': '2012-01-04',
      'distance': 345,
      'townName': 'Jacksonville',
      'townSize': 7,
      'latitude': 30.35,
      'duration': 379
  }, {
      'date': '2012-01-05',
      'distance': 480,
      'townName': 'Miami',
      'townName2': 'Miami',
      'townSize': 10,
      'latitude': 25.83,
      'duration': 501
  }, {
      'date': '2012-01-06',
      'distance': 386,
      'townName': 'Tallahassee',
      'townSize': 7,
      'latitude': 30.46,
      'duration': 443
  }, {
      'date': '2012-01-07',
      'distance': 348,
      'townName': 'New Orleans',
      'townSize': 10,
      'latitude': 29.94,
      'duration': 405
  }, {
      'date': '2012-01-08',
      'distance': 238,
      'townName': 'Houston',
      'townName2': 'Houston',
      'townSize': 16,
      'latitude': 29.76,
      'duration': 309
  }, {
      'date': '2012-01-09',
      'distance': 218,
      'townName': 'Dalas',
      'townSize': 17,
      'latitude': 32.8,
      'duration': 287
  }, {
      'date': '2012-01-10',
      'distance': 349,
      'townName': 'Oklahoma City',
      'townSize': 11,
      'latitude': 35.49,
      'duration': 485
  }, {
      'date': '2012-01-11',
      'distance': 603,
      'townName': 'Kansas City',
      'townSize': 10,
      'latitude': 39.1,
      'duration': 890
  }, {
      'date': '2012-01-12',
      'distance': 534,
      'townName': 'Denver',
      'townName2': 'Denver',
      'townSize': 18,
      'latitude': 39.74,
      'duration': 810
  }, {
      'date': '2012-01-13',
      'townName': 'Salt Lake City',
      'townSize': 12,
      'distance': 425,
      'duration': 670,
      'latitude': 40.75,

  }];
    const chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'none',
      'legend': {
          'equalWidths': false,
          'useGraphSettings': true,
          'valueAlign': 'left',
      },

      'dataProvider': this.multilinecolumnchart,
      'valueAxes': [{
          'stackType': 'regular',
          'axisAlpha': 0.3,
          'gridAlpha': 0,
          'title': 'count'
      }, {
          'id': 'durationAxis',
          'duration': 'mm',
          'durationUnits': {
              'hh': 'h ',
              'mm': 'min'
          },
          'axisAlpha': 0,
          'gridAlpha': 0,
          'inside': true,
          'position': 'right',
          'title': 'duration'
      }],
      'graphs': [{
          'alphaField': 'alpha',
          'balloonText': '[[value]] miles',
          'dashLengthField': 'dashLength',
          'fillAlphas': 0.7,
          'legendPeriodValueText': 'total: [[value.sum]] mi',
          'legendValueText': '[[value]] mi',
          'title': 'distance',
          'type': 'column',
          'valueField': 'distance',
          'valueAxis': 'distanceAxis'
      }, {
          'balloonText': 'latitude:[[value]]',
          'bullet': 'round',
          'bulletBorderAlpha': 1,
          'useLineColorForBulletBorder': true,
          'bulletColor': '#FFFFFF',
          'bulletSizeField': 'townSize',
          'dashLengthField': 'dashLength',
          'descriptionField': 'townName',
          'labelPosition': 'right',
          'labelText': '[[townName2]]',
          'legendValueText': '[[value]]/[[description]]',
          'title': 'latitude/city',
          'fillAlphas': 0.7,
          'type': 'column',
          'valueField': 'latitude',
          'valueAxis': 'latitudeAxis'
      }, {
          'bullet': 'square',
          'bulletBorderAlpha': 1,
          'bulletBorderThickness': 1,
          'dashLengthField': 'dashLength',
          'legendValueText': '[[value]]',
          'title': 'duration',
          'fillAlphas': 0,
          'valueField': 'duration',
          'valueAxis': 'durationAxis'
      }],
      'chartCursor': {
          'categoryBalloonDateFormat': 'DD',
          'cursorAlpha': 0.1,
          'cursorColor': '#000000',
           'fullWidth': true,
          'valueBalloonsEnabled': false,
          'zoomable': false
      },
      'dataDateFormat': 'YYYY-MM-DD',
      'categoryField': 'date',
      'categoryAxis': {
          'dateFormats': [{
              'period': 'DD',
              'format': 'DD'
          }, {
              'period': 'WW',
              'format': 'MMM DD'
          }, {
              'period': 'MM',
              'format': 'MMM'
          }, {
              'period': 'YYYY',
              'format': 'YYYY'
          }],
          'parseDates': true,
          'autoGridCount': false,
          'axisColor': '#555555',
          'gridAlpha': 0.1,
          'gridColor': '#FFFFFF',
          'gridCount': 50
      },
      'export': {
        'enabled': true
       }
  });
  }

  logout() {
    localStorage.setItem('login', 'false');
    this.loggedin = false;
    this._router.navigate(['login']);
    window.location.reload();
  }
}
