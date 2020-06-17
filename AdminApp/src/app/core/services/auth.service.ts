import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getFirebaseBackend } from '../../authUtils';
import { environment } from '../../../environments/environment';
import { User } from '../models/auth.models';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUserDetail: Observable<User>;
    user: User;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserDetail = this.currentUserSubject.asObservable();
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        return getFirebaseBackend().getAuthenticatedUser();
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    // login(email: string, password: string) {
    //     return getFirebaseBackend().loginUser(email, password).then((response: any) => {
    //         const user = response;
    //         return user;
    //     });
    // }
    login(Email: string, Password: string) {
        return this.http.post<any>(`${environment.apiUrl}/token`, { Email, Password })
            .pipe(map(data => {
                // login successful if there's a jwt token in the response
                if (data && data.accessToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data.user));
                    localStorage.setItem('access_token', data.accessToken);
                    this.currentUserSubject.next(data.user);
                }

                return data;
            }));
    }
    public currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getToken() {
        return localStorage.getItem('access_token');
    }
    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, password: string) {
        return getFirebaseBackend().registerUser(email, password).then((response: any) => {
            const user = response;
            return user;
        });
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return getFirebaseBackend().forgetPassword(email).then((response: any) => {
            const message = response.data;
            return message;
        });
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('access_token');
        this.currentUserSubject.next(null);
    }
}

