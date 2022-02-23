import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgBootstrapPageRoutingModule } from './ng-bootstrap-page-routing.module';
import { NgBootstrapPageComponent } from './ng-bootstrap-page.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgBootstrapPageComponent],
  imports: [
    CommonModule,
    NgBootstrapPageRoutingModule,
    NgbModule
  ]
})
export class NgBootstrapPageModule { }
