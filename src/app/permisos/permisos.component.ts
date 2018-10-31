import { NavbarComponent } from './../navbar/navbar.component';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PermisosService } from '../servicios/permisos.service';
import { EmpleadoService } from '../servicios/empleado.service';
import { Permiso } from '../modelo/permiso';
import { Empleado } from '../modelo/empleado';
import { FechaPipe } from '../pipes/fecha.pipe';


@Component({
    selector: 'permisos/lista',
    templateUrl: './permisos.component.html',
    styleUrls: [],
    providers: [PermisosService , EmpleadoService]
})
export class PermisosComponent implements OnInit{
	@ViewChild('barraPermisos') barraPermisos: NavbarComponent;
	public permisos;
	public isPermisos = false;
	public msg;
	//public empleado;
	constructor(
    	private permisosServicio: PermisosService,
    	private _route: ActivatedRoute,
  		private _router: Router,
    ) { }
    ngOnInit(){
		this.listaPermisos();
		this.barraPermisos.estadoPermisos("activo");
    }

    listaPermisos(){
    	this.permisosServicio.listaPermiso().subscribe(
    		response => {
    			if(response.status != 204){
					this.permisos = response;
					this.isPermisos = true;
    			}else{
					this.msg = response.msg;
					this.isPermisos = false;
    				//this._router.navigate(['principal'])
    		}
    		},
    		error => {

    		}
    	)
	}

	onAceptar(id){
		this.permisosServicio.editarPermiso(id, 'ACEPTADO').subscribe(
			response => {
                if (response.status != 400) 
					this.listaPermisos();
                else
					console.log("ERROR"+response.status);
            },
            error => { }
		);
	}

	onDenegar(id){
		this.permisosServicio.editarPermiso(id, 'RECHAZADO').subscribe(
			response => {
				if (response.status != 400) 
					this.listaPermisos();
                else
					console.log("ERROR"+response.status);
            },
            error => { }
		);
	}
	
	//funcion editar permiso

}