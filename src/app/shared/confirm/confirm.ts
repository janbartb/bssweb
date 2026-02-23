import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ConfirmDialog } from '../../models/dialogs';
import { ButtonComp } from '../button-comp/button-comp';
import { Button } from '../../models/user-interface';

@Component({
    selector: 'app-confirm',
    imports: [
        ButtonComp
    ],
    templateUrl: './confirm.html',
    styleUrl: './confirm.css',
})
export class Confirm {
    @Input() dialog: ConfirmDialog = new ConfirmDialog('', []);
    @Output() reply: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() status: EventEmitter<boolean> = new EventEmitter<boolean>();
    title: string = '';

    buttonPressed(button: Button) {
        button.selected = true;
        setTimeout(() => {
            button.selected = false;
            switch (button.text) {
                case 'Ja':
                    this.acceptClicked();
                    break;
            
                case 'Nee':
                    this.rejectClicked();
                    break;
                
                default:
                    break;
            }
        }, 300);
    }

    acceptClicked() {
        this.reply.emit(true);
    }

    rejectClicked() {
        this.reply.emit(false);
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): boolean {
        console.log(event.code + ' : ' + event.key);
        if (event.key === 'Enter' || event.code === 'PageDown') {
            this.buttonPressed(this.dialog.acceptButton);
            return false;
        }
        if (event.key === 'Escape' || event.code === 'PageUp' || event.code === 'NumpadDecimal') {
            this.buttonPressed(this.dialog.rejectButton);
            return false;
        }
        return true;
    }

    ngOnInit(): void {
        this.title = 'Bevestig ' + this.dialog.actie;
        this.status.emit(true);
    }

    ngOnDestroy(): void {
        this.status.emit(false);
    }

}
