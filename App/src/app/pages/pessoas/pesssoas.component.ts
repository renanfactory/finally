import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef, MatPaginator, MatSort } from "@angular/material";
import { PessoaService } from "../../services/pessoa.service";
import { DataSource } from "@angular/cdk/table";
import { Observable, BehaviorSubject, of } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { catchError, finalize } from "rxjs/operators";

/**
 * Data source to provide data rendered in the table.
 */
export class PessoasDataSource extends DataSource<any> {

    private arraySubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();
    
    constructor(private pessoaService: PessoaService) {
        super();
    }


    load(){
        this.loadingSubject.next(true);

        this.pessoaService.GetItensPessoa().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(lessons => this.arraySubject.next(lessons));
    }


    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     */
    connect(): Observable<any[]> {
        console.log("Connecting data source");
        return this.arraySubject.asObservable();
    }

    disconnect() {
        //
    }
}

/**
 * Pessoas Component Class
 */
@Component({
    selector: 'app-pessoas',
    templateUrl: './pessoas.component.html',
    styleUrls: ['./pessoas.component.scss']
})
export class PessoaComponent implements OnInit {
    values: any;
    dataSource: PessoasDataSource;

    displayedColumns = ['#', 'nome', 'sobrenome', 'dataNascimentoFormatada', 'sexo', 'actions'];

    @ViewChild(MatSort) sort: MatSort;

    constructor(
        public dialog: MatDialog,
        private pessoaService: PessoaService,
        private changeDetectorRefs: ChangeDetectorRef) {
        debugger;
    }

    add(): void {
        const dialogRef = this.dialog.open(AddPessoaComponent, {
            width: '860px',
            height: '550px'

        });
        dialogRef.afterOpen().subscribe(result => {
            console.log('The dialog was open');
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.refresh();
        });
    }

    ngOnInit(): void {
        this.dataSource = new PessoasDataSource(this.pessoaService);
        this.dataSource.load();
    }

    refresh() {
        this.dataSource.load();
        this.changeDetectorRefs.detectChanges();
    }
}


@Component({
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddPessoaComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private dialogRef: MatDialogRef<AddPessoaComponent>) {

    }

    ngOnInit() {
        this.form = this.fb.group({
            nome: ['', Validators.required],
            sobrenome: ['', Validators.required],
            dataNascimento: ['', Validators.required],
            sexo: ['', Validators.required],
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }
}