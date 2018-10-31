import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Empleado } from '../modelo/empleado';
import { API_URL } from './API_Conexion';

@Injectable()
export class EmpleadoService {
  
  constructor(private _http: Http) { }
  //Servicio para listar empleados
  listaEmpleado() {
    return this._http.get(API_URL + "empleado/lista/").map(res => res.json());
  }
  //Guardar nuevo empleado
  nuevoEmpleado(empleado: Empleado) {
    let params = empleado;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(API_URL + 'empleado/nuevo/', params, { headers: headers })
      .map(res => res.json());
  }

  //Editar empleado
  editarEmpleado(id, empleado: Empleado) {
    let params = empleado;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(API_URL + 'empleado/editar/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  eliminarEmpleado(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(API_URL + 'empleado/eliminar/' + id, null, { headers: headers })
      .map(res => res.json());
  }
  //Detalle del empleado
  detalleEmpleado(id) {
    return this._http.get(API_URL + "empleado/detalle/" + id).map(res => res.json());
  }

}
