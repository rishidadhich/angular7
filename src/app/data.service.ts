import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }// dependency injection in the service

  getUsers(){
    return this.http.get('https://reqres.in/api/users');//end point

  }
}
