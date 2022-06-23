import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Evenement } from 'src/app/shared/models/Evenement.model';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventsService } from '../shared/services/events.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.css'],
})
export class EventComponent implements OnInit {

  tmpEvents : Evenement[]
  itemsScrolled = [];
  count: number = 0;
  iRandomizerImage : number = 1;

  constructor(
    private modalCtrl : ModalController,
    private eventService : EventsService,
    private router : Router,
    private http : HttpClient
    ) {

      this.http.get("./assets/datas/events.json").pipe(map((datas : Evenement[]) => datas.map((event : Evenement) => {
        let rand = Math.ceil(Math.random() * 10)
        event.image = `https://picsum.photos/768/300?random=${this.iRandomizerImage}`
        this.iRandomizerImage++
        return event
      })))
      .subscribe((res : Evenement[]) => {
        this.tmpEvents = res

        for (let i = 0; i < 10; i++) {  // here you can limit the items according to your needs.
          this.itemsScrolled.push(this.tmpEvents[this.count]);   // your JSON data which you want to display
          this.count++ //i am using a count variable to keep track of inserted records to avoid inserting duplicate records on infinite scroll
        }
      })

      
    }


  ngOnInit(){
    //CORS...
    // this.eventService.getAllEvent().subscribe((allEvents : Evenement[]) => {
    //   this.tmpEvents = allEvents
    // })
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


  goToDetailsView(item){
    this.router.navigate(["/details", item.slug]);
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
