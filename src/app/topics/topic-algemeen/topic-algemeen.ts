import { Component, OnInit } from '@angular/core';
import { ItemLijst } from "../../shared/item-lijst/item-lijst";

@Component({
    selector: 'app-topic-algemeen',
    imports: [
        ItemLijst
    ],
    templateUrl: './topic-algemeen.html',
    styleUrl: './topic-algemeen.css',
})
export class TopicAlgemeen implements OnInit {
    bordItems: string[] = [];

    ngOnInit(): void {
        this.bordItems = [
            'Naam (voornaam) van de speler',
            'Moyenne van speler (voor KNBB spelers het drieband klein moyenne)',
            'Te spelen aantal caramboles (of beurten, afhankelijk van spelvorm)',
            'Gespeeld aantal caramboles (wordt bij iedere gemaakte carambole opgehoogd)',
            'Gespeeld aantal beurten (inclusief de huidige beurt)',
            'Gespeeld moyenne',
            'Huidige serie (wordt bij iedere gemaakte carambole opgehoogd)',
            'Laatste 5 gespeelde beurten (inclusief de huidige beurt)',
            'Percentage gespeelde caramboles t.o.v. te spelen caramboles',
            'Hoogste serie',
            'Percentage gespeeld moyenne t.o.v. moyenne van speler',
            'Aantal wedstrijdpunten'
        ];
    }
}
