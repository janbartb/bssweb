import { NgClass } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Alert } from '../../services/alert';

@Component({
    selector: 'app-help-score',
    imports: [
        NgClass
    ],
    templateUrl: './help-score.html',
    styleUrl: './help-score.css',
})
export class HelpScore {
    alertService = inject(Alert);
    activeTab: number = 0;

    activateTab(nr: number, event: MouseEvent) {
        event.stopPropagation();
        if (nr == this.activeTab) {
            return;
        }
        this.activeTab = nr;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeydownEvent(event: KeyboardEvent): boolean {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return true;
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): boolean {
        //console.log(event);
        console.log(event.code + ' : ' + event.key);
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            event.stopPropagation();
            if (event.key === 'ArrowUp') {
                this.switchActiveTab(-1);
            }
            if (event.key === 'ArrowDown') {
                this.switchActiveTab(1);
            }
            return false;
        }
        return true;
    }

    private switchActiveTab(direction: number) {
        let idx = this.activeTab + (direction < 0 ? -1 : 1);
        if (idx < 0) {
            idx = 1;
        }
        if (idx > 1) {
            idx = 0;
        }
        this.activeTab = idx;
    }

}
