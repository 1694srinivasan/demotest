import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharttypesComponent } from './charttypes/charttypes.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' , pathMatch: 'full'},
  { path: 'login', component: LoginmoduleComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: LoginmoduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
