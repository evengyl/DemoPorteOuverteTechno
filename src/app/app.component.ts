import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  logged : any
  constructor() {
    this.logged = sessionStorage.getItem("logged")
  }
}
