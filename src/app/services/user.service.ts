import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ROOT_URL = "http://localhost:3000/api/user/";
  constructor(private http: HttpClient) { }

  registration(user) {
    return this.http.post<User>(this.ROOT_URL + "registration", user)
  }

  login(user) {
    return this.http.post<User>(this.ROOT_URL + "login", user)
  }
}
