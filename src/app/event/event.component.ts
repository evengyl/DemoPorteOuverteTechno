import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/shared/models/Evenement.model';
import { EventsService } from '../shared/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.css'],
})
export class EventComponent implements OnInit {

  tmpEvents : Evenement[] = []
  itemsScrolled : Evenement[] = []
  count: number = 0;

  constructor( private eventService : EventsService){}

  ngOnInit(){

    this.eventService.$allEventList.subscribe((res : Evenement[]) => {
      console.log(res)
      this.itemsScrolled = []
      for (let i = 0; i < 5; i++) {
        this.itemsScrolled.push(res[this.count]);
        this.count++
      }
    })
    this.eventService.getall()
  }


  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.itemsScrolled.push(this.tmpEvents[this.count]); // this will start pushing next 5 items
        this.count++
      }

      infiniteScroll.target.complete();
    }, 1000);
  }


  saveEventSession(event : Evenement)
  {
    sessionStorage.setItem("currentDetailsEvent", JSON.stringify(event))
  }



}
