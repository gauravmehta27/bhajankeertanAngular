import { Component, OnInit } from '@angular/core';
import { FrameUrlService } from "../frame-url.service";

@Component({
  selector: 'video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css']
})
export class VideoFrameComponent {
  message:string;

  constructor(private data: FrameUrlService) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(message => this.message = message)
  }

}
