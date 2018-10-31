import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Tienda } from '../modelo/tienda';
import { API_URL } from './API_Conexion';

@Injectable()
export class TiendaService {

  constructor(private _http: Http) { }

  //Servicio para listar tiendas
  listaTienda() {
    return this._http.get(API_URL + "tienda/lista/").map(res => res.json());
  }

  editarTienda(id, tienda: Tienda) {
    let params = tienda;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post(API_URL + 'tienda/editar/' + id, params, { headers: headers })
      .map(res => res.json());
  }

  eliminarTienda(id) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post(API_URL + 'tienda/eliminar/' + id, null, { headers: headers })
      .map(res => res.json());
  }
  //Detalle de tienda
  detalleTienda(id) {
    return this._http.get(API_URL + "tienda/detalle/" + id).map(res => res.json());
  }
}
