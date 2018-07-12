import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

// We use PathLocationStrategy - the default "HTML 5 pushState" style:
// - https://angular.io/docs/ts/latest/guide/router.html#!#browser-url-styles
// - Router on the server (see Startup.cs) must match the router on the client to use PathLocationStrategy
// and Lazy Loading Modules:
// - https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'account', loadChildren: './pages/account/account.module#AccountModule' },
    { path: 'pessoas', loadChildren: './pages/pessoas/pessoas.module#PessoasModule' },
    { path: 'resources', loadChildren: './pages/resources/resources.module#ResourcesModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
