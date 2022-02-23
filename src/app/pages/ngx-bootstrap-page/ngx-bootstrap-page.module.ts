import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxBootstrapPageRoutingModule } from './ngx-bootstrap-page-routing.module';
import { NgxBootstrapPageComponent } from './ngx-bootstrap-page.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [NgxBootstrapPageComponent],
  imports: [
    CommonModule,
    NgxBootstrapPageRoutingModule,
    AccordionModule,
    AlertModule,
    TabsModule,
    PaginationModule,
    ProgressbarModule,
    TooltipModule,
    PopoverModule,
    ModalModule.forRoot(),
  ]
})
export class NgxBootstrapPageModule { }
