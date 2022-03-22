import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path : '' , component : DashboardComponent, children : [
    // { path : '', component : InicioComponent },
    // { path : 'usuarios', component : UsuariosComponent },
    // { path : 'reportes', component : ReportesComponent },
    // { path : 'crear-usuario', component : CrearUsuarioComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
