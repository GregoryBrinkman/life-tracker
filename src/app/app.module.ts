import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { WeightComponent } from './weight/weight.component';
import { DietComponent } from './diet/diet.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'weight', component: WeightComponent },
  { path: 'diet', component: DietComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    WeightComponent,
    DietComponent,
    ScheduleComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
