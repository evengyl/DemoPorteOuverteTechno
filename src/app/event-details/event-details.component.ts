import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Evenement } from '../shared/models/Evenement.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls : ["./eventDetails.scss"]
})
export class EventDetailsComponent implements OnInit {

  currentEvent : Evenement;

  constructor(private modalCtrl : ModalController, private http : HttpClient) {
    
  }

  ngOnInit() {
    this.currentEvent = JSON.parse(sessionStorage.getItem("currentDetailsEvent"))
    console.log(this.currentEvent)
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
}
