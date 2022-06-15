import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls:["./home-page.css"]
})
export class HomePageComponent implements OnInit {

  loadIntro : string = ""

  constructor() { }

  ngOnInit() {
    this.loadIntro = localStorage.getItem("loadIntro")
  }

  disableIntro() : void{
    localStorage.setItem("loadIntro", "vu")
    this.loadIntro = localStorage.getItem("loadIntro")

  }

  reloadIntro() : void{
    localStorage.setItem("loadIntro", "non-vu")
    this.loadIntro = localStorage.getItem("loadIntro")

  }
}
