import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from 'src/app/shared/models/Evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  base : string = "https://appjourneemetierapi.azurewebsites.net/api"

  constructor(private http : HttpClient) { }

  getAllEvent() : Observable<Evenement[]>{
    return this.http.get<Evenement[]>(`${this.base}/Evenement`).pipe()
  }

  getEventById(id : number) : Observable<Evenement>{
    return this.http.get<Evenement>(`${this.base}/Evenement`).pipe()
  }
}
