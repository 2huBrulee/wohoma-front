import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
    /*private claseInvisible = "invisible";
    public claseVisible = "visible";
    public claseActivo = "activo";*/
    
    public estadoPrincipal(clase : string): void{
        var principal = document.getElementById('link_principal');
        principal.className = clase;
    }

    public estadoTienda(clase : string): void{
        var tiendas = document.getElementById('link_tienda');
        tiendas.className = clase;
    }

    public estadoEmpleados(clase : string): void{
        var empleados = document.getElementById('link_empleados');
        empleados.className = clase;
    }

    public estadoRoles(clase : string): void{
        var roles = document.getElementById('link_roles');
        roles.className = clase;
    }

    public estadoPermisos(clase : string): void{
        var permisos = document.getElementById('link_permisos');
        permisos.className = clase;
    }

    ngOnInit() {
    }
}