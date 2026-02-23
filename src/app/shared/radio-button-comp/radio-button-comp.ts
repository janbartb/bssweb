import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RadioButtons } from '../../models/user-interface';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-radio-button-comp',
    imports: [
        NgClass
    ],
    templateUrl: './radio-button-comp.html',
    styleUrl: './radio-button-comp.css',
})
export class RadioButtonComp {
    @Input() radios: RadioButtons = new RadioButtons([]);
    @Output() radioClicked: EventEmitter<number> = new EventEmitter<number>();

    radioButtonClicked(idx: number) {
        console.log('clicked : ' + idx);
        if (idx == this.radios.idxSelected) {
            return;
        }
        this.radios.idxSelected = idx;
        this.radioClicked.emit(idx);
    }
}
