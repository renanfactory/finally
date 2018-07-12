import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AuthGuard } from '../../services/auth.guard.service';

import { PessoaComponent } from './pesssoas.component';

const routes: Routes = [
    { path: '', component: PessoaComponent, pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule { }
