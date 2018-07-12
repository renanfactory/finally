import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatMenuModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

import { 
    CdkTableModule
} from '@angular/cdk/table';

const materialModules: any[] = [
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatMenuModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    CdkTableModule
];

@NgModule({
    imports: materialModules,
    exports: materialModules
})

export class MaterialModule { }
