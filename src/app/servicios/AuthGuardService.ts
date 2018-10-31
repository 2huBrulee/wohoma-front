import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
;

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private userService: UserService) { };

    canActivate() : boolean{
        if (this.userService.isLoggedIn()) {
            return true;
        } else {
            window.alert("Debe iniciar sesion");
            return false;
        }
    }
}