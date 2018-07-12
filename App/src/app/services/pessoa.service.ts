import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable() export class PessoaService {

    constructor(private http: HttpClient,
        private authenticationService: AuthenticationService) { }

    public GetItensPessoa(): Observable<any[]> {
        // Sends an authenticated request.
        return this.http
            .get<any[]>("/api/Pessoas", {
                headers: this.authenticationService.getAuthorizationHeader()
            });
    }
}