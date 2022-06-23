import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { modalController } from '@ionic/core';


class item{
  id : number
  name : string
  src : string
}



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  currentModal : any = null

  public items : item[] = [
    {id : 1, name : "tata", src : "https://picsum.photos/400/200"},
    {id : 1, name : "tata", src : "https://picsum.photos/400/200"},
    {id : 1, name : "tata", src : "https://picsum.photos/400/200"},
    {id : 1, name : "tata", src : "https://picsum.photos/400/200"}
  ]
  
  constructor(private router : Router) {}

  ngOnInit() {}

  async openModal(opts = {}) {
    const modal = await modalController.create({
      component: 'modal-content',
      ...opts,
    });

    await modal.present();

    this.currentModal = modal;
  }

  dismissModal() {
    if (this.currentModal)
    {
      this.currentModal.dismiss().then(() => {
        this.currentModal = null;
      });
    }
  }

  logout(){
    sessionStorage.setItem("logged", "nok")
    this.router.navigate(["/login"])
  }
}
