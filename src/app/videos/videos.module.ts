import { SafeUrlPipe } from './safe-url.pipe';
import { VideosComponent } from './videos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedFrameUrlService } from './selected-frame-url.service';
import { VideoService } from '../services/video.service';
import { SelectedVideoComponent } from './selected-video/selected-video.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideosComponent,
    SafeUrlPipe,
    SelectedVideoComponent
  ],
  providers: [
    SelectedFrameUrlService,
    VideoService
  ]
})
export class VideosModule {
}
