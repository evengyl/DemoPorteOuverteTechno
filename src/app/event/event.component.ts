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


  constructor( private eventService : EventsService)
  {


  }


  ngOnInit(){
    console.log("ngOnInit event")
    this.eventService.$allEventList.subscribe((res : Evenement[]) => {
      console.log("Sub")
      res.forEach((event, i, array) => {
        if(event) this.tmpEvents.push(event)
      })

      for (let i = 0; i < 5; i++) {
        this.itemsScrolled.push(this.tmpEvents[this.count]);
        this.count++
      }

    console.log(this.itemsScrolled)

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
