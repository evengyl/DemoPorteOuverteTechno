import { Injectable } from '@angular/core';
import { Evenement, mockEvent } from 'src/models/Event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  tmpEvents : Evenement[]

  constructor() {
    this.tmpEvents = mockEvent()
  }

  getAllEvents() {
    return this.tmpEvents
  }
}


