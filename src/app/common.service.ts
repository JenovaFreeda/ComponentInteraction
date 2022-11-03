import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  content: any;
  

  constructor(private http: HttpClient) { }

  getApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getAll(){
    return this.http.get('https://dummyjson.com/users');
  }
}
