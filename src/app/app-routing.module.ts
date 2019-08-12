import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharttypesComponent } from './charttypes/charttypes.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' , pathMatch: 'full'},
  { path: 'login', component: LoginmoduleComponent },
  { path: 'charttypes', component: CharttypesComponent },
  { path: '**', component: LoginmoduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
