import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Signal1Component } from './signal1/signal1.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'signal1',
        component: Signal1Component 
      },
      {
        path:'**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
