import { SafeVideoPipe } from './safe-video-url.pipe';
import { VideoCategoryComponent } from './video-category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCategoryService } from '../services/video-category.service';
import { SelectedVideoUrlService } from './selected-video.service';
import { SelectedVideoCategoryComponent } from './selected-category-video/selected.component';
import { CategoryNameService } from '../services/category-name.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoCategoryComponent,
    SelectedVideoCategoryComponent,
    SafeVideoPipe
  ],
  providers: [
    VideoCategoryService,
    SelectedVideoUrlService,
    CategoryNameService
  ]
})
export class VideoCategoryModule {
}
