import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private baseUrl = 'https://reqres.in/api';
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  login(url: string, data: any): Observable<any>{
    return this.httpClient.post(this.baseUrl + url, data);
  }

  signup(url: string, data: any): Observable<any>{
    return this.httpClient.post(this.baseUrl + url, data);
  }

  getUser(url: string): Observable<any>{
    return this.httpClient.get(this.baseUrl + url);
  }

  updateUser(url: string, data: any): Observable<any>{
    return this.httpClient.post(this.baseUrl + url, data);
  }

  delUser(url: string, id: any): Observable<any>{
    return this.httpClient.delete(this.baseUrl + url + id);
  }

}
