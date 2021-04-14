import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://reqres.in/api';

  constructor(private httpClient: HttpClient) {
  }

  getUserList(pageNo: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/users?page=' + pageNo);
  }

  login(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  signup(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url, data);
  }

  getUser(url: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + url);
  }

  updateUser(url: string, data: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + url + data.id, data);
  }

  delUser(url: string, id: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + url + id);
  }

}
