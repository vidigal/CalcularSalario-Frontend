import { TestBed } from '@angular/core/testing';

import { CalcularSalarioService } from './calcular-salario.service';

describe('CalcularSalarioService', () => {
  let service: CalcularSalarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularSalarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
