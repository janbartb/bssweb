import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-item-lijst',
    imports: [],
    templateUrl: './item-lijst.html',
    styleUrl: './item-lijst.css',
})
export class ItemLijst {
    @Input() items: string[] = [];
}
