import { NgModule } from '@angular/core';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PessoaComponent, AddPessoaComponent } from './pesssoas.component';


@NgModule({
    imports: [
        PessoasRoutingModule,
        SharedModule
    ],
    declarations: [
        AddPessoaComponent,
        PessoaComponent
    ],
    entryComponents: [AddPessoaComponent]
})
export class PessoasModule { }
