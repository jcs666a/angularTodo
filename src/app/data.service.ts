import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TodoModel } from './models/todos.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getTodosURL = 'http://www.mocky.io/v2/5e55554c3100001cb7eb3858';

  constructor(private httpclient: HttpClient) {}

  getTodos() {
    return this.httpclient.get(this.getTodosURL);
  }

}
