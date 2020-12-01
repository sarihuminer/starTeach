import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcleimportComponent } from './excleimport.component';

describe('ExcleimportComponent', () => {
  let component: ExcleimportComponent;
  let fixture: ComponentFixture<ExcleimportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcleimportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcleimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
