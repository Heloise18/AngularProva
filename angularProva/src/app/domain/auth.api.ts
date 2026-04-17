import { Injectable } from "@angular/core";
import { Api } from "./api";
import { LoginDto, RegisterDto } from "./userInterface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class authApi extends Api{
    login = (data: LoginDto ) => {
        return this.client.post<string>(`${this.URL}/auth/login`, data).pipe()
    }

    register = (data: RegisterDto) =>{
        return this.client.post<string>(`${this.URL}/auth/subscribe`, data).pipe()
    }
}