import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    private valido=false;
    constructor() {

    }
    isLoggedIn(): boolean {
        return this.valido;
    }
    setLoggedIn(){
        this.valido = true;
    }
}