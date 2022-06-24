import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router : Router) {}

  canActivate(): boolean
  {
    let logged = sessionStorage.getItem("logged")
    if(logged == "ok"){
      return true
    }else{
      this.router.navigate(["/login"])
      return false
    }
  }
  
}
