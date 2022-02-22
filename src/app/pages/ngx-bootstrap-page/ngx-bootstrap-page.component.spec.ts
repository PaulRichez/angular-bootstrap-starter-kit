import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapPageComponent } from './ngx-bootstrap-page.component';

describe('NgxBootstrapPageComponent', () => {
  let component: NgxBootstrapPageComponent;
  let fixture: ComponentFixture<NgxBootstrapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBootstrapPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
