import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubTitleItem } from '../../models/page';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-page-header',
    imports: [
        NgClass
    ],
    templateUrl: './page-header.html',
    styleUrl: './page-header.css',
})
export class PageHeader {
    router = inject(Router);
    //appData = inject(StatusService);

    @Input() title: string = '';
    @Input() subtitleItems: SubTitleItem[] = [];
    @Input() help: boolean = false;
    @Output() prevPage: EventEmitter<SubTitleItem> = new EventEmitter<SubTitleItem>();

    gotoHome() {
        this.router.navigate(['home']);
    }

    subtitleClicked(idx: number) {
        this.prevPage.emit(this.subtitleItems[idx]);
    }

}
