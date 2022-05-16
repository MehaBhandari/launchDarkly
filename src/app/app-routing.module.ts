import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import { Feature3Component } from './feature3/feature3.component';
import { Feature4Component } from './feature4/feature4.component';

const routes: Routes = [
  {path: 'accounts', component: Feature1Component},
  {path: 'transactions', component: Feature2Component},
  {path: 'reports', component: Feature3Component},
  {path: 'users', component: Feature4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
