import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FrameUrlService } from '../frame-url.service';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  url: string;
  videoList: any[];
  constructor(private data: FrameUrlService, private videoService: VideoService) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(url => this.url = url);
    this.videoService.getAll()
    .subscribe(
      Response => {
        console.log(Response);
        this.videoList = Response.records;
    });
  }

  setUrl(url) {
    this.data.changeUrl(url);
  }
}
