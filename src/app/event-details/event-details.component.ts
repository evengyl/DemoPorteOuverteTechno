import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    let tmp = JSON.parse(sessionStorage.getItem("currentDetailsEvent"))
    if(tmp.inscri == true)
    {
      this.colorButton = "danger"
      this.disableButton = true
    }


    return JSON.parse(sessionStorage.getItem("currentDetailsEvent"))
  }

  colorButton : string = "success"
  disableButton : boolean = false

  constructor(private modalCtrl : ModalController,
    private http : HttpClient,
    private eventService : EventsService) { }

  ngOnInit() {
  }

  inscription()
  {
    this.currentEvent.inscri = true
    sessionStorage.setItem("currentDetailsEvent", JSON.stringify(this.currentEvent) )

    this.colorButton = "danger"
    this.disableButton = true
    this.eventService.inscriptionEvent()
  }

}
