import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { IgniteComponent } from './components/ignite/ignite.component';
import { FinalizarComponent } from './components/finalizar/finalizar.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'checkout', component: FinalizarComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'ignite', component: IgniteComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
