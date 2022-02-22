import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgBootstrapPageComponent } from './ng-bootstrap-page.component';


const routes: Routes = [
  {
    path: '',
    component: NgBootstrapPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgBootstrapPageRoutingModule { }
