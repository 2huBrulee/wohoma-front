import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RolService } from '../servicios/rol.service';

@Component({
    selector: 'roles',
    templateUrl: './roles.component.html',
    styleUrls: [],
    providers: [RolService]
})
export class RolesComponent implements OnInit {
    @ViewChild('barraRoles') barraRoles: NavbarComponent;
    public roles;
    public isRoles;
    public msg;
    constructor(
        private rolServicio: RolService,
    ) { }
    ngOnInit() {
        this.listarRol();
        this.barraRoles.estadoRoles("activo");
    }

    listarRol() {
        this.rolServicio.listaRol().subscribe(
            response => {
                if(response.status != 204){
                    this.roles = response;
                    this.isRoles = true;
                }
                else{
                    this.msg = response.msg;
                    this.isRoles = false;
                }
            },
            error => { }
        );
    }

    /*onEliminarRol(id) {
        this.rolServicio.eliminarRol(id, this.roles).subscribe(
            response => {
                if (response.code == 400) this.listarRol();
                else alert("Error al borrar!");
            },
            error => { }
        );
    }*/
    onEliminarRol(id) {
        this.rolServicio.eliminarRol(id).subscribe(
            response => {
                if (response.status == 200) 
                    this.listarRol();
                else 
                    alert(response.msg);
            },
            error => { }
        );
    }
}