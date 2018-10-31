import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';

@Component({
    selector: 'empleado/lista',
    templateUrl: './empleados.component.html',
    styleUrls: [],
    providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
    @ViewChild('barraEmpleados') barraEmpleados:NavbarComponent;
	public empleados;
    public isEmpleado;
    public msg;
    constructor(
    	private empleadoServicio: EmpleadoService,
    ) { }

    ngOnInit() {
        this.listaEmpleado();
        this.barraEmpleados.estadoEmpleados("activo");
    }

    listaEmpleado(){
    	this.empleadoServicio.listaEmpleado().subscribe(
    		response => {
    			if(response.status != 204){
                    this.empleados = response;
                    this.isEmpleado = true;
                }else{
                    this.msg = response.msg;
                    this.isEmpleado = false;
                }
    		},
    		error => {

    		}
    	)
    }

    onEliminarEmpleado(id){
        this.empleadoServicio.eliminarEmpleado(id).subscribe(
            response => {
                if(response.status == 200) this.listaEmpleado();
                else alert(response.msg);
            },
            error => {}
        );
    }
}
