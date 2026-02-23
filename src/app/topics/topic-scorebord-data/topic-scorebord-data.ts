import { Component, inject, OnInit } from '@angular/core';
import { WedSpeler } from '../../models/wedstrijd';
import { Data } from '../../services/data';
import { ScorebordSpeler } from '../../shared/scorebord/scorebord-speler/scorebord-speler';
import { NgClass } from '@angular/common';

class BordItem {
    tekst: string = '';
    hilite: string = '';

    constructor(t: string, h: string) {
        this.tekst = t;
        this.hilite = h;
    }
}

@Component({
    selector: 'app-topic-scorebord-data',
    imports: [
        ScorebordSpeler
    ],
    templateUrl: './topic-scorebord-data.html',
    styleUrl: './topic-scorebord-data.css',
})
export class TopicScorebordData implements OnInit {
    dao = inject(Data);
    speler: WedSpeler = new WedSpeler();
    bordItems: BordItem[] = [];
    hilite: string = '';

    hovered(idx: number) {
        this.hilite = idx == -1 ? '' : this.bordItems[idx].hilite;
    }

    ngOnInit(): void {
        const wed = this.dao.getWedstrijd(2);
        this.speler = wed.spelers[0];
        console.log(this.speler)

        this.bordItems.push(new BordItem('Naam (voornaam) van de speler', 'naam'));
        this.bordItems.push(new BordItem('Moyenne van speler (voor KNBB spelers het drieband klein moyenne)', 'tsmoy'));
        this.bordItems.push(new BordItem('Te spelen aantal caramboles (of beurten, afhankelijk van spelvorm)', 'tscar'));
        this.bordItems.push(new BordItem('Gespeeld aantal caramboles (wordt bij iedere gemaakte carambole opgehoogd)', 'car'));
        this.bordItems.push(new BordItem('Gespeeld aantal beurten (inclusief de huidige beurt)', 'brt'));
        this.bordItems.push(new BordItem('Gespeeld moyenne', 'moy'));
        this.bordItems.push(new BordItem('Huidige serie (wordt bij iedere gemaakte carambole opgehoogd)', 'ser'));
        this.bordItems.push(new BordItem('Laatste 5 gespeelde beurten (inclusief de huidige beurt)', 'last5'));
        this.bordItems.push(new BordItem('Percentage gespeelde caramboles t.o.v. te spelen caramboles', 'pcar'));
        this.bordItems.push(new BordItem('Hoogste serie', 'hser'));
        this.bordItems.push(new BordItem('Percentage gespeeld moyenne t.o.v. moyenne van speler', 'pmoy'));
        this.bordItems.push(new BordItem('Aantal wedstrijdpunten', 'pnt'));
    }
}
