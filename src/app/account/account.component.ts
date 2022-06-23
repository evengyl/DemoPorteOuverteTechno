import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { modalController } from '@ionic/core';


class item{
  id : number
  name : string
  src : string
}



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls : ["./account.scss"]
})
export class AccountComponent implements OnInit {

 
  constructor(private router : Router) {}

  ngOnInit() {}


  logout(){
    sessionStorage.setItem("logged", "nok")
    this.router.navigate(["/login"])
  }
}
