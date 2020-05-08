import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 4 restaurants', () => {
    let restaurants: Restaurant[] = service.getAllRestaurants()
    expect(restaurants.length).toBe(4);
  });

  it(`should have 'Brazil, Brazil!' first`, () => {
    let restaurants: Restaurant[] = service.getAllRestaurants()
    expect(restaurants[0].name).toBe('Brazil, Brazil!');
  });


});
