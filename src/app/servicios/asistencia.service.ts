import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Asistencia } from '../modelo/asistencia';
import { API_URL } from './API_Conexion';

@Injectable()
export class AsistenciaService {
  

  constructor(private _http: Http) { }
  //Lista de Asistencia
  asistenciaEmpleado(id){
    return this._http.get(API_URL + "asistencia/empleado/" + id).map(res => res.json());
  }

}
