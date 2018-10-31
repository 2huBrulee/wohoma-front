import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../modelo/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';
import { TiendaService } from '../../servicios/tienda.service';
import { RolService } from '../../servicios/rol.service';

@Component({
  selector: 'empleado/editar',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
  providers: [EmpleadoService, TiendaService, RolService]
})
export class EditarEmpleadoComponent implements OnInit {
  public empleado: Empleado;
  public tiendas;
  public roles;
  constructor(
    private empleadoServicio: EmpleadoService,
    private route: ActivatedRoute,
    private tiendaServicio: TiendaService,
    private rolServicio: RolService,
    private router: Router
  ) {
    this.empleado = new Empleado("", "", "", "", "", "", "", "", "", "", "", "");
  }

  ngOnInit() {
    this.detalleEmpleado();
    this.listaTienda();
    this.listarRol();
  }

  editarEmpleado() {
    console.log(this.empleado);
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.empleadoServicio.editarEmpleado(id, this.empleado).subscribe(
        response => {
          if (response.status != 400 || response.status != 404) 
            this.router.navigate(['/empleados']);
          else 
            console.log(response);
        }, error => {

        }
      );
    })
  }

  detalleEmpleado() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.empleadoServicio.detalleEmpleado(id).subscribe(
        response => {
          if (response.code != 404) {
            this.empleado = response;
          }
          else this.router.navigate(['empleado'])
        }, error => { }
      )
    }

    );
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


}
