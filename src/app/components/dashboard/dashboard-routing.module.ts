import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { StudentComponent } from './student/student.component';
import { ChartsComponent } from './charts/charts.component';
import { StudentGridComponent } from './student/student-grid/student-grid.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';

const routes: Routes = [
  { path : '' , component : DashboardComponent, children : [
    { path : '', component : InicioComponent },
    //{ path : 'students', component : StudentComponent },
    { path : 'students', component : StudentComponent, children : [
      { path : 'student-grid', component : StudentGridComponent },      
      { path : 'student-create', component : StudentCreateComponent },      
    ]},
    { path : 'charts', component : ChartsComponent },
    // { path : 'crear-usuario', component : CrearUsuarioComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
