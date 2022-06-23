import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  fakeLogin : any = {
    login : "techno",
    pwd : "test1234"
  }

  constructor(private router : Router) {}

  onLogin() {
    if (this.login.valid) {
      if(this.login.value.login == this.fakeLogin.login && this.login.value.password == this.fakeLogin.pwd)
      {
        sessionStorage.setItem("logged", "ok")
        this.router.navigate(["/accueil"])
      }
      else{
        sessionStorage.setItem("logged", "nok")
      }
    }
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      login: new FormControl('techno', [Validators.required]),
      password: new FormControl('test1234', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
    });
  }
}
