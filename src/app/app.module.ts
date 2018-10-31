import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule, Routes } from '@angular/router';
import { TiendasComponent } from './tiendas/tiendas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado/nuevo-empleado.component';
import { HistorialEmpleadoComponent } from './empleados/historial-empleado/historial-empleado.component';
import { RolesComponent } from './roles/roles.component';
import { PermisosComponent } from './permisos/permisos.component';
import { NuevoRolComponent } from './roles/nuevo-rol/nuevo-rol.component';
import { EditarTiendaComponent } from './tiendas/editar-tienda/editar-tienda.component';
import { EditarRolComponent } from './roles/editar-rol/editar-rol.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { AuthGuardService } from './servicios/AuthGuardService'
import { UserService } from './servicios/user.service';

const rutas: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  //{path: '', redirectTo: '/principal', pathMatch: 'full'},
  //login
  {path: 'login', component: LoginComponent},
  //{path: 'login/:id', component: LoginComponent},
  //Principal
  {path: 'principal', component: PrincipalComponent, canActivate: [AuthGuardService]},
  //Tiendas
  {path: 'tiendas', component: TiendasComponent, canActivate: [AuthGuardService]},
  {path: 'tienda/editar/:id', component: EditarTiendaComponent, canActivate: [AuthGuardService]},
  //Roles
  {path: 'roles', component: RolesComponent, canActivate: [AuthGuardService]},
  {path: 'roles/nuevoRol', component: NuevoRolComponent, canActivate: [AuthGuardService]},
  {path: 'rol/editar/:id', component: EditarRolComponent, canActivate: [AuthGuardService]},
  //Empleados
  {path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuardService]},
  {path: 'empleado/nuevoEmpleado', component: NuevoEmpleadoComponent, canActivate: [AuthGuardService]},
  {path: 'empleado/editar/:id', component: EditarEmpleadoComponent, canActivate: [AuthGuardService]},
  //Permisos
  {path: 'permisos', component: PermisosComponent, canActivate: [AuthGuardService]},
  //Historial
  {path: 'empleado/historial/:id', component: HistorialEmpleadoComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    TiendasComponent,
    EmpleadosComponent,
    NuevoEmpleadoComponent,
    HistorialEmpleadoComponent,
    RolesComponent,
    NuevoRolComponent,
    PermisosComponent,
    EditarTiendaComponent,
    EditarRolComponent,
    EditarEmpleadoComponent,
    NavbarComponent,
    FechaPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [UserService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
