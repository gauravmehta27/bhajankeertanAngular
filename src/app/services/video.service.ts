import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VideoService extends DataService {
  constructor(http: Http) {
    super('http://localhost/bhajankeertan/api/videos/read.php', http);
   }
}

