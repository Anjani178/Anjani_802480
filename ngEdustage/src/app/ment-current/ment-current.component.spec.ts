import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentCurrentComponent } from './ment-current.component';

describe('MentCurrentComponent', () => {
  let component: MentCurrentComponent;
  let fixture: ComponentFixture<MentCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
