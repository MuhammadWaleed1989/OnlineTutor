import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../core/models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/user`);
    }

    postUser(user: any) {
        return this.http.post(`${environment.apiUrl}/user/`, user);
    }

    updateUser(user: any, id: any) {
        return this.http.put(`${environment.apiUrl}/user/` + id, user);
    }

    deleteUser(id: string) {
        return this.http.delete(`${environment.apiUrl}/user/${id}`);
    }
}