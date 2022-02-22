import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxBootstrapPageRoutingModule } from './ngx-bootstrap-page-routing.module';
import { NgxBootstrapPageComponent } from './ngx-bootstrap-page.component';


@NgModule({
  declarations: [NgxBootstrapPageComponent],
  imports: [
    CommonModule,
    NgxBootstrapPageRoutingModule
  ]
})
export class NgxBootstrapPageModule { }
