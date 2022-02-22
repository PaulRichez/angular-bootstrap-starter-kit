import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxBootstrapPageComponent } from './ngx-bootstrap-page.component';


const routes: Routes = [
  {
    path: '',
    component: NgxBootstrapPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxBootstrapPageRoutingModule { }
