import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evenement } from 'src/app/shared/models/Evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  iRandomizerImage : number = 1;
  inscriptionList : Evenement[] = []
  allEventList : Evenement[] | any

  $inscriptionList : Subject<Evenement[]> = new Subject<Evenement[]>()
  $allEventList : Subject<Evenement[] | false> = new Subject<Evenement[] | false>()

  emit(){
    this.$inscriptionList.next(this.inscriptionList)
    this.$allEventList.next(this.allEventList)
  }


  constructor(private http : HttpClient) { }


  getall() {

    this.http.get<Evenement[]>("./assets/datas/events.json").pipe(map((datas : Evenement[]) => datas.map((event : Evenement) => {

      event.image = `https://picsum.photos/400/300?random=${this.iRandomizerImage}`
      this.iRandomizerImage++
      return event
    })))
    .subscribe((datas) => {
      this.allEventList = datas
      this.emit()
    })

  }


  inscriptionEvent(event) : void{
    this.inscriptionList.push(event)
    let tmp = this.allEventList.indexOf(event)
    this.allEventList.splice(tmp, 1)
    this.emit()
  }

  deleteInscri(event)
  {
    let tmp = this.inscriptionList.indexOf(event)
    this.inscriptionList.splice(tmp, 1)
    this.emit()
  }

  getListIdEventInscri() : number[]{
    this.inscriptionList =  this.inscriptionList
    let tmpId : number[] = []

    this.inscriptionList.forEach((item) => {
      tmpId.push(item.idEvenement)
    })

    return tmpId
  }
}
