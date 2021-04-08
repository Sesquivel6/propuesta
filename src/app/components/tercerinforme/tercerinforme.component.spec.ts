import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerinformeComponent } from './tercerinforme.component';

describe('TercerinformeComponent', () => {
  let component: TercerinformeComponent;
  let fixture: ComponentFixture<TercerinformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerinformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
