import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ProductDetailsComponent } from '../product-details/product-details.component';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {


  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {}

  async presentModal() {

    const modal = await this.modalCtrl.create({
      component: ProductDetailsComponent,
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
