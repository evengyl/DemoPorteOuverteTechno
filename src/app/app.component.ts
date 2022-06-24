import { Component } from '@angular/core';
import { EventsService } from './shared/services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  logged : any
  constructor(private eventService : EventsService) {
    this.logged = sessionStorage.getItem("logged")
  }

  emitDatas()
  {
    this.eventService.emit()
  }
}
