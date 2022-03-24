import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { ChartsComponent } from './charts/charts.component';
import { StudentGridComponent } from './student/student-grid/student-grid.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    ChartsComponent,
    StudentGridComponent,
    StudentCreateComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,    
  ]
})
export class DashboardModule { }
