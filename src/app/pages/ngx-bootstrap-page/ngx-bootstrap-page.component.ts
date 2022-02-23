import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ngx-bootstrap-page',
  templateUrl: './ngx-bootstrap-page.component.html',
  styleUrls: ['./ngx-bootstrap-page.component.scss']
})
export class NgxBootstrapPageComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
