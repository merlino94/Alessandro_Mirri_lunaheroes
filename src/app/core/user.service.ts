import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

/**
 * This Service Class is used to get, register and delete Users from Server
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${config.apiUrl}/users`);
  }

  register(user: User) {
    return this.http.post(`${config.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${config.apiUrl}/users/${id}`);
  }
}
