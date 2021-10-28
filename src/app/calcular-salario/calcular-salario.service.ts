import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CalcularSalarioService {

  constructor(private http: HttpClient) { }

  calcular_valor_receber(nome: string, meses_contratado: number, valor_venda: number): Observable<any> {
    return this.http.get('http://127.0.0.1:5000/api/calcular_valor_receber/' + nome +'/' + meses_contratado +'/' + valor_venda);
  }

}
