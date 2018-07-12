import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

    values: any;

    constructor(
        private valuesService: ValuesService) { }

    ngOnInit() {
        // Sends an authenticated request.
        this.valuesService.GetItensValue()
            .subscribe((data: any) => {
                this.values = data;
            },
                (error: HttpErrorResponse) => {
                    if (error.error instanceof Error) {
                        console.log('An error occurred:', error.error.message);
                    } else {
                        console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
                    }
                });
    }

}
