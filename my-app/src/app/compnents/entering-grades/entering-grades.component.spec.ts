import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringGradesComponent } from './entering-grades.component';

describe('EnteringGradesComponent', () => {
  let component: EnteringGradesComponent;
  let fixture: ComponentFixture<EnteringGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteringGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
