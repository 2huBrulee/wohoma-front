import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Permiso } from '../modelo/permiso';
import { API_URL } from './API_Conexion';

@Injectable()
export class PermisosService {

  constructor(private _http: Http) { }

  //lista de permisos
  listaPermiso() {
    //return this._http.get(this.url + "permiso/lista").map(res => res.json());
    return this._http.get(API_URL+ "permiso/lista/").map(res => res.json());
  }

  //Editar permiso => con esto se cambiara el estado del permiso
  editarPermiso(id, estado) {
    let params = {"estado": estado};
    console.log(params);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(API_URL + 'permiso/editar/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  //Detalle del empleado
  detallePermiso(id) {
    return this._http.get(API_URL+ "permiso/detalle/" + id).map(res => res.json());
  }

}
