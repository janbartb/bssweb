import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Button } from '../../models/user-interface';

@Component({
    selector: 'app-button',
    imports: [
        NgClass
    ],
    templateUrl: './button-comp.html',
    styleUrl: './button-comp.css',
})
export class ButtonComp implements OnInit {
    @Input() button: Button = new Button('', '');
    @Input() disabled: boolean = false;
    @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>();

    clicked() {
        if (!(this.button.disabled || this.disabled)) {
            this.buttonClicked.emit(this.button.key);
        }
    }

    ngOnInit(): void {
        this.button.show();
    }

}
