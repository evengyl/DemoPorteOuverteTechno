import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls : ["./productDetails.css"]
})
export class ProductDetailsComponent implements OnInit {
  
  constructor(private modalCtrl : ModalController) { }

  
  ngOnInit(): void {
    
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
}
