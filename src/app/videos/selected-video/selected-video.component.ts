import { Component, OnInit } from '@angular/core';
import { SelectedFrameUrlService } from '../selected-frame-url.service';

@Component({
  selector: 'selected-video',
  templateUrl: './selected-video.component.html',
  styleUrls: ['./selected-video.component.css']
})
export class SelectedVideoComponent implements OnInit {
  video: object;

  constructor(private data: SelectedFrameUrlService) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(video => {this.video = video; });
  }

}
