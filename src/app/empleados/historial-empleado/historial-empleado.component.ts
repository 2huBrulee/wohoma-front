import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../modelo/empleado';
import { Asistencia } from '../../modelo/asistencia';
import { EmpleadoService } from '../../servicios/empleado.service';
import { AsistenciaService } from '../../servicios/asistencia.service';

@Component({
    selector: 'empleado/historial',
    templateUrl: './historial-empleado.component.html',
    styleUrls: [],
    providers: [EmpleadoService, AsistenciaService]
})
export class HistorialEmpleadoComponent implements OnInit {
    public empleado: Empleado;
    public asistencias: Asistencia;

    constructor(
        private empleadoServicio: EmpleadoService,
        private asistenciaServicio: AsistenciaService,
        private _route: ActivatedRoute,
        private _router: Router,
    ) { }
    ngOnInit() {
        this.detalleEmpleado();
        this.detalleAsistencia();
    }

    detalleEmpleado() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this.empleadoServicio.detalleEmpleado(id).subscribe(
                response => {
                    if (response.code != 404) {
                        this.empleado = response;
                    }
                    else this._router.navigate(['empleados'])
                }, error => { }
            )
        });
    }

    detalleAsistencia() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this.asistenciaServicio.asistenciaEmpleado(id).subscribe(
                response => {
                    if (response.status != 404)
                        this.asistencias = response;
                    else
                        this._router.navigate(['empleados'])
                }, error => { }
            )
        }
        );
    }

}