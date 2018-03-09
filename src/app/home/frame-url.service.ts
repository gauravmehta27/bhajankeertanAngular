import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http,Response } from '@angular/http';  

@Injectable()
export class FrameUrlService {

  private urlSource = new BehaviorSubject<string>("https://www.youtube.com/embed/5NPICjUcMTg");
  currentUrl = this.urlSource.asObservable();

  constructor() { }

  changeUrl(message: string) {
    this.urlSource.next(message)
  }

}