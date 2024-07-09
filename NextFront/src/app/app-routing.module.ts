import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/services/auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { IgniteComponent } from './components/ignite/ignite.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'ignite', component: IgniteComponent },
   { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
