import { Component, OnInit } from '@angular/core';
import {CalcularSalarioService} from "./calcular-salario.service";

@Component({
  selector: 'app-calcular-salario',
  templateUrl: './calcular-salario.component.html',
  styleUrls: ['./calcular-salario.component.css']
})
export class CalcularSalarioComponent implements OnInit {

  constructor(private calcularSalarioService: CalcularSalarioService) { }

  ngOnInit(): void {
    this.calcularSalarioService.calcular_valor_receber('Victor Vidigal', 5.0, 5000.1).subscribe(data => {
      console.log(data);
    });
  }

}
