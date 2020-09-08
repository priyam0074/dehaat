import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeleDirectoryComponent } from './search-tele-directory.component';

describe('SearchTeleDirectoryComponent', () => {
  let component: SearchTeleDirectoryComponent;
  let fixture: ComponentFixture<SearchTeleDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeleDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeleDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
