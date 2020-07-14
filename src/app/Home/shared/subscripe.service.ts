import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscripeService {

  constructor(private http: HttpClient) { }

  public getOffers(): Observable<any> {
    return this.http.get('/assets/data/offer.json');

  }

}
