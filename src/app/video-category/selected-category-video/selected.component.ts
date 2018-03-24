import { Component, OnInit } from '@angular/core';
import { SelectedVideoUrlService } from '../selected-video.service';

@Component({
  selector: 'app-selected-category-video',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedVideoCategoryComponent implements OnInit {
  video: object;

  constructor(private data: SelectedVideoUrlService) { }

  ngOnInit() {
    this.data.currentUrl.subscribe(video => {this.video = video; });
  }

}
