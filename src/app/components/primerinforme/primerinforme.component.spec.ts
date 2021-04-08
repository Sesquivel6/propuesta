import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerinformeComponent } from './primerinforme.component';

describe('PrimerinformeComponent', () => {
  let component: PrimerinformeComponent;
  let fixture: ComponentFixture<PrimerinformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerinformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
