import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../modelo/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Rol } from '../../modelo/rol';
import { TiendaService } from '../../servicios/tienda.service';
import { Tienda } from '../../modelo/tienda';
import { RolService } from '../../servicios/rol.service';

@Component({
  selector: 'nuevo/empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: [],
  providers: [EmpleadoService, TiendaService, RolService]
})

export class NuevoEmpleadoComponent implements OnInit {
  public empleado: Empleado;
  public rol: Rol;
  public tiendas;
  public roles;
  constructor(
    private empleadoServicio: EmpleadoService,
    private tiendaServicio: TiendaService,
    private rolServicio: RolService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.empleado = new Empleado("", "", "", "", "", "", "", "", "", "", "", "");
    //this.rol = new Rol("","");
  }

  ngOnInit() {
    this.listaTienda();
    this.listarRol();
  }

  listaTienda() {
    this.tiendaServicio.listaTienda().subscribe(
      response => {
        if (response.status != 204) {
          this.tiendas = response;
        }
        else console.log(response);
      },
      error => { }
    );
  }

  listarRol() {
    this.rolServicio.listaRol().subscribe(
      response => {
        if (response.status != 204) {
          this.roles = response;
        }
        else console.log(response);
      },
      error => { }
    );
  }

  registrarEmpleado() {
    this.empleadoServicio.nuevoEmpleado(this.empleado).subscribe(
      response => {
        if (response.status != 400) this.router.navigate(['/empleados']);
        else console.log(response);
      },
      error => { }
    );
  }
}