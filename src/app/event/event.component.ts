import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Evenement } from 'src/models/Event.model';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.css'],
})
export class EventComponent implements OnInit {

  tmpEvents : Evenement[]

  constructor(
    private modalCtrl : ModalController,
    private eventService : EventService
    ) { }

  ngOnInit() {
    this.tmpEvents = this.eventService.getAllEvents()
  }

  async presentModal() {

    const modal = await this.modalCtrl.create({
      component: EventDetailsComponent,
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      handle: false,
      showBackdrop: true,
      backdropDismiss:true,
      animated:  true,
      keyboardClose: true,
      componentProps: {
      },
    });
    await modal.present();


    modal.onDidDismiss().then((_ => {
    }));
  }

}
