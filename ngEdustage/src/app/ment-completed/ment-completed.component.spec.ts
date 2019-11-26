import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentCompletedComponent } from './ment-completed.component';

describe('MentCompletedComponent', () => {
  let component: MentCompletedComponent;
  let fixture: ComponentFixture<MentCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
