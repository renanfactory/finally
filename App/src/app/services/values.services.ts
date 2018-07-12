import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable() export class ValuesService {

    constructor(private http: HttpClient,
        private authenticationService: AuthenticationService) { }

    public GetItensValue(): Observable<object> {
        // Sends an authenticated request.
        return this.http
            .get("/api/values", {
                headers: this.authenticationService.getAuthorizationHeader()
            });
    }
}