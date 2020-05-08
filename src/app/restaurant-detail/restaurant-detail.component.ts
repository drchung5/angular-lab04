import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant$ : Observable<Restaurant> 

  constructor(
    private restaurantService: RestaurantService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let index = Number(this.route.snapshot.paramMap.get("id"))
    this.restaurant$ = this.restaurantService.getRestaurantByIndex(index + 1)
  }

}
