import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restaurant Reviews';

constructor( public restaurantService: RestaurantService ) {
}

}
