import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBootstrapPageRoutingModule } from './ng-bootstrap-page-routing.module';
import { NgBootstrapPageComponent } from './ng-bootstrap-page.component';


@NgModule({
  declarations: [NgBootstrapPageComponent],
  imports: [
    CommonModule,
    NgBootstrapPageRoutingModule
  ]
})
export class NgBootstrapPageModule { }
