import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export default class Api<T> {
  
  protected readonly URL: string = "http://10.234.195.227:5294"
    protected headers : HttpHeaders = new HttpHeaders({
        "Authorization" : sessionStorage.getItem('token')!
    })



}
