import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http,Response } from '@angular/http';  

@Injectable()
export class SelectedFrameUrlService {

  private urlSource = new BehaviorSubject<object>({});
  currentUrl = this.urlSource.asObservable();

  constructor() { }

  changeUrl(video: object) {
    this.urlSource.next(video)
  }

}