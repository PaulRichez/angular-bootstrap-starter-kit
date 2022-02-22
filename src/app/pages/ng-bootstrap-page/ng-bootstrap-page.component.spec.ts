import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapPageComponent } from './ng-bootstrap-page.component';

describe('NgBootstrapPageComponent', () => {
  let component: NgBootstrapPageComponent;
  let fixture: ComponentFixture<NgBootstrapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBootstrapPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
