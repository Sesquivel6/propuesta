import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoinformeComponent } from './segundoinforme.component';

describe('SegundoinformeComponent', () => {
  let component: SegundoinformeComponent;
  let fixture: ComponentFixture<SegundoinformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoinformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
