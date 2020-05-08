import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService  {

  baseURL = 'http://localhost:8000/restaurants/'

  public getAllRestaurants():Observable<Restaurant[]> { 
    return <Observable<Restaurant[]>>this.http.get(this.baseURL)
  }

  public getRestaurantByIndex(index: number): Observable<Restaurant> {
    return <Observable<Restaurant>>this.http.get(this.baseURL+index)
  }

  constructor(private http: HttpClient) {}

}
