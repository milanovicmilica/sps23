import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReqtypeService {
  readonly ROOT_URL;
  readonly ROOT_URL2;
  constructor(private http: HttpClient) { 

    this.ROOT_URL = 'http://localhost:3000';
    this.ROOT_URL2 = 'http://localhost:3000';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}
