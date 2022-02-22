import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapPageRoutingModule } from './bootstrap-page-routing.module';
import { BootstrapPageComponent } from './bootstrap-page.component';


@NgModule({
  declarations: [BootstrapPageComponent],
  imports: [
    CommonModule,
    BootstrapPageRoutingModule
  ]
})
export class BootstrapPageModule { }
