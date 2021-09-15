import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FindBuddyComponent } from '././trips/find-buddy/find-buddy.component';
import { FindTripComponent } from '././trips/find-trip/find-trip.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path: 'findtrip', component: FindTripComponent},
  {path: 'findbuddy', component: FindBuddyComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
