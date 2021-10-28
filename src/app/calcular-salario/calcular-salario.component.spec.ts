import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularSalarioComponent } from './calcular-salario.component';

describe('CalcularSalarioComponent', () => {
  let component: CalcularSalarioComponent;
  let fixture: ComponentFixture<CalcularSalarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularSalarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
