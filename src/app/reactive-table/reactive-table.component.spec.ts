import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTableComponent } from './reactive-table.component';

describe('ReactiveTableComponent', () => {
  let component: ReactiveTableComponent;
  let fixture: ComponentFixture<ReactiveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
