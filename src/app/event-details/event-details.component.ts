import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls : ["./eventDetails.css"]
})
export class EventDetailsComponent implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalCtrl.dismiss()
  }
}
