import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './../navbar/navbar.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit {
  @ViewChild('barraPrincipal') barraPrincipal: NavbarComponent;

  constructor() { }

  ngOnInit() {
    this.barraPrincipal.estadoPrincipal("invisible");
    this.barraPrincipal.estadoTienda("invisible");
    this.barraPrincipal.estadoEmpleados("invisible");
    this.barraPrincipal.estadoRoles("invisible");
    this.barraPrincipal.estadoPermisos("invisible");
  }

}
