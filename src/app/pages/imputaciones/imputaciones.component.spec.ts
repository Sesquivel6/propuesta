import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputacionesComponent } from './imputaciones.component';

describe('ImputacionesComponent', () => {
  let component: ImputacionesComponent;
  let fixture: ComponentFixture<ImputacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImputacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
