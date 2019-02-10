import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRecentComponent } from './side-recent.component';

describe('SideRecentComponent', () => {
  let component: SideRecentComponent;
  let fixture: ComponentFixture<SideRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
