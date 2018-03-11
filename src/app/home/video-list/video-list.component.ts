import { Component, Output, EventEmitter } from '@angular/core';
import { FrameUrlService } from "../frame-url.service";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  url:string;

  constructor(private data: FrameUrlService) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(url => this.url = url)
  }

  setUrl(url) {
    this.data.changeUrl(url)
  }

  videoList=[{
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "artist": "Amarjeet Bijli"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "artist": "Devender Sagar"
  },
  {
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "artist": "Amarjeet Bijli"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "artist": "Devender Sagar"
  },
  {
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "artist": "Amarjeet Bijli"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "artist": "Devender Sagar"
  },{
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "artist": "Amarjeet Bijli"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "artist": "Devender Sagar"
  }]
}
