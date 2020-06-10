import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  private users: Array<User>;
  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

  public createUser(User: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, User);
  }
}