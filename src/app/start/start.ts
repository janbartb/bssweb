import { Component, inject, OnInit } from '@angular/core';
import { PageHeader } from '../shared/page-header/page-header';
import { Base } from '../base/base';
import { Page, SubTitleItem } from '../models/page';
import { Data } from '../services/data';
import { PageView } from '../shared/page-view/page-view';

@Component({
    selector: 'app-start',
    imports: [
        PageHeader,
        PageView
    ],
    templateUrl: './start.html',
    styleUrl: './start.css',
})
export class Start extends Base implements OnInit {
    dao = inject(Data);
    subtitle: SubTitleItem[] = [];
    page: Page = new Page('Start');
    startPage: Page = new Page('Start');

    setNextPage(idx: number) {
        this.page = this.copyPage(this.page.subPages[idx]);
        this.subtitle.push(new SubTitleItem(this.page.title, this.page.indexes));
    }

    setPrevPage(item: SubTitleItem) {
        this.page = this.copyStartPage();
        this.subtitle = [new SubTitleItem('Start', [])];
        if (item.indexes.length) {
            item.indexes.forEach(idx => {
                this.page = this.page.subPages[idx];
                this.subtitle.push(new SubTitleItem(this.page.title, this.page.indexes));
            });
        }
    }

    ngOnInit(): void {
        this.startPage = this.dao.getInitialPage();
        this.page = this.copyStartPage();
        this.subtitle = [new SubTitleItem('Start', [])];
    }

    private copyPage(pg: Page): Page {
        return JSON.parse(JSON.stringify(pg));
    }

    private copyStartPage(): Page {
        return JSON.parse(JSON.stringify(this.startPage));
    }

}
