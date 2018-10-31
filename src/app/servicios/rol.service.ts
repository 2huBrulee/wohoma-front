import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Rol } from '../modelo/rol';
import { API_URL } from './API_Conexion';

@Injectable()
export class RolService {

  constructor(private _http: Http) { }

  //Servicio para listar roles
  listaRol() {
    return this._http.get(API_URL + "rol/lista/").map(res => res.json());
  }

  nuevoRol(rol: Rol) {
    let params = rol;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(API_URL + 'rol/nuevo/', params, { headers: headers })
      .map(res => res.json());
  }
  //Editar rol
  editarRol(id, rol: Rol) {
    let params = rol;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(API_URL + 'rol/editar/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  eliminarRol(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(API_URL + 'rol/eliminar/' + id, null, { headers: headers })
      .map(res => res.json());
  }

  //Detalle de rol
  detalleRol(id) {
    return this._http.get(API_URL + "rol/detalle/" + id).map(res => res.json());
  }

}
