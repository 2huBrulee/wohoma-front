import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { Empleado } from '../modelo/empleado';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public usuario;
  public errorMensaje;
  public identidad;
  public token;

  constructor(
    private _loginService: LoginService,
    private _UserService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {

    this.usuario = {
      "email": "",
      "password": "",
      "gethash": "false"
    };
  }

  onSubmit(email, password) {
    this._loginService.ingresar(email, password).subscribe(
      response => {
        if (response.status == 200 && response.empleado.id_rol.id_rol == 1) {
          this._UserService.setLoggedIn();
          this._router.navigate(['/principal']);
        }
        else {
          if (response.status == 400 || response.empleado.id_rol.id_rol != 1) {
            alert('Correo y/o contraseña incorrectos');
            this.ngOnInit();
          }
        }
      },
      error => { }
    );
  }
}
