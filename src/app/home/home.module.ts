import { FrameUrlService } from './frame-url.service';
import { SafePipe } from './safety.pipe';
import { HttpModule } from '@angular/http';
import { DataService } from './../contact-form/data.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    CarouselModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    SliderComponent,
    VideoFrameComponent,
    VideoListComponent,
    SafePipe
  ],
  providers: [
    FrameUrlService
  ]
})
export class HomeModule {
}
