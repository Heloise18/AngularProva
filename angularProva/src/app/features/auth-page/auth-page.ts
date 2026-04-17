import { Component, Output } from '@angular/core';
import { Input_ } from '../../shared/components/input/input';
import { Button } from '../../shared/components/button/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { authApi } from '../../domain/auth.api';
import { Router } from '@angular/router';
import { LoginDto, RegisterDto } from '../../domain/userInterface';

@Component({
  selector: 'app-auth-page',
  imports: [Input_, Button, ReactiveFormsModule, FormBuilder],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export class AuthPage {

  save: string = "Salvar";

  constructor(
    private api : authApi,
    private router: Router
  ){ }


  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)])
  })

  get Email(){
    return this.authForm.get("email")
  }
  
  get Passqord(){
    return this.authForm.get("password")
  }

  login = () => {
    
    if(!this.authForm.valid){
      alert("Alguns campos invalidos!")
      return
    }
    const data: LoginDto ={
      email: this.Email?.value,
      password: this.Passqord?.value
    }

  this.api.login(data).subscribe(
    res => {
      sessionStorage.setItem("token", res)
      this.router.navigate([''])
      }
    )
 
  }



  register = () => {
    
    if(!this.authForm.valid){
      alert("Alguns campos invalidos!")
      return
    }

    


  }



}
