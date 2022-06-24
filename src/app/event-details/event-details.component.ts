import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Evenement } from '../shared/models/Evenement.model';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls : ["./eventDetails.scss"]
})
export class EventDetailsComponent implements OnInit {

  get currentEvent() : Evenement {
    return JSON.parse(sessionStorage.getItem("currentDetailsEvent"))
  }

  colorButton : string = "success"
  disableButton : boolean = false

  constructor(
    private http : HttpClient,
    private eventService : EventsService,
    private router : Router) { }

  ngOnInit() {
  }

  inscription(currentEvent)
  {
    this.eventService.inscriptionEvent(currentEvent)
    this.router.navigate(["/account"])
  }

}
