import { Component, OnInit } from '@angular/core';
import { shakeAnimation } from './auth-pin.animation';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-pin',
  templateUrl: './auth-pin.component.html',
  styleUrls: ['./auth-pin.scss'],
})
export class AuthPinComponent implements OnInit {
  pinLength : number = 4;
  pinPass : number[] = [1,2,3,4]
  pinRange = Array(this.pinLength).fill(undefined);
  pin: number[] = [];

  digits: any[] = [
    { area: 'number', pin: 1 },
    { area: 'number', pin: 2 },
    { area: 'number', pin: 3 },
    { area: 'number', pin: 4 },
    { area: 'number', pin: 5 },
    { area: 'number', pin: 6 },
    { area: 'number', pin: 7 },
    { area: 'number', pin: 8 },
    { area: 'number', pin: 9 },
    { area: false },
    { area: 'number', pin: 0 },
    { area: 'backspace' },
    { area: false },
    { area: 'finger' },
    { area: false },
  ];

  constructor(private router : Router) {}

  passwordClick(dig) {
    if (this.pin.length > this.pinLength) {
      return;
    }

    this.pin.push(dig.pin)

    if (this.pin.length === this.pinLength) {

      if(equals(this.pin, this.pinPass))
      {
        sessionStorage.setItem("logged", "ok")
        this.router.navigate(["/accueil"])
      }
      shakeAnimation(document.getElementById('shake-animation')).play().then(() => {
        this.pin = []
      })
    }

  }

  passwordClear() {
    this.pin.pop();
  }

  ngOnInit(): void {}
}


const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);