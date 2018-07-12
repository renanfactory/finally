import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AuthGuard } from './services/auth.guard.service';
import { AuthenticationService } from './services/authentication.service';
import { IdentityService } from './services/identity.service';
import { PessoaService } from './services/pessoa.service';
import { ValuesService } from './services/values.services';



import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthConfig } from './oauth.config';

import { ReactiveFormsModule } from "@angular/forms";

export function initOAuth(oAuthConfig: OAuthConfig): Function {
    return () => oAuthConfig.load();
}

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        OAuthModule.forRoot(),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    exports: [
    ],
    providers: [
        Title,
        OAuthConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: initOAuth,
            deps: [OAuthConfig],
            multi: true
        },
        AuthGuard,
        AuthenticationService,
        IdentityService,
        PessoaService,
        ValuesService,
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
