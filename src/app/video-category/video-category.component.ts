import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoCategoryService } from '../services/video-category.service';
import { SelectedVideoUrlService } from './selected-video.service';
import { CategoryNameService } from '../services/category-name.service';

@Component({
  selector: 'video-category',
  templateUrl: './video-category.component.html',
  styleUrls: ['./video-category.component.css']
})
export class VideoCategoryComponent implements OnInit {
  videoList: any[];
  url: object;
  constructor(private route: ActivatedRoute,
    private videoCategoryService: VideoCategoryService,
    private selectedVideoUrlService: SelectedVideoUrlService,
  private categoryNameService: CategoryNameService) { }
  id: any;
  categoryName: string;
  ngOnInit() {
    this.selectedVideoUrlService.currentUrl.subscribe(url => this.url = url);
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log(this.id);
    });
    const getUrl = 'category_id=' + this.id;
    this.videoCategoryService.get(getUrl)
    .subscribe(
      Response => {
        this.videoList = Response.records;
    });
    this.categoryNameService.get(getUrl)
    .subscribe(
      Response => {
        this.categoryName = Response;
    });
  }
  setUrl(url) {
    this.selectedVideoUrlService.changeUrl(url);
    window.scrollTo(0, 80);
  }
}
