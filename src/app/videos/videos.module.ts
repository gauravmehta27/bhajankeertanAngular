import { SafeUrlPipe } from './safe-url.pipe';
import { VideosComponent } from './videos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedVideoComponent } from './selected-video/selected-video.component';
import { SelectedFrameUrlService } from './selected-frame-url.service';

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
    SelectedFrameUrlService
  ]
})
export class VideosModule {
}
