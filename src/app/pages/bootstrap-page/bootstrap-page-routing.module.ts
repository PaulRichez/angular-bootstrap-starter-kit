import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BootstrapPageComponent } from './bootstrap-page.component';


const routes: Routes = [
  {
    path: '',
    component: BootstrapPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapPageRoutingModule { }
