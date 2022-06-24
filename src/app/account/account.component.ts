import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { modalController } from '@ionic/core';
import { Evenement } from '../shared/models/Evenement.model';
import { EventsService } from '../shared/services/events.service';




@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls : ["./account.scss"]
})
export class AccountComponent implements OnInit {

  listEventInscri : Evenement[] = []

  constructor(private router : Router, private eventService : EventsService) {}

  ngOnInit() {
    this.eventService.$inscriptionList.subscribe((datas) => {
      this.listEventInscri = datas
    })
  }


  logout(){
    sessionStorage.setItem("logged", "nok")
    this.router.navigate(["/login"])
  }
}
