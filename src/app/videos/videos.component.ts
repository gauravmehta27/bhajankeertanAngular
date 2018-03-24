import { VideoService } from './../services/video.service';
import { Component, OnInit } from '@angular/core';
import { SelectedFrameUrlService } from './selected-frame-url.service';

@Component({
  selector: 'video-component',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  url: object;
  videoList: any[];
  constructor(private data: SelectedFrameUrlService, private videoService: VideoService ) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(url => this.url = url);
    this.videoService.getAll()
    .subscribe(
      Response => {
        this.videoList = Response.records;
      });
  }

  setUrl(url) {
    this.data.changeUrl(url);
    window.scrollTo(0, 80);
  }
}
