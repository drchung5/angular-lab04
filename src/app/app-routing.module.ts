import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component"
// import { RestaurantLaToscaComponent } from './restaurant-la-tosca/restaurant-la-tosca.component';
// import { RestaurantBrazilBrazilComponent } from './restaurant-brazil-brazil/restaurant-brazil-brazil.component';
// import { RestaurantFukiSushiComponent } from './restaurant-fuki-sushi/restaurant-fuki-sushi.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

const routes: Routes = [
  {path: 'restaurants' , component: RestaurantListComponent},
  // {path: 'restaurants/brazil-brazil' , component: RestaurantBrazilBrazilComponent},
  // {path: 'restaurants/fuki-sushi' , component: RestaurantFukiSushiComponent},
  // {path: 'restaurants/la-tosca' , component: RestaurantLaToscaComponent},

  {path: 'restaurants/:id' , component: RestaurantDetailComponent},
  
  { path: '',  redirectTo: '/restaurants', pathMatch: 'full' },
  { path: '**',  redirectTo: '/restaurants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
