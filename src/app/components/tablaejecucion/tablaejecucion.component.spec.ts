import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaejecucionComponent } from './tablaejecucion.component';

describe('TablaejecucionComponent', () => {
  let component: TablaejecucionComponent;
  let fixture: ComponentFixture<TablaejecucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaejecucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaejecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
