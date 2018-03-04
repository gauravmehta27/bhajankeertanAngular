import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    HomeRoutingModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    SliderComponent
  ],
})
export class HomeModule {
}
