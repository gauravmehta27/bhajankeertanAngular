import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'video-category',
  templateUrl: './video-category.component.html'
})
export class VideoCategoryComponent {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id= +params.get('id');
      console.log(id);
    })
  }
}