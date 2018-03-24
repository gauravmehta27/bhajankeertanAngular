import { SafePipe } from './safety.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FrameUrlService } from './frame-url.service';
import { HttpModule } from '@angular/http';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeaturedPlaylistComponent } from './featured-playlist/featured-playlist.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    CarouselModule.forRoot(),
    HttpModule,
    HttpClientModule,
    BrowserModule
  ],
  declarations: [
    HomeComponent,
    SliderComponent,
    VideoFrameComponent,
    VideoListComponent,
    FeaturedPlaylistComponent,
    SafePipe
  ],
  providers: [
    FrameUrlService
  ]
})
export class HomeModule {
}
