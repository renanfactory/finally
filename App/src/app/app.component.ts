import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { OAuthService } from 'angular-oauth2-oidc';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { MenuItem } from './models/menu-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    navItems: MenuItem[] = [
        new MenuItem('Home', 'home')
    ];
    
    signedIn: Observable<boolean>;
    name: string;
    isAdmin: boolean;

    constructor(
        public title: Title,
        private oAuthService: OAuthService,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        if (this.oAuthService.hasValidAccessToken()) {
            this.authenticationService.init();

            // Strategy for refresh token through a scheduler.
            this.authenticationService.startupTokenRefresh();
        }
    }

    ngOnInit() {
        this.title.setTitle('Angular SPA WebAPI');

        this.signedIn = this.authenticationService.isSignedIn();

        this.authenticationService.userChanged().subscribe(
            (user: User) => {
                this.name = user.givenName;
                this.isAdmin = this.authenticationService.isInRole("administrator");
                this.updateMenu();
        });
    }

    signout(): void {
        this.authenticationService.signout();
        this.router.navigate(['/home']);
    }

    updateMenu() {
        this.navItems = [
            new MenuItem('Home', 'home')
        ];

        this.navItems.push(new MenuItem('Resources','resources'));
        this.navItems.push(new MenuItem('Pessoas','pessoas'));

        if (this.isAdmin) {
            //this.navItems.push(new MenuItem('Dashboard','dashboard'));
        }
    }
}
