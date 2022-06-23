import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {

  password : string = "test1234"
  view : boolean = false

  constructor() {}

  viewPassword(){
    this.view = true
  }

  ngOnInit() {  }
}
