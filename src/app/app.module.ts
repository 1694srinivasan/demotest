import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ChartsModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartModule } from 'angular2-highcharts';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
FusionChartsModule.fcRoot(FusionCharts, Charts , Fusion , Candy , PowerCharts);
import { AppComponent } from './app.component';
import { CharttypesComponent } from './charttypes/charttypes.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';

import { LoginService } from './loginmodule/loginmodule.service';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    CharttypesComponent,
    LoginmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    ChartsModule,
    RouterModule,
    FusionChartsModule,
    // tslint:disable-next-line: max-line-length
    ChartModule.forRoot(require('highcharts/highstock'), require('highcharts/modules/exporting'), require('highcharts/modules/annotations'), require('highcharts/highcharts-more'), require('highcharts/modules/solid-gauge'), require('highcharts/modules/drilldown')),
    AmChartsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
