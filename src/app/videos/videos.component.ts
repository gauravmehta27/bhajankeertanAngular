import { Component } from '@angular/core';
import { SelectedFrameUrlService } from './selected-frame-url.service';

@Component({
  selector: 'video-component',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  url:object;

  constructor(private data: SelectedFrameUrlService) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(url => this.url = url)
  }

  setUrl(url) {
    console.log(url);
    this.data.changeUrl(url);
    window.scrollTo(0, 80);
  }
  videoList=[{
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "singer": "Amarjeet Bijli",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    "lyricist": "Sh. S.L.Majboor"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "singer": "Devender Sagar",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "singer": "Amarjeet Bijli",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "singer": "Devender Sagar",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "singer": "Amarjeet Bijli",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "singer": "Devender Sagar",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },{
    'url': "https://www.youtube.com/embed/5NPICjUcMTg?autoplay=1",
    'title': "Bhawan Par Chainna Baaje",
    "thumbnail": "http://img.youtube.com/vi/5NPICjUcMTg/0.jpg",
    "duration": "4:50",
    "singer": "Amarjeet Bijli",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    'url': "https://www.youtube.com/embed/IEoOH4AkGtk?autoplay=1",
    'title': "Maa hai badi mahaan",
    "thumbnail": "http://img.youtube.com/vi/IEoOH4AkGtk/0.jpg",
    "duration": "6:00",
    "singer": "Devender Sagar",
    "lyricist": "Sh. S.L.Majboor",
    "description": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  }]
}
