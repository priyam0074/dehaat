import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenEditModalComponent } from './open-edit-modal.component';

describe('OpenEditModalComponent', () => {
  let component: OpenEditModalComponent;
  let fixture: ComponentFixture<OpenEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
