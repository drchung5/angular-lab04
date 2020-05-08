import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants$ : Observable<Restaurant[]>

  constructor( private restaurantService: RestaurantService ) { 
    this.restaurants$ = restaurantService.getAllRestaurants()   
  }

  ngOnInit(): void {
  }

}
