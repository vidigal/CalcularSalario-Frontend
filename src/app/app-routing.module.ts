import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalcularSalarioComponent} from "./calcular-salario/calcular-salario.component";

const routes: Routes = [{path: '', component: CalcularSalarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
