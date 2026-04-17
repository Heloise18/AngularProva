import { Injectable } from "@angular/core";
import { Api } from "./api";
import { LoginDto, RegisterDto } from "./userInterface";
import { Observable } from "rxjs";
import { GetAllCOntacts } from "./interfaces/chat";

@Injectable({
    providedIn: 'root'
})

export class chatApi extends Api{
  public getAllContacts = () : Observable<GetAllCOntacts> => {
    var token = sessionStorage.getItem('token')
    if(!token) alert("Unauthorized operation!!")
        return this.client.get<GetAllCOntacts>(`${this.URL}api/messages`, {headers:this.headers}).pipe();
  }


}