import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Page } from '../../models/page';
import { TopicAlgemeen } from '../../topics/topic-algemeen/topic-algemeen';
import { TopicSysRequired } from '../../topics/topic-sys-required/topic-sys-required';

@Component({
    selector: 'app-page-view',
    imports: [
        TopicAlgemeen,
        TopicSysRequired
    ],
    templateUrl: './page-view.html',
    styleUrl: './page-view.css',
})
export class PageView implements OnChanges {
    @Input() page: Page = new Page('');
    @Output() nextPage: EventEmitter<number> = new EventEmitter<number>();

    menuItemClicked(idx: number) {
        this.nextPage.emit(idx);
    }

    ngOnChanges(changes: SimpleChanges<PageView>): void {
        // const currPage = changes.page?.currentValue || new Page('');
        // this.title.emit(currPage.getFullTitle());
    }
}
