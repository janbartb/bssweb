import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-base',
    imports: [],
    templateUrl: './base.html',
    styleUrl: './base.css',
})
export class Base {
    //bssApi = inject(ApiService);
    //appData = inject(StatusService);
    //alert = inject(AlertService);
    router = inject(Router);

    title: string = 'B.S.S. informatie';
    version: string = '1.0.0';
    escapeCount: number = 0;

    // if a dialog is open set this to true to ignore the component @HostListener
    isDialogOpen: boolean = false;

    homePressed() {
        this.router.navigate(['home']);
    }

}
