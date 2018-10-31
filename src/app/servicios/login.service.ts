import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { API_URL } from './API_Conexion';
//import { Empleado } from '../modelo/empleado'


@Injectable()
export class LoginService {

	constructor(private _http: Http) {
	}

	ingresar(user, pass) {
		let params = { "usuario": user, "password": pass };
		let headers = new Headers({ 'Content-Type': 'application/json' });
		return this._http.post(API_URL + "login/", params, { headers: headers }).map(res => res.json());
	}

}

