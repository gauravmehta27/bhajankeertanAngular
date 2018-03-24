import { DataService } from './data.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryNameService extends DataService {
  constructor(http: Http) {
    super('http://localhost/bhajankeertan/api/videos/category-name.php', http);
   }
}

